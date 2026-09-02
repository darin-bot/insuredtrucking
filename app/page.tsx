import Link from 'next/link'
import Image from 'next/image'
import HomepageFAQ from '@/components/HomepageFAQ'

export default function Home() {
  return (
    <>
      <section className="relative section-padding bg-navy-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/tractor-highway.jpg" 
            alt="Commercial truck on highway" 
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-navy-dark"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center text-center mb-8 md:mb-12">
            <Image 
              src="/ati-logo.png" 
              alt="Affordable Truck Insurance" 
              width={260} 
              height={260}
              className="w-40 h-auto md:w-52 lg:w-64 mb-6"
              priority
            />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Commercial Trucking Insurance for Owner-Operators
            </h1>
            <p className="text-lg md:text-xl mb-4 text-gray-100">
              Independent insurance agency specializing in for-hire trucking coverage. We work with owner-operators, small fleets (2–10 trucks), and growing authorities.
            </p>
            <p className="text-base md:text-lg mb-8 text-gray-200">
              New authority welcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      <section className="bg-white border-y border-gray-200 py-6">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-steel">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>9 licensed states</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Trucking specialist since 2014</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span>Transportation Risk Specialist (MCIEF)</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span>New authority welcome</span>
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
              We specialize in commercial trucking insurance for owner-operators, small fleets (2–10 trucks), and for-hire trucking companies operating general freight, flatbed, and reefer freight.
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

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              The Equipment We Insure
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              From day cabs to long-hood classics, we provide coverage for the trucks that keep America moving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="card overflow-hidden p-0">
              <div className="relative h-64">
                <Image 
                  src="/tractor-highway.jpg" 
                  alt="Navy tractor on rural highway" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-navy mb-2">On the Road</h3>
                <p className="text-steel text-sm">Long-haul and regional operations</p>
              </div>
            </div>

            <div className="card overflow-hidden p-0">
              <div className="relative h-64">
                <Image 
                  src="/tractor-yard.jpg" 
                  alt="White day cab tractor in yard" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-navy mb-2">Day Cabs</h3>
                <p className="text-steel text-sm">Local and short-haul coverage</p>
              </div>
            </div>

            <div className="card overflow-hidden p-0">
              <div className="relative h-64">
                <Image 
                  src="/tractor-detail.jpg" 
                  alt="Silver long-hood tractor detail" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-navy mb-2">Classic Rigs</h3>
                <p className="text-steel text-sm">All makes and models welcome</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                How We Work
              </h2>
              <p className="text-lg text-steel">
                Simple, straightforward insurance process for trucking companies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="font-bold text-lg text-navy mb-2">Send Your Details</h3>
                <p className="text-steel">
                  Submit your quote request with driver, equipment, and operation details
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="font-bold text-lg text-navy mb-2">We Shop Markets</h3>
                <p className="text-steel">
                  We work with multiple carriers to find competitive coverage for your operation
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="font-bold text-lg text-navy mb-2">Review Terms by Email</h3>
                <p className="text-steel">
                  We send quotes and coverage options for you to review at your pace
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="font-bold text-lg text-navy mb-2">Bind + Filings</h3>
                <p className="text-steel">
                  We bind your coverage and coordinate required BMC-91 and state filings
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/quote" className="btn-primary">
                Start Your Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomepageFAQ />

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
