import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kentucky Trucking Insurance | KYTC Form E Filing',
  description: 'Kentucky commercial trucking insurance requirements, KYTC Form E vs BMC-91 filing, and understanding that KYU is not insurance.',
}

export default function KentuckyTruckingInsurance() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Kentucky Trucking Insurance
            </h1>
            <p className="text-lg text-steel mb-8">
              Commercial trucking insurance requirements for Kentucky-based carriers, including KYTC Form E filing and federal BMC-91 requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Two Separate Filing Requirements
                </h2>
                <p className="text-steel mb-4">
                  If you operate a for-hire trucking company based in Kentucky, you likely need to maintain two separate insurance filings:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-navy mb-2">Federal: BMC-91</h3>
                    <p className="text-steel">
                      Required by the FMCSA for interstate commerce. Filed with the Federal Motor Carrier Safety Administration.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">Kentucky: KYTC Form E</h3>
                    <p className="text-steel">
                      Required by the Kentucky Transportation Cabinet for intrastate commerce. Filed with the Kentucky Transportation Cabinet.
                    </p>
                  </div>
                </div>
                <p className="text-steel mt-4">
                  Your insurance company files both forms on your behalf when you purchase appropriate coverage.
                </p>
              </div>

              <div className="card bg-yellow-50 border-yellow-300">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Understanding KYU: Not Insurance
                </h2>
                <p className="text-steel mb-4">
                  KYU is the identifier prefix used by the Kentucky Transportation Cabinet for state authority numbers. For example, a Kentucky intrastate authority might be KYU-12345.
                </p>
                <p className="text-steel mb-4">
                  <strong className="text-navy">Important:</strong> KYU is not a type of insurance. It is simply the numbering system for Kentucky intrastate motor carrier authority.
                </p>
                <p className="text-steel">
                  If you have a KYU authority number, you still need to maintain proper insurance coverage and file KYTC Form E with the Kentucky Transportation Cabinet.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  KYTC Form E Requirements
                </h2>
                <p className="text-steel mb-4">
                  Kentucky requires intrastate for-hire carriers to maintain minimum liability insurance coverage. The exact requirements depend on the type of operation and cargo.
                </p>
                <p className="text-steel mb-4">
                  KYTC Form E is the certificate of insurance that your insurance company files with the Kentucky Transportation Cabinet to prove you have the required coverage.
                </p>
                <p className="text-steel">
                  This is separate from and in addition to the federal BMC-91 filing required for interstate operations.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Kentucky Operations Coverage
                </h2>
                <p className="text-steel mb-4">
                  We provide commercial trucking insurance for Kentucky-based carriers operating:
                </p>
                <ul className="space-y-2 text-steel">
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>General freight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Flatbed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Reefer (temperature-controlled)</span>
                  </li>
                </ul>
                <p className="text-steel mt-4">
                  Whether you operate intrastate only in Kentucky, or interstate across multiple states, we can help you understand your insurance requirements and obtain appropriate coverage.
                </p>
              </div>

              <div className="card bg-red-50 border-red-200">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  Not Legal or Regulatory Advice
                </h2>
                <p className="text-steel">
                  This information is for general educational purposes only. For specific questions about your Kentucky filing requirements, contact the Kentucky Transportation Cabinet or consult with a qualified attorney.
                </p>
              </div>

              <div className="card bg-blue-50 border-blue-200">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  About Our Agency
                </h2>
                <p className="text-steel">
                  Affordable Truck Insurance Inc is based in Benton, Kentucky. We are licensed to write commercial trucking insurance in Kentucky and understand the state&apos;s specific requirements for intrastate and interstate carriers.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Get Kentucky Trucking Insurance
              </h2>
              <p className="text-steel mb-6">
                We handle both BMC-91 and KYTC Form E filings for your Kentucky trucking operation.
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
