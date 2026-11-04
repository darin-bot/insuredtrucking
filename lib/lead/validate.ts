// Lead validation utilities: phone normalization and UTM parameter keys

export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'] as const

/**
 * Normalize a US phone number to E.164 format (+1XXXXXXXXXX)
 * Accepts various formats: (270) 555-0142, 270-555-0142, 2705550142, etc.
 * Returns null if the input is not a valid 10-digit US number
 */
export function normalizePhone(raw: string): string | null {
  const digits = raw.trim().replace(/\D/g, '')
  if (digits.length === 10) return `+1${digits}`
  if (digits.length === 11 && digits[0] === '1') return `+${digits}`
  return null
}
