// POST /api/readiness: score the quiz, route by licensed state, upsert to HubSpot
// (dry run without a token). Reuses lead-engine consent, ZIP3 check, and HubSpot client.

import { captureConsent, type ConsentRecord } from '../lead/consent'
import { checkZip, type ZipCheck } from '../lead/zipState'
import { normalizePhone, UTM_KEYS } from '../lead/validate'
import { sendToHubSpot, type HubSpotEnv, type HubSpotPayload } from '../lead/hubspot'
import { validateAnswers, scoreAnswers, levelFor, checklistFor, LEVEL_LABEL, DISCLAIMER, type Level, type QuizAnswers, type ChecklistItem } from './score'

export interface ReadinessEnv extends HubSpotEnv { 
  HUBSPOT_PRIVATE_APP_TOKEN?: string; 
  DRY_RUN?: string;
  RESEND_API_KEY?: string;
}
export type Route = 'licensed' | 'out_of_area' | 'not_a_fit'
export const SOURCE = 'readiness_checker'

export function routeFor(zip: ZipCheck, q: QuizAnswers): Route {
  return zip.valid && zip.licensed ? 'licensed' : 'out_of_area'
}

export interface Contact { name: string; firstName: string; lastName: string; email: string; phone: string | null; zip: Extract<ZipCheck, { valid: true }>; pageUrl: string | null; utm: Record<string, string> }

const s = (v: unknown, n: number) => (typeof v === 'string' ? v.trim().slice(0, n) : '')

export function validateContact(raw: Record<string, unknown>): { ok: true; value: Contact } | { ok: false; errors: Record<string, string> } {
  const errors: Record<string, string> = {}
  const name = s(raw.name, 120)
  if (name.length < 2) errors.name = 'Please enter your name.'
  const email = s(raw.email, 200).toLowerCase()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = 'Please enter a valid email.'
  const zip = checkZip(raw.zip)
  if (!zip.valid) errors.zip = 'Please enter a 5-digit ZIP code.'
  const phoneRaw = s(raw.phone, 40)
  const phone = phoneRaw ? normalizePhone(phoneRaw) : null
  if (phoneRaw && !phone) errors.phone = 'Please enter a 10-digit US phone number, or leave it blank.'
  if (Object.keys(errors).length || !zip.valid) return { ok: false, errors }
  const [firstName, ...rest] = name.split(/\s+/)
  const utm: Record<string, string> = {}
  for (const k of UTM_KEYS) { const v = s(raw[k], 200); if (v) utm[k] = v }
  return { ok: true, value: { name, firstName, lastName: rest.join(' '), email, phone, zip, pageUrl: s(raw.pageUrl, 500) || null, utm } }
}

const ROUTE_LABEL: Record<Route, string> = { licensed: 'Licensed', out_of_area: 'Out of area', not_a_fit: 'Not a fit' }

export function buildReadinessPayload(args: {
  contact: Contact; quiz: QuizAnswers; score: number; level: Level; route: Route; checklist: ChecklistItem[]
  consent: ConsentRecord; env: HubSpotEnv; submittedAt: Date
}): HubSpotPayload {
  const { contact, quiz, score, level, route, checklist, consent, env } = args
  const doNotCall = route !== 'licensed' || !contact.phone || !consent.given
  const a = quiz.answers
  const shared: Record<string, string> = {
    ati_lead_source: SOURCE,
    ati_licensed_status: ROUTE_LABEL[route],
    ati_do_not_call_or_text: doNotCall ? 'true' : 'false',
    ati_garaging_zip: contact.zip.zip,
    ati_garaging_state: contact.zip.state ?? '',
    ati_form_submitted_at: args.submittedAt.toISOString(),
    ati_landing_page: contact.pageUrl ?? '',
    ati_consent_given: consent.given ? 'true' : 'false',
    ati_consent_text: consent.text ?? '',
    ati_consent_version: consent.version ?? '',
    ati_consent_timestamp: consent.timestamp,
    ati_consent_ip: consent.ip ?? '',
    ati_consent_user_agent: consent.userAgent ?? '',
    ati_consent_page_url: consent.pageUrl ?? '',
    ati_readiness_source: SOURCE,
    ati_readiness_score: String(score),
    ati_readiness_level: LEVEL_LABEL[level],
    ati_readiness_route: route,
    ati_readiness_answers: JSON.stringify({ ...a, compliance: quiz.compliance }),
    ati_readiness_checklist: checklist.map((c) => c.id).join(';'),
    ati_readiness_cdl_years: a.cdlYears,
    ati_readiness_incidents: a.incidents,
    ati_readiness_authority_age: a.authorityAge,
    ati_readiness_dot_mc_status: a.dotMc,
    ati_readiness_entity: a.entity,
    ati_readiness_ein: a.ein,
    ati_readiness_truck_ownership: a.truckOwnership,
    ati_readiness_truck_age: a.truckAge,
    ati_readiness_truck_value: a.truckValue,
    ati_readiness_operation_type: a.operationType,
    ati_readiness_down_payment: a.downPayment,
    ati_readiness_compliance: quiz.compliance.join(';'),
  }
  for (const [k, v] of Object.entries(contact.utm)) shared[`ati_${k}`] = v
  const stage = route === 'licensed' ? env.HUBSPOT_STAGE_NEW : route === 'out_of_area' ? env.HUBSPOT_STAGE_OUT_OF_AREA : env.HUBSPOT_STAGE_NOT_A_FIT
  const deal: Record<string, string> = { dealname: `Readiness: ${contact.name} - ${contact.zip.state ?? 'Out of area'} - ${LEVEL_LABEL[level]}`, ...shared }
  if (env.HUBSPOT_PIPELINE_ID) deal.pipeline = env.HUBSPOT_PIPELINE_ID
  if (stage) deal.dealstage = stage
  return {
    contact: { idProperty: 'email', id: contact.email, properties: {
      email: contact.email, firstname: contact.firstName, lastname: contact.lastName,
      phone: contact.phone ?? '', zip: contact.zip.zip, state: contact.zip.state ?? '', ...shared,
    } },
    deal: { properties: deal },
  }
}

