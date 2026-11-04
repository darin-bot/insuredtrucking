import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Florida Trucking Insurance | Affordable Truck Insurance Inc',
  description: 'Florida commercial trucking insurance for owner-operators and for-hire carriers. Primary liability, cargo, and physical damage coverage for FL-based motor carriers.',
  alternates: {
    canonical: 'https://getinsuredtrucking.com/florida-trucking-insurance/',
  },
  openGraph: {
    title: 'Florida Trucking Insurance | Affordable Truck Insurance Inc',
    description: 'Florida commercial trucking insurance for owner-operators and for-hire carriers. Primary liability, cargo, and physical damage coverage for FL-based motor carriers.',
    url: 'https://getinsuredtrucking.com/florida-trucking-insurance/',
    siteName: 'Affordable Truck Insurance Inc',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Trucking Insurance | Affordable Truck Insurance Inc',
    description: 'Florida commercial trucking insurance for owner-operators and for-hire carriers. Primary liability, cargo, and physical damage coverage for FL-based motor carriers.',
  },
}

export default function FloridaTruckingInsurance() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Florida Trucking Insurance
            </h1>
            <p className="text-lg text-steel mb-8">
              Commercial trucking insurance for Florida-based motor carriers, owner-operators, and for-hire trucking companies. Federal filing and state requirements handled.
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
                  Florida Filing Requirements
                </h2>
                <p className="text-steel mb-4">
                  Florida-based for-hire motor carriers must maintain proper insurance filings with the FMCSA for interstate operations. Your insurance company files the required forms on your behalf when you purchase appropriate coverage.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-navy mb-2">Federal Requirements</h3>
                    <p className="text-steel">
                      Federal liability filings are required by the FMCSA for interstate commerce. Your insurance company files these forms electronically with the Federal Motor Carrier Safety Administration on your behalf.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">Minimum Coverage Levels</h3>
                    <p className="text-steel">
                      Federal minimum liability requirements vary by operation type and cargo. Most general freight operations require $750,000 minimum liability coverage, while operations involving certain commodities may require $1,000,000 or higher.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Florida Trucking Operations
                </h2>
                <p className="text-steel mb-4">
                  We provide commercial trucking insurance for Florida-based carriers operating:
                </p>
                <ul className="space-y-2 text-steel">
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>General freight and dry van operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Flatbed and specialized cargo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Reefer (temperature-controlled freight)</span>
                  </li>
                </ul>
                <p className="text-steel mt-4">
                  Whether you operate locally within Florida, regionally across the Southeast, or nationwide, we can help you understand your insurance requirements and obtain appropriate coverage.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Coverage Types Available
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-navy mb-1">Primary Liability</h3>
                    <p className="text-steel text-sm">
                      Required coverage for bodily injury and property damage caused by your commercial vehicles.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Physical Damage</h3>
                    <p className="text-steel text-sm">
                      Collision and comprehensive coverage for your trucks and trailers.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Cargo Insurance</h3>
                    <p className="text-steel text-sm">
                      Coverage for freight in your care, custody, and control while being transported.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">General Liability</h3>
                    <p className="text-steel text-sm">
                      Protection for liability exposures not covered by your auto liability policy, such as premises operations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  New Authority in Florida
                </h2>
                <p className="text-steel mb-4">
                  Starting a new trucking company in Florida? We work with new FMCSA authority holders and help you understand the insurance requirements for your operation.
                </p>
                <p className="text-steel">
                  New authority carriers face a waiting period after federal filings are accepted. We can help you navigate the timeline and ensure your insurance is in place before you begin operating.
                </p>
              </div>

              <div className="card bg-red-50 border-red-200">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  Not Legal or Regulatory Advice
                </h2>
                <p className="text-steel">
                  This information is for general educational purposes only. For specific questions about your Florida filing requirements, contact the FMCSA or consult with a qualified attorney.
                </p>
              </div>

              <div className="card bg-blue-50 border-blue-200">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  About Our Agency
                </h2>
                <p className="text-steel">
                  Affordable Truck Insurance Inc is licensed to write commercial trucking insurance in Florida and eight other states. We specialize in coverage for owner-operators and for-hire trucking companies.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-steel text-sm text-center">
                New authority? Join our free <a href="https://www.skool.com/new-authority-coverage-room-6730" target="_blank" rel="noopener noreferrer" className="text-navy hover:underline font-semibold">New Authority Coverage Room</a> community for owner-operators and small fleets.
              </p>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Get Florida Trucking Insurance
              </h2>
              <p className="text-steel mb-6">
                Contact us for a quote on your Florida trucking operation.
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
