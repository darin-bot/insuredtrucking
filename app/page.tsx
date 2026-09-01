import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Commercial Trucking Insurance for Owner-Operators
            </h1>
            <p className="text-lg md:text-xl mb-8 text-steel-light">
              Independent insurance agency specializing in for-hire trucking coverage. New authority welcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="btn-primary bg-white text-navy hover:bg-gray-100">
                Get a Quote
              </Link>
              <Link href="/new-authority-insurance" className="btn-secondary bg-steel-dark hover:bg-steel">
                New Authority Insurance
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              Coverage for Your Trucking Operation
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              We specialize in commercial trucking insurance for owner-operators and for-hire trucking companies operating general freight, flatbed, and reefer freight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="card">
              <h3 className="font-bold text-xl text-navy mb-3">New Authority</h3>
              <p className="text-steel mb-4">
                Starting a new trucking company? We work with new ventures and help you understand your insurance requirements.
              </p>
              <Link href="/new-authority-insurance" className="text-navy hover:underline font-semibold">
                Learn more →
              </Link>
            </div>

            <div className="card">
              <h3 className="font-bold text-xl text-navy mb-3">State Requirements</h3>
              <p className="text-steel mb-4">
                State-specific insurance requirements for Kentucky, Texas, and other states we serve.
              </p>
              <Link href="/states" className="text-navy hover:underline font-semibold">
                View states →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              Freight Types We Cover
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-navy mb-2">General Freight</h3>
              <p className="text-steel">Dry van and general commodity hauling</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-navy mb-2">Flatbed</h3>
              <p className="text-steel">Open deck and specialized cargo</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-navy mb-2">Reefer</h3>
              <p className="text-steel">Temperature-controlled freight</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              States We Serve
            </h2>
            <p className="text-lg mb-8 text-steel-light">
              Licensed to write commercial trucking insurance in nine states across the Southeast, Midwest, and Texas.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="text-left">
                <Link href="/states#alabama" className="hover:text-steel-light transition-colors">Alabama</Link>
              </div>
              <div className="text-left">
                <Link href="/florida-trucking-insurance" className="hover:text-steel-light transition-colors">Florida</Link>
              </div>
              <div className="text-left">
                <Link href="/georgia-trucking-insurance" className="hover:text-steel-light transition-colors">Georgia</Link>
              </div>
              <div className="text-left">
                <Link href="/states#indiana" className="hover:text-steel-light transition-colors">Indiana</Link>
              </div>
              <div className="text-left">
                <Link href="/kentucky-trucking-insurance" className="hover:text-steel-light transition-colors">Kentucky</Link>
              </div>
              <div className="text-left">
                <Link href="/states#missouri" className="hover:text-steel-light transition-colors">Missouri</Link>
              </div>
              <div className="text-left">
                <Link href="/states#north-carolina" className="hover:text-steel-light transition-colors">North Carolina</Link>
              </div>
              <div className="text-left">
                <Link href="/states#tennessee" className="hover:text-steel-light transition-colors">Tennessee</Link>
              </div>
              <div className="text-left">
                <Link href="/texas-trucking-insurance" className="hover:text-steel-light transition-colors">Texas</Link>
              </div>
            </div>
            <Link href="/quote" className="btn-primary bg-white text-navy hover:bg-gray-100">
              Get Your Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
              About Affordable Truck Insurance Inc
            </h2>
            <p className="text-lg text-steel mb-6">
              Based in Benton, Kentucky, we are an independent insurance agency specializing in commercial trucking coverage. Our owner, Darin Austin, brings over 30 years of insurance experience and has specialized in trucking insurance since 2014.
            </p>
            <p className="text-lg text-steel mb-8">
              As a Transportation Risk Specialist (MCIEF.org), Darin understands the unique challenges facing owner-operators and for-hire trucking companies.
            </p>
            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
