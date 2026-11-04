// TCPA consent capture and tracking for lead forms

export const CONSENT_VERSION = 'ati-consent-2026-10-25-v1'

// LEGAL REVIEW REQUIRED: This consent text is pending attorney review (Darin's attorney).
// The text must comply with TCPA requirements for express written consent to receive
// autodialed or prerecorded marketing calls/texts about insurance products.
export const CONSENT_TEXT =
  'By checking this box, I agree that Affordable Truck Insurance Inc and its authorized agents may contact me at the phone number provided, including by automated dialing system, prerecorded voice, or text message, about commercial trucking insurance products and services. I understand that consent is not required to purchase insurance and that message and data rates may apply.'

export interface ConsentRecord {
  given: boolean
  text: string | null
  version: string | null
  timestamp: string
  ip: string | null
  userAgent: string | null
  pageUrl: string | null
}

export function captureConsent(args: {
  checked: unknown
  clientVersion: unknown
  ip: string | null
  userAgent: string | null
  pageUrl: string | null
  now: Date
}): ConsentRecord {
  const given = args.checked === true
  return {
    given,
    text: given ? CONSENT_TEXT : null,
    version: given && typeof args.clientVersion === 'string' ? args.clientVersion : null,
    timestamp: args.now.toISOString(),
    ip: args.ip,
    userAgent: args.userAgent,
    pageUrl: args.pageUrl,
  }
}
