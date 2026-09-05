'use client'

import Link from 'next/link'
import { useState } from 'react'
import HandbookDownloadModal from '@/components/HandbookDownloadModal'

export default function NewAuthorityContent() {
  const [isHandbookModalOpen, setIsHandbookModalOpen] = useState(false)

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
            <div className="mt-6">
              <button
                onClick={() => setIsHandbookModalOpen(true)}
                className="btn-primary bg-orange-600 hover:bg-orange-700"
              >
                Download Free New Authority Handbook
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-orange-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">
                  Free Guide: New Authority Insurance Handbook
                </h2>
                <p className="text-orange-50 mb-4">
                  Everything you need to know about insurance requirements, filings, and the 20-day waiting period. Written by Darin Austin, Transportation Risk Specialist.
                </p>
                <button
                  onClick={() => setIsHandbookModalOpen(true)}
                  className="btn-primary bg-white text-navy hover:bg-gray-100"
                >
                  Download Now (Free)
                </button>
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
                <button
                  onClick={() => setIsHandbookModalOpen(true)}
                  className="btn-primary bg-orange-600 hover:bg-orange-700"
                >
                  Download New Authority Handbook
                </button>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-steel mb-6">
                Download our free handbook or contact us for a quote on your new authority insurance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsHandbookModalOpen(true)}
                  className="btn-secondary bg-orange-600 hover:bg-orange-700"
                >
                  Download Handbook
                </button>
                <Link href="/quote" className="btn-primary">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HandbookDownloadModal 
        isOpen={isHandbookModalOpen} 
        onClose={() => setIsHandbookModalOpen(false)} 
      />
    </>
  )
}
