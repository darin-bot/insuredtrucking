// POST /api/readiness: score the quiz, route by licensed state, upsert to HubSpot
// (dry run without a token). Reuses lead-engine consent, ZIP3 check, and HubSpot client.

import { captureConsent, type ConsentRecord } from '../lead/consent'
import { checkZip, type ZipCheck } from '../lead/zipState'
import { normalizePhone, UTM_KEYS } from '../lead/validate'
import { sendToHubSpot, type HubSpotEnv, type HubSpotPayload } from '../lead/hubspot'
import { validateAnswers, scoreAnswers, levelFor, checklistFor, LEVEL_LABEL, DISCLAIMER, type Level, type QuizAnswers, type ChecklistItem } from './score'

export interface ReadinessEnv extends HubSpotEnv { HUBSPOT_PRIVATE_APP_TOKEN?: string; DRY_RUN?: string }
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
  contact: Contact; quiz: QuizAnswers; level: Level; route: Route; checklist: ChecklistItem[]
  fetchImpl?: typeof fetch
}): Promise<void> {
  const { contact, quiz, level, route, checklist, fetchImpl = fetch } = args
  const formData = new FormData()
  formData.append('_subject', `Readiness Checker Result: ${LEVEL_LABEL[level]} - ${contact.name}`)
  formData.append('_captcha', 'false')
  formData.append('_template', 'table')
  formData.append('name', contact.name)
  formData.append('email', contact.email)
  formData.append('phone', contact.phone ?? 'Not provided')
  formData.append('garaging_zip', contact.zip.zip)
  formData.append('garaging_state', contact.zip.state ?? 'Unknown')
  formData.append('result_level', LEVEL_LABEL[level])
  formData.append('route', ROUTE_LABEL[route])
  formData.append('licensed_state', contact.zip.licensed ? 'Yes' : 'No')
  formData.append('answers', JSON.stringify(quiz.answers, null, 2))
  formData.append('compliance', quiz.compliance.join(', ') || 'None selected')
  formData.append('checklist', checklist.map((c) => c.text).join('\n'))
  
  await fetchImpl('https://formsubmit.co/darin@insuredtrucking.com', {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' },
  })
}


const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } })

export async function handleReadiness(request: Request, env: ReadinessEnv, opts: { fetchImpl?: typeof fetch; now?: Date; log?: (...a: unknown[]) => void } = {}) {
  const log = opts.log ?? console.log
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
  const score = scoreAnswers(quiz)
  const level = levelFor(quiz, score)
  const route = routeFor(contact.zip, quiz)
  const checklist = checklistFor(quiz, level)
  const body = { ok: true, level, levelLabel: LEVEL_LABEL[level], route, checklist, disclaimer: DISCLAIMER, showQuoteLink: route === 'licensed' }
  if (honeypot) return json(body) // spam trap: same response, nothing stored
  
  const ip = request.headers.get('CF-Connecting-IP') ?? request.headers.get('X-Forwarded-For')?.split(',')[0].trim() ?? null
  const consent = captureConsent({ checked: contact.phone ? raw.consent : false, clientVersion: raw.consentVersion, ip, userAgent: request.headers.get('User-Agent'), pageUrl: contact.pageUrl, now })
  
  // Email result to darin@insuredtrucking.com (fail-safe: errors don't block the user's result)
  emailReadinessResult({ contact, quiz, level, route, checklist, fetchImpl: opts.fetchImpl })
    .catch((e) => log(JSON.stringify({ event: 'readiness.email_error', error: (e as Error).message })))
  
  // HubSpot integration (inert without token/config - fails safe, no user-visible errors)
  const dryRun = env.DRY_RUN === 'true' || !env.HUBSPOT_PRIVATE_APP_TOKEN
  if (!dryRun) {
    const payload = buildReadinessPayload({ contact, quiz, score, level, route, checklist, consent, env, submittedAt: now })
    sendToHubSpot(payload, env.HUBSPOT_PRIVATE_APP_TOKEN!, opts.fetchImpl ?? fetch)
      .then(() => log(JSON.stringify({ event: 'readiness.hubspot_success', route, level })))
      .catch((e) => log(JSON.stringify({ event: 'readiness.hubspot_error', error: (e as Error).message })))
  } else {
    log(JSON.stringify({ event: 'readiness.processed', route, level, note: 'HubSpot inactive (no token)' }))
  }
  
  // Return assessment result. Numeric score is never returned to the browser.
  return json(body)
}