async function emailReadinessResult(args: {
  contact: Contact; quiz: QuizAnswers; level: Level; route: Route; checklist: ChecklistItem[]; notes?: string
  env: ReadinessEnv; fetchImpl?: typeof fetch
}): Promise<{ ok: boolean; error?: string }> {
  const { contact, quiz, level, route, checklist, notes, env, fetchImpl = fetch } = args
  
  const apiKey = env.RESEND_API_KEY
  
  if (!apiKey) {
    return { ok: false, error: 'mail not configured' }
  }
  
  const subjectPrefix = route === 'out_of_area' ? 'Out of area - ' : ''
  const subject = `${subjectPrefix}Readiness Checker Result: ${LEVEL_LABEL[level]} - ${contact.name}`
  
  // Build plain-text body
  const textLines = [
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    `Phone: ${contact.phone ?? 'Not provided'}`,
    `Garaging ZIP: ${contact.zip.zip}`,
    `State: ${contact.zip.state ?? 'Unknown'}`,
    `Licensed State: ${contact.zip.licensed ? 'Yes' : 'No'}`,
    '',
    `Result Level: ${LEVEL_LABEL[level]}`,
    `Route: ${ROUTE_LABEL[route]}`,
    '',
    'Answers:',
    JSON.stringify(quiz.answers, null, 2),
    '',
    `Compliance: ${quiz.compliance.join(', ') || 'None selected'}`,
    '',
    'Checklist:',
    ...checklist.map((c) => `- ${c.text}`),
  ]
  if (notes) {
    textLines.push('', 'Notes:', notes)
  }
  const text = textLines.join('\n')
  
  // Build HTML table
  const htmlRows = [
    `<tr><td><strong>Name</strong></td><td>${escapeHtml(contact.name)}</td></tr>`,
    `<tr><td><strong>Email</strong></td><td>${escapeHtml(contact.email)}</td></tr>`,
    `<tr><td><strong>Phone</strong></td><td>${escapeHtml(contact.phone ?? 'Not provided')}</td></tr>`,
    `<tr><td><strong>Garaging ZIP</strong></td><td>${escapeHtml(contact.zip.zip)}</td></tr>`,
    `<tr><td><strong>State</strong></td><td>${escapeHtml(contact.zip.state ?? 'Unknown')}</td></tr>`,
    `<tr><td><strong>Licensed State</strong></td><td>${contact.zip.licensed ? 'Yes' : 'No'}</td></tr>`,
    `<tr><td><strong>Result Level</strong></td><td>${escapeHtml(LEVEL_LABEL[level])}</td></tr>`,
    `<tr><td><strong>Route</strong></td><td>${escapeHtml(ROUTE_LABEL[route])}</td></tr>`,
    `<tr><td><strong>Answers</strong></td><td><pre>${escapeHtml(JSON.stringify(quiz.answers, null, 2))}</pre></td></tr>`,
    `<tr><td><strong>Compliance</strong></td><td>${escapeHtml(quiz.compliance.join(', ') || 'None selected')}</td></tr>`,
    `<tr><td><strong>Checklist</strong></td><td>${checklist.map((c) => escapeHtml(c.text)).join('<br>')}</td></tr>`,
  ]
  if (notes) {
    htmlRows.push(`<tr><td><strong>Notes</strong></td><td>${escapeHtml(notes)}</td></tr>`)
  }
  const html = `<table border="1" cellpadding="8" cellspacing="0">${htmlRows.join('')}</table>`
  
  try {
    const response = await fetchImpl('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'ATI Readiness Checker <readiness@getinsuredtrucking.com>',
        to: ['darin@insuredtrucking.com'],
        subject,
        text,
        html,
      }),
    })
    
    if (!response.ok) {
      const errorText = await response.text()
      return { ok: false, error: `HTTP ${response.status}` }
    }
    
    const result = await response.json() as { id?: string; message?: string }
    if (!result.id) {
      return { ok: false, error: 'provider error' }
    }
    
    return { ok: true }
  } catch (err) {
    return { ok: false, error: 'network error' }
  }
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}


