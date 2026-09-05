import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Authority Insurance | Affordable Truck Insurance Inc',
  description: 'Commercial trucking insurance for new ventures and new FMCSA authority. We work with startup trucking companies.',
}

export default function NewAuthorityInsurance() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              New Authority Insurance
            </h1>
            <p className="text-lg text-steel mb-8">
              Starting a trucking company? We specialize in working with new ventures and new FMCSA authority holders. Get the coverage you need to start operating legally.
            </p>
            
            <div className="card bg-white border-2 border-orange mb-8">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-navy mb-2">Free Resource: New Authority Insurance Handbook</h3>
                  <p className="text-steel">
                    Download our comprehensive guide covering insurance requirements, filing timelines, and what to expect during your first 21 days with new FMCSA authority.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a 
                    href="/ati-new-authority-insurance-handbook.pdf" 
                    className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 min-h-[48px] whitespace-nowrap"
                    download
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-6">
              What You Need to Know
            </h2>

            <div className="space-y-6">
              <div className="card">
                <h3 className="font-bold text-xl text-navy mb-3">Insurance Requirements</h3>
                <p className="text-steel mb-4">
                  For-hire trucking companies operating under FMCSA authority must maintain minimum liability coverage of $750,000 for most general freight operations. Some commodity types require higher limits.
                </p>
                <p className="text-steel">
                  You must file proof of insurance with the FMCSA before you can begin operating.
                </p>
              </div>

              <div className="card">
                <h3 className="font-bold text-xl text-navy mb-3">New Ventures Welcome</h3>
                <p className="text-steel mb-4">
                  We work with startup trucking companies and understand the challenges of getting started. Whether you have prior trucking experience or are new to the industry, we can help you understand your insurance options.
                </p>
              </div>

              <div className="card">
                <h3 className="font-bold text-xl text-navy mb-3">Coverage Types</h3>
                <ul className="space-y-2 text-steel">
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Primary Liability (required for FMCSA authority)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Physical Damage (collision and comprehensive)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Cargo Insurance (protects freight in your care)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>General Liability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Occupational Accident (driver coverage)</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="font-bold text-xl text-navy mb-3">Getting Started</h3>
                <p className="text-steel mb-4">
                  The insurance application process typically requires information about your operation, including:
                </p>
                <ul className="space-y-2 text-steel">
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>DOT and MC numbers (or application confirmation)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Drivers&apos; information and MVRs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Vehicle information and VINs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Type of freight and operating radius</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Business entity information</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-blue-50 border-blue-200">
                <h3 className="font-bold text-xl text-navy mb-3">State Requirements</h3>
                <p className="text-steel mb-4">
                  In addition to federal filing requirements, some states require separate state filings:
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link href="/kentucky-trucking-insurance" className="text-navy hover:underline font-semibold">
                      Kentucky: KYTC Form E
                    </Link>
                  </li>
                  <li>
                    <Link href="/texas-trucking-insurance" className="text-navy hover:underline font-semibold">
                      Texas: TxDMV Form E
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-navy mb-6">
                New Authority Timeline: Days 1-21
              </h2>
              <p className="text-steel mb-8">
                Here&apos;s what to expect during your first three weeks with new FMCSA authority. This timeline assumes you have insurance in place and filings submitted.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="inline-block bg-navy text-white font-bold px-3 py-1 rounded">Day 1</div>
                  </div>
                  <div className="card flex-1">
                    <h3 className="font-semibold text-navy mb-2">FMCSA Grants Authority</h3>
                    <p className="text-steel">
                      FMCSA approves your MC/FF authority application. You receive your operating authority number.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="inline-block bg-navy text-white font-bold px-3 py-1 rounded">Day 2-3</div>
                  </div>
                  <div className="card flex-1 bg-blue-50 border-blue-200">
                    <h3 className="font-semibold text-navy mb-2">Insurance Filing (BMC-91/91X)</h3>
                    <p className="text-steel mb-3">
                      Your insurance carrier files BMC-91 (motor carrier) or BMC-91X (broker) electronically with FMCSA. This proves you carry required liability coverage.
                    </p>
                    <p className="text-sm text-steel italic">
                      Note: Your insurer files this form, not you. We coordinate this filing as part of binding your policy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="inline-block bg-navy text-white font-bold px-3 py-1 rounded">Day 3-5</div>
                  </div>
                  <div className="card flex-1">
                    <h3 className="font-semibold text-navy mb-2">State Filings (If Required)</h3>
                    <p className="text-steel mb-3">
                      States like Kentucky and Texas require separate insurance filings for intrastate authority or weight-distance tax registration.
                    </p>
                    <ul className="text-steel text-sm space-y-1">
                      <li>• <strong>Kentucky Form E (KYU):</strong> Weight-distance tax credential for trucks ≥60,000 lbs operating in KY (not an authority number)</li>
                      <li>• <strong>Texas Form E:</strong> TxDMV insurance filing for intrastate operations</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="inline-block bg-steel text-white font-bold px-3 py-1 rounded">Day 1-20</div>
                  </div>
                  <div className="card flex-1 bg-yellow-50 border-yellow-300">
                    <h3 className="font-semibold text-navy mb-2">20-Day FMCSA Protest Period</h3>
                    <p className="text-steel mb-3">
                      Federal law requires a 20-day waiting period after authority is granted. During this time, competitors or other parties can file protests with FMCSA.
                    </p>
                    <p className="text-steel text-sm">
                      <strong>Important:</strong> You cannot legally operate in interstate commerce during this 20-day window, even with insurance in place. Protests are rare but must be resolved before you can operate.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="inline-block bg-green-600 text-white font-bold px-3 py-1 rounded">Day 21+</div>
                  </div>
                  <div className="card flex-1 border-green-600">
                    <h3 className="font-semibold text-navy mb-2">Ready to Operate</h3>
                    <p className="text-steel mb-3">
                      After the 20-day protest period ends with no unresolved protests, your authority becomes active. You can now legally haul freight in interstate commerce.
                    </p>
                    <p className="text-steel text-sm">
                      Verify your authority status at <a href="https://safer.fmcsa.dot.gov" target="_blank" rel="noopener noreferrer" className="text-navy hover:underline font-semibold">safer.fmcsa.dot.gov</a> before dispatching your first load.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-navy mb-3">Reality Check</h3>
                <ul className="space-y-2 text-steel text-sm">
                  <li>• The 20-day clock starts when FMCSA grants your authority, not when you apply</li>
                  <li>• Insurance must be in place before the BMC-91 can be filed</li>
                  <li>• State filings are separate from federal filings and have different requirements</li>
                  <li>• Operating before Day 21 without proper authority can result in fines and out-of-service orders</li>
                  <li>• Not all states require additional filings beyond federal BMC-91</li>
                </ul>
              </div>

              <div className="mt-8 text-center">
                <Link href="/quote" className="btn-primary">
                  Get Your New Authority Quote
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-steel mb-6">
                Contact us for a quote on your new authority insurance.
              </p>
              <Link href="/quote" className="btn-primary">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
