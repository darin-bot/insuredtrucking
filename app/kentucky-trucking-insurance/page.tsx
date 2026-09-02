import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kentucky Trucking Insurance | KYTC Form E Filing',
  description: 'Kentucky commercial trucking insurance requirements, KYTC Form E filing, and understanding that KYU is not insurance.',
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
              Commercial trucking insurance requirements for Kentucky-based carriers, including KYTC Form E filing and federal requirements.
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
                  Kentucky Filing Requirements
                </h2>
                <p className="text-steel mb-4">
                  If you operate a for-hire trucking company based in Kentucky, you need to maintain proper insurance filings:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-navy mb-2">Federal Requirements</h3>
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
                  Your insurance company files the required forms on your behalf when you purchase appropriate coverage.
                </p>
              </div>

              <div className="card bg-yellow-50 border-yellow-300">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Understanding KYU: Weight-Distance Tax, Not Insurance
                </h2>
                <p className="text-steel mb-4">
                  KYU is Kentucky&apos;s weight-distance tax license required for vehicles with a gross weight of 60,000 lbs or more operating in Kentucky. It is a tax program administered by the Kentucky Transportation Cabinet.
                </p>
                <p className="text-steel mb-4">
                  <strong className="text-navy">Important:</strong> KYU is not insurance and is not a state authority number. It is solely a weight-distance tax license for heavy vehicles.
                </p>
                <p className="text-steel">
                  If you operate vehicles that require a KYU license, you still need to maintain proper insurance coverage and file KYTC Form E with the Kentucky Transportation Cabinet for your motor carrier authority.
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
                  This is separate from and in addition to federal filing requirements for interstate operations.
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
                We handle federal and KYTC Form E filings for your Kentucky trucking operation.
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
