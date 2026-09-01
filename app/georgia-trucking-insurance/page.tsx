import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Georgia Trucking Insurance | Affordable Truck Insurance Inc',
  description: 'Commercial trucking insurance for Georgia motor carriers and owner-operators.',
}

export default function GeorgiaTruckingInsurance() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Georgia Trucking Insurance
            </h1>
            <p className="text-lg text-steel mb-8">
              Commercial trucking insurance for Georgia-based motor carriers and owner-operators.
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
                  Georgia Trucking Coverage
                </h2>
                <p className="text-steel mb-4">
                  We provide commercial trucking insurance for motor carriers operating in Georgia, including coverage for:
                </p>
                <ul className="space-y-2 text-steel">
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>General freight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Flatbed operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Reefer freight</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Coverage Options
                </h2>
                <ul className="space-y-2 text-steel">
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Primary Liability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Physical Damage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Cargo Insurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>General Liability</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-blue-50 border-blue-200">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Licensed in Georgia
                </h2>
                <p className="text-steel">
                  Affordable Truck Insurance Inc is licensed to write commercial trucking insurance in Georgia and eight other states across the Southeast, Midwest, and Texas.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Get Georgia Trucking Insurance
              </h2>
              <p className="text-steel mb-6">
                Contact us for a quote on your Georgia trucking operation.
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
