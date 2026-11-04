import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { scoreAnswers, levelFor, checklistFor, validateAnswers, type QuizAnswers } from '../lib/readiness/score'
import { routeFor, validateContact, buildReadinessPayload, handleReadiness } from '../lib/readiness/handler'
import { captureConsent, CONSENT_VERSION, CONSENT_TEXT } from '../lib/lead/consent'
import { checkZip } from '../lib/lead/zipState'
import { COMPLIANCE_ITEMS } from '../lib/readiness/questions'

const ALL_C = COMPLIANCE_ITEMS.map((c) => c.value)
const ready: QuizAnswers = { answers: { cdlYears: '5plus', incidents: 'none', authorityAge: '12plus', dotMc: 'dot_mc', entity: 'llc', ein: 'yes', truckOwnership: 'own', truckAge: 'lt10', truckValue: '80to150k', operationType: 'dry_van', downPayment: '10kplus' }, compliance: ALL_C }
const notReady: QuizAnswers = { answers: { cdlYears: 'lt1', incidents: 'multiple', authorityAge: 'not_filed', dotMc: 'none', entity: 'none', ein: 'no', truckOwnership: 'not_yet', truckAge: 'unknown', truckValue: 'unknown', operationType: 'flatbed', downPayment: 'lt1k' }, compliance: [] }
const mod = (q: QuizAnswers, a: Record<string, string>, compliance = q.compliance): QuizAnswers => ({ answers: { ...q.answers, ...a }, compliance })
const now = new Date('2026-11-01T18:00:00Z')

describe('scoring and levels', () => {
  it('perfect profile scores 100 and is Ready', () => { expect(scoreAnswers(ready)).toBe(100); expect(levelFor(ready)).toBe('ready') })
  it('weak profile scores low and is Not ready yet', () => { expect(scoreAnswers(notReady)).toBeLessThan(20); expect(levelFor(notReady)).toBe('not_ready') })
  it('middle profile is Almost ready', () => {
    const q = mod(ready, { cdlYears: '2to3', incidents: 'one_accident', downPayment: '1to3k', ein: 'no' }, ['eld'])
    const s = scoreAnswers(q); expect(s).toBeGreaterThanOrEqual(50); expect(s).toBeLessThan(75); expect(levelFor(q)).toBe('almost')
  })
  it('less than 1 year CDL or a major violation caps at Not ready yet', () => {
    expect(levelFor(mod(ready, { cdlYears: 'lt1' }))).toBe('not_ready')
    expect(levelFor(mod(ready, { incidents: 'major' }))).toBe('not_ready')
  })
  it('1 to 2 years CDL, no truck, or tiny budget caps at Almost ready', () => {
    expect(levelFor(mod(ready, { cdlYears: '1to2' }))).toBe('almost')
    expect(levelFor(mod(ready, { truckOwnership: 'not_yet' }))).toBe('almost')
    expect(levelFor(mod(ready, { downPayment: 'lt1k' }))).toBe('almost')
  })
  it('checklist is personalized', () => {
    const ids = checklistFor(notReady, 'not_ready').map((c) => c.id)
    expect(ids).toEqual(expect.arrayContaining(['experience', 'mvr', 'usdot', 'entity', 'ein', 'truck', 'budget', 'compliance_ucr']))
    const r = checklistFor(ready, 'ready').map((c) => c.id)
    expect(r).toContain('docs'); expect(r).not.toContain('usdot')
  })
  it('rejects missing or unknown answers', () => {
    const v = validateAnswers({ ...ready.answers, cdlYears: 'ten' }); expect(v.ok).toBe(false)
    if (!v.ok) expect(v.errors.cdlYears).toBeTruthy()
  })
})

describe('routing', () => {
  it('KY ZIP is licensed', () => expect(routeFor(checkZip('42001'), ready)).toBe('licensed'))
  it('90210 is out of area', () => expect(routeFor(checkZip('90210'), ready)).toBe('out_of_area'))
})

async function post(body: Record<string, unknown>) {
  const logs: string[] = []
  const req = new Request('https://x/api/readiness', { method: 'POST', body: JSON.stringify(body), headers: { 'CF-Connecting-IP': '203.0.113.9', 'User-Agent': 'UA' } })
  const res = await handleReadiness(req, {}, { now, log: (m) => logs.push(String(m)), fetchImpl: () => { throw new Error('no network in dry run') } })
  return { res, data: (await res.json()) as any, logs }
}
const base = { name: 'Pat Driver', email: 'pat@example.com', zip: '42001', phone: '', answers: ready.answers, compliance: ALL_C, consentVersion: CONSENT_VERSION }

