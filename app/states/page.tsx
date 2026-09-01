import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'States We Serve | Affordable Truck Insurance Inc',
  description: 'Licensed to write commercial trucking insurance in Alabama, Florida, Georgia, Indiana, Kentucky, Missouri, North Carolina, Tennessee, and Texas.',
}

export default function States() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              States We Serve
            </h1>
            <p className="text-lg text-steel mb-8">
              We are licensed to write commercial trucking insurance in nine states across the Southeast, Midwest, and Texas.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card" id="alabama">
                <h2 className="text-2xl font-bold text-navy mb-3">Alabama</h2>
                <p className="text-steel mb-4">
                  Commercial trucking insurance for Alabama-based motor carriers and owner-operators.
                </p>
                <p className="text-steel">
                  Coverage for general freight, flatbed, and reefer operations throughout Alabama.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-3">
                  <Link href="/florida-trucking-insurance" className="hover:underline">
                    Florida
                  </Link>
                </h2>
                <p className="text-steel mb-4">
                  Commercial trucking insurance for Florida motor carriers operating general freight, flatbed, and reefer.
                </p>
                <Link href="/florida-trucking-insurance" className="text-navy hover:underline font-semibold">
                  Learn more →
                </Link>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-3">
                  <Link href="/georgia-trucking-insurance" className="hover:underline">
                    Georgia
                  </Link>
                </h2>
                <p className="text-steel mb-4">
                  Commercial trucking insurance for Georgia motor carriers operating general freight, flatbed, and reefer.
                </p>
                <Link href="/georgia-trucking-insurance" className="text-navy hover:underline font-semibold">
                  Learn more →
                </Link>
              </div>

              <div className="card" id="indiana">
                <h2 className="text-2xl font-bold text-navy mb-3">Indiana</h2>
                <p className="text-steel mb-4">
                  Commercial trucking insurance for Indiana-based motor carriers and owner-operators.
                </p>
                <p className="text-steel">
                  Coverage for general freight, flatbed, and reefer operations throughout Indiana.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-3">
                  <Link href="/kentucky-trucking-insurance" className="hover:underline">
                    Kentucky
                  </Link>
                </h2>
                <p className="text-steel mb-4">
                  Based in Benton, Kentucky, we understand Kentucky&apos;s specific requirements including KYTC Form E and BMC-91 filings.
                </p>
                <Link href="/kentucky-trucking-insurance" className="text-navy hover:underline font-semibold">
                  Kentucky requirements →
                </Link>
              </div>

              <div className="card" id="missouri">
                <h2 className="text-2xl font-bold text-navy mb-3">Missouri</h2>
                <p className="text-steel mb-4">
                  Commercial trucking insurance for Missouri-based motor carriers and owner-operators.
                </p>
                <p className="text-steel">
                  Coverage for general freight, flatbed, and reefer operations throughout Missouri.
                </p>
              </div>

              <div className="card" id="north-carolina">
                <h2 className="text-2xl font-bold text-navy mb-3">North Carolina</h2>
                <p className="text-steel mb-4">
                  Commercial trucking insurance for North Carolina-based motor carriers and owner-operators.
                </p>
                <p className="text-steel">
                  Coverage for general freight, flatbed, and reefer operations throughout North Carolina.
                </p>
              </div>

              <div className="card" id="tennessee">
                <h2 className="text-2xl font-bold text-navy mb-3">Tennessee</h2>
                <p className="text-steel mb-4">
                  Commercial trucking insurance for Tennessee-based motor carriers and owner-operators.
                </p>
                <p className="text-steel">
                  Coverage for general freight, flatbed, and reefer operations throughout Tennessee.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-3">
                  <Link href="/texas-trucking-insurance" className="hover:underline">
                    Texas
                  </Link>
                </h2>
                <p className="text-steel mb-4">
                  Texas commercial trucking insurance including TxDMV Form E filing for intrastate operations.
                </p>
                <Link href="/texas-trucking-insurance" className="text-navy hover:underline font-semibold">
                  Texas requirements →
                </Link>
              </div>
            </div>

            <div className="mt-12 card bg-blue-50 border-blue-200">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Multi-State Operations
              </h2>
              <p className="text-steel mb-4">
                Many trucking companies operate across multiple states. Being licensed in nine states allows us to coordinate coverage across your operating territory.
              </p>
              <p className="text-steel">
                Whether you operate in a single state or across our full nine-state footprint, we can help structure appropriate coverage for your operation.
              </p>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Get a Quote
              </h2>
              <p className="text-steel mb-6">
                Ready to get coverage in one or more of these states?
              </p>
              <Link href="/quote" className="btn-primary">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
