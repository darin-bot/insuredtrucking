// Internal scoring. The numeric score is stored in HubSpot for ATI only and is
// never shown to the carrier: carriers see the level and checklist.

import { QUESTIONS, COMPLIANCE_ITEMS } from './questions'

export type Level = 'ready' | 'almost' | 'not_ready' | 'not_a_fit'
export const LEVEL_LABEL: Record<Level, string> = {
  ready: 'Ready', almost: 'Almost ready', not_ready: 'Not ready yet', not_a_fit: 'Not a fit',
}

export interface QuizAnswers { answers: Record<string, string>; compliance: string[] }

const POINTS: Record<string, Record<string, number>> = {
  cdlYears: { lt1: 0, '1to2': 8, '2to3': 14, '3to5': 18, '5plus': 20 },
  incidents: { none: 15, one_minor: 10, one_accident: 6, multiple: 0, major: 0 },
  authorityAge: { not_filed: 6, pending: 8, lt6mo: 8, '6to12mo': 10, '12plus': 10 },
  dotMc: { none: 0, dot_only: 3, dot_mc: 5 },
  entity: { none: 0, sole_prop: 3, llc: 5, corp: 5 },
  ein: { yes: 3, no: 0, not_sure: 0 },
  truckOwnership: { own: 8, financed: 7, leased: 6, not_yet: 2 },
  truckAge: { lt10: 5, '10to15': 4, '15to20': 2, '20plus': 1, unknown: 1 },
  downPayment: { lt1k: 0, '1to3k': 4, '3to6k': 8, '6to10k': 10, '10kplus': 10 },
}
const COMPLIANCE_POINTS = 2
const MAX_RAW = Object.values(POINTS).reduce((s, m) => s + Math.max(...Object.values(m)), 0) + COMPLIANCE_ITEMS.length * COMPLIANCE_POINTS

export function validateAnswers(raw: unknown): { ok: true; value: QuizAnswers } | { ok: false; errors: Record<string, string> } {
  const src = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>
  const answers: Record<string, string> = {}
  const errors: Record<string, string> = {}
  for (const q of QUESTIONS) {
    const v = src[q.id]
    if (typeof v === 'string' && q.options.some((o) => o.value === v)) answers[q.id] = v
    else errors[q.id] = 'Please choose an answer.'
  }
  const c = Array.isArray(src.compliance) ? src.compliance : []
  const compliance = COMPLIANCE_ITEMS.map((i) => i.value).filter((v) => c.includes(v))
  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, value: { answers, compliance } }
}

/** 0 to 100, internal only. */
export function scoreAnswers(q: QuizAnswers): number {
  let raw = 0
  for (const [id, map] of Object.entries(POINTS)) raw += map[q.answers[id]] ?? 0
  raw += q.compliance.length * COMPLIANCE_POINTS
  return Math.round((raw / MAX_RAW) * 100)
}

export const READY_MIN = 75
export const ALMOST_MIN = 50

export function levelFor(q: QuizAnswers, score = scoreAnswers(q)): Level {
  const a = q.answers
  let level: Level = score >= READY_MIN ? 'ready' : score >= ALMOST_MIN ? 'almost' : 'not_ready'
  // Hard caps: most truck markets look closely at driving experience and record.
  if (a.cdlYears === 'lt1' || a.incidents === 'major') level = 'not_ready'
  else if (level === 'ready' && (a.cdlYears === '1to2' || a.incidents === 'multiple' || a.downPayment === 'lt1k' || a.truckOwnership === 'not_yet')) level = 'almost'
  return level
}

export type ChecklistItem = { id: string; text: string }

export function checklistFor(q: QuizAnswers, level: Level): ChecklistItem[] {
  const a = q.answers
  const out: ChecklistItem[] = []
  const add = (id: string, text: string) => out.push({ id, text })
  if (a.cdlYears === 'lt1' || a.cdlYears === '1to2') add('experience', 'Build more verifiable CDL experience. Many truck insurance markets prefer at least 2 years, so time with a carrier first can open more options.')
  if (a.incidents !== 'none' && a.incidents !== 'one_minor') add('mvr', 'Pull your motor vehicle record (MVR) and keep notes on each accident or violation so you can explain them clearly.')
  if (a.authorityAge === 'not_filed') add('authority', 'Plan your authority filing timeline. Talk insurance before you file so coverage can be in place when your authority is ready to go active.')
  if (a.dotMc === 'none') add('usdot', 'Apply for your USDOT number through FMCSA registration.')
  if (a.dotMc === 'dot_only') add('mc', 'If you will haul regulated freight across state lines, apply for operating authority (MC number) with FMCSA.')
  if (a.entity === 'none') add('entity', 'Choose a business structure (sole proprietor, LLC, or corporation). A CPA or attorney can help you decide.')
  if (a.ein !== 'yes') add('ein', 'Get a free EIN from the IRS at irs.gov so policies and permits match your business.')
  if (a.truckOwnership === 'not_yet') add('truck', 'Line up your truck and have the VIN, year, make, and model ready. Insurance pricing depends on the exact unit.')
  if (a.truckAge === '20plus' || a.truckAge === '15to20') add('truck_age', 'Older trucks can limit market options. Have recent inspection and maintenance records ready.')
  if (a.truckValue === '150kplus') add('pd', 'A high value truck means higher physical damage premium. Ask your lender what deductible and coverage they require.')
  if (a.truckOwnership === 'financed' || a.truckOwnership === 'leased') add('lienholder', 'Get your lender or lessor insurance requirements in writing, including lienholder or additional insured wording.')
  if (a.operationType === 'hazmat' || a.operationType === 'tanker') add('hazmat', 'Hazmat and tanker work usually needs extra endorsements and higher limits. Confirm what your shippers and FMCSA require.')
  if (a.downPayment === 'lt1k' || a.downPayment === '1to3k') add('budget', 'Set aside money for the insurance down payment. New authority policies often need a larger first payment than you might expect.')
  const missing = COMPLIANCE_ITEMS.filter((i) => !q.compliance.includes(i.value))
  for (const m of missing) add(`compliance_${m.value}`, `Set up: ${m.label}.`)
  if (level === 'ready') add('docs', 'Gather your CDL, USDOT and MC numbers, EIN, truck VIN, and garaging address so any licensed agent you work with can move quickly.')
  if (!out.length) add('review', 'Review your coverage needs with a licensed agent before your authority goes active.')
  return out
}

export const DISCLAIMER =
  'Educational only. This result is not a coverage decision, a quote, or an offer of insurance. Coverage and pricing are decided by insurance companies through underwriting. Compliance items are general information, so confirm your requirements with FMCSA and your state.'
