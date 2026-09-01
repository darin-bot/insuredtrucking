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
                  You must file proof of insurance (BMC-91 or state equivalent) before you can begin operating.
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
                  In addition to federal BMC-91 filing, some states require separate state filings:
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
