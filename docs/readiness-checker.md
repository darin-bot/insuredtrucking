# New Authority Readiness Checker

Mobile-first quiz at /new-authority/readiness/. Posts JSON to the Pages Function /api/readiness (functions/api/readiness.ts, logic in lib/readiness/). Same env vars as the lead engine (docs/lead-engine-p1.md). Without HUBSPOT_PRIVATE_APP_TOKEN, or with DRY_RUN=true, nothing is written to HubSpot; the payload is logged. Email notifications are sent for all submissions via FormSubmit using ctx.waitUntil for reliable delivery.

## Questions
CDL years, accidents and violations (3 years), time since authority (or not filed), USDOT/MC status, entity, EIN, truck ownership, truck age, truck value, operation type, down-payment budget, safety and compliance plan (consortium, ELD, maintenance files, UCR, IFTA, IRP and state permits), then name, email, garaging ZIP, optional phone, optional notes. The TCPA box appears only when a phone is entered, unchecked and optional, using CONSENT_TEXT and CONSENT_VERSION from lib/lead/consent.ts.

## Scoring (internal only, never shown to carriers or returned to the browser)
Points: CDL years 0 to 20, incidents 0 to 15, authority age 6 to 10, USDOT/MC 0 to 5, entity 0 to 5, EIN 0 to 3, truck ownership 2 to 8, truck age 1 to 5, down payment 0 to 10, 2 per compliance item (12). Normalized to 0 to 100. Truck value only drives checklist items.
- Ready: 75 or more
- Almost ready: 50 to 74
- Not ready yet: under 50
- Caps: under 1 year CDL or a major violation forces Not ready yet. 1 to 2 years CDL, two or more incidents, no truck yet, or under $1,000 down caps at Almost ready.

## Routing
- Licensed ZIP3 (KY, TN, GA, MO, IN, TX, FL, NC, AL): level, checklist, and a Request a quote link to /quote/. HubSpot deal is created. Email subject: "Readiness Checker Result: [Level] - [Name]".
- Out of state: level and checklist only. No quote link, no callback promise. ati_do_not_call_or_text=true. No HubSpot deal created. Email subject: "Out of area - Readiness Checker Result: [Level] - [Name]".
- Do-not-call is also set when no phone is given or the consent box is not checked.
- Hidden company_website field is a spam trap: same response, nothing logged or sent.

## ZIP Code Handling
The readiness checker accepts any valid 5-digit US ZIP code. The lib/lead/zipState.ts module contains a comprehensive ZIP3-to-state mapping covering all 50 states, DC, Puerto Rico, and military addresses (APO/FPO/DPO).

- Valid 5-digit ZIPs that map to licensed states (KY, TN, GA, MO, IN, TX, FL, NC, AL) route to licensed flow
- Valid 5-digit ZIPs that map to other states route to out_of_area flow
- Valid 5-digit ZIPs that don't map to any state (unmapped ZIP3 prefixes) route to out_of_area flow
- Invalid ZIP formats (not 5 digits) return a 400 error, never 422

All valid ZIPs are accepted; unmapped or out-of-state ZIPs never cause errors, they simply route to out_of_area.

## Email Notifications
All submissions trigger email notifications sent to darin@insuredtrucking.com via FormSubmit. Emails are queued using Cloudflare's ctx.waitUntil() to ensure reliable delivery without blocking the response.

### Email Subject Lines
- **Licensed states**: "Readiness Checker Result: [Level] - [Name]"
- **Out of area**: "Out of area - Readiness Checker Result: [Level] - [Name]"

### Email Content
Emails include: name, email, phone, garaging ZIP, state, result level, route, licensed status, quiz answers, compliance selections, and the checklist. Optional notes field is included when provided.

## HubSpot properties for Cole (contact and deal, all single-line text unless noted)
New: ati_readiness_source, ati_readiness_score (number), ati_readiness_level (Ready / Almost ready / Not ready yet / Not a fit), ati_readiness_route (licensed / out_of_area / not_a_fit), ati_readiness_answers (multi-line, JSON), ati_readiness_checklist, ati_readiness_cdl_years, ati_readiness_incidents, ati_readiness_authority_age, ati_readiness_dot_mc_status, ati_readiness_entity, ati_readiness_ein, ati_readiness_truck_ownership, ati_readiness_truck_age, ati_readiness_truck_value, ati_readiness_operation_type, ati_readiness_down_payment, ati_readiness_compliance.
Reused from the lead engine: ati_lead_source (value readiness_checker), ati_licensed_status, ati_do_not_call_or_text, ati_garaging_zip, ati_garaging_state, ati_form_submitted_at, ati_landing_page, ati_utm_*, ati_gclid, ati_fbclid, ati_consent_* fields. Deals use the same pipeline and stage env vars.

## Darin to verify [VERIFY]
- [VERIFY] "Many truck insurance markets prefer at least 2 years" CDL experience, and the score caps built on it.
- [VERIFY] Authority filing timeline advice (talk insurance before filing so coverage is in place when authority goes active).
- [VERIFY] MC number wording: needed for regulated interstate for-hire freight.
- [VERIFY] EIN is free from the IRS at irs.gov.
- [VERIFY] Hazmat and tanker need extra endorsements and higher limits.
- [VERIFY] New authority down payments often larger than expected.
- [VERIFY] Compliance list (consortium, ELD, maintenance files, UCR, IFTA, IRP and state permits) is complete and correctly named for the target carriers.
- [VERIFY] Disclaimer text (lib/readiness/score.ts DISCLAIMER).
- LEGAL REVIEW: TCPA consent wording and version ati-consent-2026-10-25-v1 (shared with the quote form).
- LEGAL REVIEW: storing quiz answers and an internal readiness score about a person; privacy policy may need a line on this.

## Private preview
preview/worker.ts + preview/wrangler.jsonc deploy a Worker (ati-readiness-preview) with ./out assets and the readiness handler forced to dry run. 404 without ?k=<key> (or the cookie it sets), X-Robots-Tag noindex everywhere, robots.txt disallows all.
Deploy: `npm run build`, copy out to preview/dist without _redirects and _headers (the apex redirect uses absolute URLs Workers assets reject), then `npx -p node@22 -p wrangler@4 wrangler deploy` from preview/. Key is the PREVIEW_KEY secret.