describe('handler', () => {
  it('KY ready carrier: dry run, quote link, no score in response', async () => {
    const { data, logs } = await post(base)
    expect(data).toMatchObject({ ok: true, level: 'ready', levelLabel: 'Ready', route: 'licensed', showQuoteLink: true, dryRun: true })
    expect(JSON.stringify(data)).not.toMatch(/score/i)
    expect(logs.some((l) => l.includes('readiness.dry_run'))).toBe(true)
  })
  it('out of state: education only, no quote link', async () => {
    const { data } = await post({ ...base, zip: '90210' })
    expect(data.route).toBe('out_of_area'); expect(data.showQuoteLink).toBe(false); expect(data.checklist.length).toBeGreaterThan(0)
  })
  it('honeypot returns a result but logs nothing', async () => {
    const { data, logs } = await post({ ...base, company_website: 'spam.com' }); expect(data.ok).toBe(true); expect(logs).toEqual([])
  })
  it('validates contact fields; phone is optional', async () => {
    const { res, data } = await post({ ...base, email: 'bad', zip: '12' }); expect(res.status).toBe(422)
    expect(Object.keys(data.errors)).toEqual(expect.arrayContaining(['email', 'zip']))
    expect(validateContact({ name: 'Al B', email: 'a@b.co', zip: '42001' }).ok).toBe(true)
    expect(validateContact({ name: 'Al B', email: 'a@b.co', zip: '42001', phone: '123' }).ok).toBe(false)
  })
})

describe('payload mapping', () => {
  const build = (zip: string, phone: string, checked: boolean, q = ready) => {
    const c = validateContact({ name: 'Pat Q Driver', email: 'P@x.com', zip, phone, utm_source: 'google' }); if (!c.ok) throw new Error()
    const consent = captureConsent({ checked: phone ? checked : false, clientVersion: CONSENT_VERSION, ip: '1.2.3.4', userAgent: 'UA', pageUrl: null, now })
    const score = scoreAnswers(q), level = levelFor(q, score), route = routeFor(c.value.zip, q)
    return buildReadinessPayload({ contact: c.value, quiz: q, score, level, route, checklist: checklistFor(q, level), consent, env: { HUBSPOT_PIPELINE_ID: 'p', HUBSPOT_STAGE_NEW: 'new', HUBSPOT_STAGE_OUT_OF_AREA: 'oa', HUBSPOT_STAGE_NOT_A_FIT: 'naf' }, submittedAt: now })
  }
  it('maps contact and deal with readiness properties', () => {
    const p = build('42001', '270-555-0142', true)
    const d = p.deal.properties
    expect(p.contact.id).toBe('p@x.com'); expect(p.contact.properties.phone).toBe('+12705550142'); expect(p.contact.properties.lastname).toBe('Q Driver')
    expect(d).toMatchObject({ ati_lead_source: 'readiness_checker', ati_readiness_source: 'readiness_checker', ati_readiness_score: '100', ati_readiness_level: 'Ready', ati_readiness_route: 'licensed', ati_garaging_state: 'KY', ati_do_not_call_or_text: 'false', ati_consent_given: 'true', ati_consent_version: CONSENT_VERSION, ati_consent_text: CONSENT_TEXT, dealstage: 'new', pipeline: 'p', ati_utm_source: 'google' })
    expect(JSON.parse(d.ati_readiness_answers)).toMatchObject({ cdlYears: '5plus', compliance: ALL_C })
  })
  it('flags do-not-call for out of state, missing phone, or no consent', () => {
    expect(build('90210', '270-555-0142', true).deal.properties).toMatchObject({ ati_do_not_call_or_text: 'true', dealstage: 'oa', ati_licensed_status: 'Out of area' })
    expect(build('42001', '', true).deal.properties.ati_do_not_call_or_text).toBe('true')
    expect(build('42001', '270-555-0142', false).deal.properties).toMatchObject({ ati_do_not_call_or_text: 'true', ati_consent_given: 'false' })
  })
})

describe('banned terms in new files', () => {
  const files = ['lib/readiness/questions.ts', 'lib/readiness/score.ts', 'lib/readiness/handler.ts', 'functions/api/readiness.ts',
    'app/new-authority/readiness/page.tsx', 'app/new-authority/readiness/ReadinessQuiz.tsx', 'docs/readiness-checker.md', 'preview/worker.ts', 'tests/readiness.test.ts']
  const banned = [new RegExp('\u2014'), new RegExp('B' + 'MC', 'i'), new RegExp('cheap' + 'est', 'i'), new RegExp('guar' + 'ant', 'i'), new RegExp('you will get cover' + 'age', 'i'), new RegExp('Ben' + 'ton', 'i'), new RegExp('527-' + '3255')]
  for (const f of files) it(`${f} is clean`, () => {
    const text = readFileSync(f, 'utf8')
    for (const b of banned) expect(text, `${f} matches ${b}`).not.toMatch(b)
  })
})
