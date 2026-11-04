'use client'

import { useEffect, useState } from 'react'
import { CONSENT_TEXT, CONSENT_VERSION } from '@/lib/lead/consent'
import { UTM_KEYS } from '@/lib/lead/validate'
import { QUESTIONS, COMPLIANCE_ITEMS } from '@/lib/readiness/questions'
import { DISCLAIMER } from '@/lib/readiness/score'

const input = 'w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent bg-white'
const label = 'block text-sm font-semibold text-navy mb-1'

const STEPS: { title: string; ids: string[] }[] = [
  { title: 'Your driving', ids: ['cdlYears', 'incidents'] },
  { title: 'Your authority and business', ids: ['authorityAge', 'dotMc', 'entity', 'ein'] },
  { title: 'Your truck and freight', ids: ['truckOwnership', 'truckAge', 'truckValue', 'operationType', 'downPayment'] },
]
const TOTAL = STEPS.length + 2

type Result = { level: string; levelLabel: string; route: string; checklist: { id: string; text: string }[]; disclaimer: string; showQuoteLink: boolean; dryRun?: boolean }

export default function ReadinessQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [compliance, setCompliance] = useState<string[]>([])
  const [contact, setContact] = useState({ name: '', email: '', zip: '', phone: '', company_website: '' })
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [busy, setBusy] = useState(false)
  const [formError, setFormError] = useState('')
  const [result, setResult] = useState<Result | null>(null)
  const [utm, setUtm] = useState<Record<string, string>>({})

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const saved: Record<string, string> = JSON.parse(sessionStorage.getItem('ati_utm') || '{}')
    for (const k of UTM_KEYS) { const v = params.get(k); if (v) saved[k] = v }
    sessionStorage.setItem('ati_utm', JSON.stringify(saved))
    setUtm(saved)
  }, [])

  function next() {
    if (step < STEPS.length) {
      const missing: Record<string, string> = {}
      for (const id of STEPS[step].ids) if (!answers[id]) missing[id] = 'Please choose an answer.'
      setErrors(missing)
      if (Object.keys(missing).length) return
    }
    setStep(step + 1); window.scrollTo(0, 0)
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setFormError(''); setErrors({})
    setBusy(true)
    try {
      const res = await fetch('/api/readiness', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, compliance, ...contact, consent: contact.phone ? consent : false, consentVersion: CONSENT_VERSION, pageUrl: window.location.href, ...utm }),
      })
      const data = await res.json()
      if (res.ok && data.ok) { setResult(data); window.scrollTo(0, 0) }
      else if (data.errors) { setErrors(data.errors); setFormError('Please fix the highlighted fields.') }
      else setFormError(data.error || 'Something went wrong. Please try again.')
    } catch { setFormError('Something went wrong. Please try again.') } finally { setBusy(false) }
  }

  if (result) {
    return (
      <div className="card" data-testid="readiness-result" data-level={result.level} data-route={result.route}>
        <p className="text-sm text-steel mb-1">Your result</p>
        <h2 className="text-2xl font-bold text-navy mb-4" data-testid="result-level">{result.levelLabel}</h2>
        {result.route === 'out_of_area' && <p className="text-steel mb-4" data-testid="out-of-area-note">ATI is not licensed in your state yet, so we cannot quote this one. Your checklist below still applies wherever you run.</p>}
        {result.route === 'not_a_fit' && <p className="text-steel mb-4">This operation is outside what ATI writes, so we cannot quote it. The checklist below is for your planning.</p>}
        <h3 className="font-semibold text-navy mb-2">Your next steps</h3>
        <ul className="space-y-2 mb-6" data-testid="checklist">
          {result.checklist.map((c) => (
            <li key={c.id} className="flex items-start text-steel"><span className="mr-2 mt-1 inline-block w-3 h-3 border-2 border-navy rounded-sm shrink-0" />{c.text}</li>
          ))}
        </ul>
        {result.showQuoteLink && (
          <a href="/quote/" className="btn-primary block text-center mb-4" data-testid="quote-link">Request a quote</a>
        )}
        <p className="text-xs text-steel" data-testid="disclaimer">{result.disclaimer}</p>
        {result.dryRun && <p className="text-xs text-steel mt-3">Test mode: no data was sent to the CRM.</p>}
      </div>
    )
  }

  const err = (k: string) => errors[k] && <p className="text-red-600 text-sm mt-1">{errors[k]}</p>
  const setC = (k: keyof typeof contact) => (e: React.ChangeEvent<HTMLInputElement>) => setContact({ ...contact, [k]: e.target.value })

  return (
    <form onSubmit={submit} className="card space-y-5" noValidate data-testid="readiness-form">
      <div>
        <p className="text-xs font-semibold text-steel">Step {step + 1} of {TOTAL}</p>
        <div className="h-2 bg-gray-200 rounded mt-1"><div className="h-2 bg-navy rounded" style={{ width: `${((step + 1) / TOTAL) * 100}%` }} /></div>
      </div>
      {formError && <div className="p-3 bg-red-50 border border-red-300 rounded-lg text-red-800 text-sm font-semibold">{formError}</div>}

      {step < STEPS.length && (
        <>
          <h2 className="text-xl font-bold text-navy">{STEPS[step].title}</h2>
          {STEPS[step].ids.map((id) => {
            const q = QUESTIONS.find((x) => x.id === id)!
            return (
              <div key={id}>
                <label htmlFor={id} className={label}>{q.label}</label>
                <select id={id} name={id} className={input} value={answers[id] ?? ''} onChange={(e) => setAnswers({ ...answers, [id]: e.target.value })}>
                  <option value="" disabled>Choose one</option>
                  {q.options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                {err(id)}
              </div>
            )
          })}
        </>
      )}

      {step === STEPS.length && (
        <>
          <h2 className="text-xl font-bold text-navy">Safety and compliance plan</h2>
          <p className="text-sm text-steel">Check everything you already have in place.</p>
          {COMPLIANCE_ITEMS.map((c) => (
            <label key={c.value} className="flex items-center text-base text-navy">
              <input type="checkbox" name="compliance" value={c.value} className="w-5 h-5 mr-3"
                checked={compliance.includes(c.value)}
                onChange={(e) => setCompliance(e.target.checked ? [...compliance, c.value] : compliance.filter((x) => x !== c.value))} />
              {c.label}
            </label>
          ))}
        </>
      )}

      {step === STEPS.length + 1 && (
        <>
          <h2 className="text-xl font-bold text-navy">Where should we send your checklist?</h2>
          <div><label htmlFor="name" className={label}>Name</label><input id="name" name="name" autoComplete="name" className={input} value={contact.name} onChange={setC('name')} />{err('name')}</div>
          <div><label htmlFor="email" className={label}>Email</label><input id="email" name="email" type="email" autoComplete="email" className={input} value={contact.email} onChange={setC('email')} />{err('email')}</div>
          <div><label htmlFor="zip" className={label}>Garaging ZIP code</label><input id="zip" name="zip" inputMode="numeric" autoComplete="postal-code" className={input} value={contact.zip} onChange={setC('zip')} />{err('zip')}</div>
          <div><label htmlFor="phone" className={label}>Phone (optional)</label><input id="phone" name="phone" type="tel" autoComplete="tel" className={input} value={contact.phone} onChange={setC('phone')} />{err('phone')}</div>
          <div className="hidden" aria-hidden="true">
            <label>Company website<input name="company_website" tabIndex={-1} autoComplete="off" value={contact.company_website} onChange={setC('company_website')} /></label>
          </div>
          {contact.phone.trim() && (
            // LEGAL REVIEW REQUIRED: consent wording pending Darin's attorney (lib/lead/consent.ts).
            <label className="flex items-start text-xs text-steel leading-relaxed bg-gray-50 p-3 rounded-lg" data-testid="consent-box">
              <input type="checkbox" name="consent" className="w-5 h-5 mr-3 mt-0.5 shrink-0" checked={consent} onChange={(e) => setConsent(e.target.checked)} data-consent-version={CONSENT_VERSION} />
              <span>{CONSENT_TEXT} (Optional. You can submit without checking this box.)</span>
            </label>
          )}
        </>
      )}

      <div className="flex gap-3">
        {step > 0 && <button type="button" className="flex-1 border border-navy text-navy font-semibold rounded-lg py-3" onClick={() => { setErrors({}); setStep(step - 1) }}>Back</button>}
        {step < TOTAL - 1
          ? <button type="button" className="btn-primary flex-1" onClick={next} data-testid="next">Next</button>
          : <button type="submit" className="btn-primary flex-1" disabled={busy} data-testid="submit">{busy ? 'Checking...' : 'See my result'}</button>}
      </div>
      <p className="text-xs text-steel">{DISCLAIMER}</p>
    </form>
  )
}