const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } })

export async function handleReadiness(request: Request, env: ReadinessEnv, opts: { fetchImpl?: typeof fetch; now?: Date; log?: (...a: unknown[]) => void; waitUntil?: (promise: Promise<unknown>) => void } = {}) {
  const log = opts.log ?? console.log
  const waitUntil = opts.waitUntil ?? ((p: Promise<unknown>) => { void p.catch(() => {}) })
  const now = opts.now ?? new Date()
  if (request.method !== 'POST') return json({ ok: false, error: 'Method not allowed' }, 405)
  let raw: Record<string, unknown>
  try { raw = (await request.json()) as Record<string, unknown> } catch { return json({ ok: false, error: 'Invalid JSON' }, 400) }
  if (!raw || typeof raw !== 'object') return json({ ok: false, error: 'Invalid body' }, 400)
  const honeypot = typeof raw.company_website === 'string' && raw.company_website.trim()
  const qv = validateAnswers(raw.answers ? { ...(raw.answers as object), compliance: raw.compliance } : raw)
  const cv = validateContact(raw)
  if (!qv.ok || !cv.ok) return json({ ok: false, errors: { ...(qv.ok ? {} : qv.errors), ...(cv.ok ? {} : cv.errors) } }, 422)
  const quiz = qv.value, contact = cv.value
  const notes = s(raw.notes, 1000)
  const score = scoreAnswers(quiz)
  const level = levelFor(quiz, score)
  const route = routeFor(contact.zip, quiz)
  const checklist = checklistFor(quiz, level)
  
  const ip = request.headers.get('CF-Connecting-IP') ?? request.headers.get('X-Forwarded-For')?.split(',')[0].trim() ?? null
  const consent = captureConsent({ checked: contact.phone ? raw.consent : false, clientVersion: raw.consentVersion, ip, userAgent: request.headers.get('User-Agent'), pageUrl: contact.pageUrl, now })
  
  // Email result to darin@insuredtrucking.com (await to report emailSent accurately)
  let emailSent = false
  let emailError: string | undefined
  if (honeypot) {
    // spam trap: same response, nothing stored or sent
    emailSent = false
  } else {
    const emailResult = await emailReadinessResult({ 
      contact, quiz, level, route, checklist, notes: notes || undefined, env, fetchImpl: opts.fetchImpl 
    })
    emailSent = emailResult.ok
    if (emailResult.ok) {
      log(JSON.stringify({ event: 'readiness.email_ok', route, level }))
    } else {
      emailError = emailResult.error
      log(JSON.stringify({ event: 'readiness.email_error', error: emailResult.error }))
    }
  }
  
  const body = { 
    ok: true, 
    level, 
    levelLabel: LEVEL_LABEL[level], 
    route, 
    checklist, 
    disclaimer: DISCLAIMER, 
    showQuoteLink: route === 'licensed',
    emailSent,
    ...(emailError ? { emailError } : {}),
  }
  if (honeypot) return json(body) // spam trap: same response, nothing stored
  
  // HubSpot integration (only for licensed routes, inert without token/config, fails safe)
  const dryRun = env.DRY_RUN === 'true' || !env.HUBSPOT_PRIVATE_APP_TOKEN
  if (!dryRun && route === 'licensed') {
    const payload = buildReadinessPayload({ contact, quiz, score, level, route, checklist, consent, env, submittedAt: now })
    waitUntil(
      sendToHubSpot(payload, env.HUBSPOT_PRIVATE_APP_TOKEN!, opts.fetchImpl ?? fetch)
        .then(() => log(JSON.stringify({ event: 'readiness.hubspot_success', route, level })))
        .catch((e) => log(JSON.stringify({ event: 'readiness.hubspot_error', error: (e as Error).message })))
    )
  } else {
    const reason = route !== 'licensed' ? 'out of service area' : 'HubSpot inactive (no token)'
    log(JSON.stringify({ event: 'readiness.processed', route, level, note: reason }))
  }
  
  // Return assessment result. Numeric score is never returned to the browser.
  return json(body)
}
