// New Authority Readiness Checker: question definitions shared by the quiz UI
// and the server. Option values are the stored answer codes.

export type Option = { value: string; label: string }
export type Question = { id: string; label: string; help?: string; options: Option[] }

export const QUESTIONS: Question[] = [
  { id: 'cdlYears', label: 'How many years of Class A CDL driving experience do you have?', options: [
    { value: 'lt1', label: 'Less than 1 year' }, { value: '1to2', label: '1 to 2 years' },
    { value: '2to3', label: '2 to 3 years' }, { value: '3to5', label: '3 to 5 years' }, { value: '5plus', label: '5 years or more' },
  ] },
  { id: 'incidents', label: 'Accidents or moving violations in the last 3 years?', options: [
    { value: 'none', label: 'None' }, { value: 'one_minor', label: 'One minor ticket' },
    { value: 'one_accident', label: 'One accident' }, { value: 'multiple', label: 'Two or more accidents or tickets' },
    { value: 'major', label: 'A major violation (DUI, reckless driving, or similar)' },
  ] },
  { id: 'authorityAge', label: 'How long have you had your own authority?', options: [
    { value: 'not_filed', label: 'Not filed yet' }, { value: 'pending', label: 'Filed, waiting to go active' },
    { value: 'lt6mo', label: 'Active less than 6 months' }, { value: '6to12mo', label: 'Active 6 to 12 months' },
    { value: '12plus', label: 'Active more than 12 months' },
  ] },
  { id: 'dotMc', label: 'What do you have from FMCSA so far?', options: [
    { value: 'none', label: 'Nothing yet' }, { value: 'dot_only', label: 'USDOT number only' },
    { value: 'dot_mc', label: 'USDOT and MC number' },
  ] },
  { id: 'entity', label: 'How is your business set up?', options: [
    { value: 'none', label: 'Not set up yet' }, { value: 'sole_prop', label: 'Sole proprietor' },
    { value: 'llc', label: 'LLC' }, { value: 'corp', label: 'Corporation' },
  ] },
  { id: 'ein', label: 'Do you have an EIN for the business?', options: [
    { value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }, { value: 'not_sure', label: 'Not sure' },
  ] },
  { id: 'truckOwnership', label: 'Do you have your truck?', options: [
    { value: 'own', label: 'Own it outright' }, { value: 'financed', label: 'Financed' },
    { value: 'leased', label: 'Leased' }, { value: 'not_yet', label: 'Not yet' },
  ] },
  { id: 'truckAge', label: 'About how old is the truck (or the one you plan to get)?', options: [
    { value: 'lt10', label: 'Less than 10 years' }, { value: '10to15', label: '10 to 15 years' },
    { value: '15to20', label: '15 to 20 years' }, { value: '20plus', label: 'More than 20 years' },
    { value: 'unknown', label: 'Not sure yet' },
  ] },
  { id: 'truckValue', label: 'About what is the truck worth?', options: [
    { value: 'lt40k', label: 'Under $40,000' }, { value: '40to80k', label: '$40,000 to $80,000' },
    { value: '80to150k', label: '$80,000 to $150,000' }, { value: '150kplus', label: 'Over $150,000' },
    { value: 'unknown', label: 'Not sure yet' },
  ] },
  { id: 'operationType', label: 'What kind of freight will you haul?', options: [
    { value: 'dry_van', label: 'Dry van' }, { value: 'reefer', label: 'Reefer' }, { value: 'flatbed', label: 'Flatbed' },
    { value: 'dump', label: 'Dump' }, { value: 'auto_hauler', label: 'Car hauler' }, { value: 'tanker', label: 'Tanker' },
    { value: 'hazmat', label: 'Hazmat' }, { value: 'other', label: 'Other' },
  ] },
  { id: 'downPayment', label: 'What can you budget for an insurance down payment?', options: [
    { value: 'lt1k', label: 'Under $1,000' }, { value: '1to3k', label: '$1,000 to $3,000' },
    { value: '3to6k', label: '$3,000 to $6,000' }, { value: '6to10k', label: '$6,000 to $10,000' },
    { value: '10kplus', label: 'Over $10,000' },
  ] },
]

export const COMPLIANCE_ITEMS: Option[] = [
  { value: 'consortium', label: 'Drug and alcohol consortium enrollment' },
  { value: 'eld', label: 'ELD installed or chosen' },
  { value: 'maintenance', label: 'Maintenance and inspection files' },
  { value: 'ucr', label: 'UCR registration' },
  { value: 'ifta', label: 'IFTA account' },
  { value: 'irp', label: 'IRP plates and state permits' },
]

export const QUESTION_IDS = QUESTIONS.map((q) => q.id)
