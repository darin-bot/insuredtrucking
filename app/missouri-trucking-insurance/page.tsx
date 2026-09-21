import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Missouri Trucking Insurance | For-Hire Carrier Coverage',
  description: 'Commercial trucking insurance for Missouri motor carriers. Licensed in MO. Owner-operator and small fleet coverage for general freight, flatbed, and reefer.',
}

export default function MissouriTruckingInsurance() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Missouri Trucking Insurance
            </h1>
            <p className="text-lg text-steel mb-8">
              Affordable Truck Insurance Inc provides commercial trucking insurance for Missouri-based owner-operators, small fleets, and new-authority carriers operating for-hire general freight, flatbed, and reefer throughout the Midwest and beyond.
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
                  Missouri For-Hire Trucking Insurance
                </h2>
                <p className="text-steel mb-4">
                  Missouri&apos;s central location makes it a trucking hub with major freight corridors crossing the state — I-70 running east-west through Kansas City and St. Louis, I-44 linking to Oklahoma and beyond, and I-29 connecting north to south. We work with Missouri carriers hauling across the state and nationwide.
                </p>
                <p className="text-steel mb-4">
                  We specialize in commercial trucking insurance for:
                </p>
                <ul className="space-y-2 text-steel">
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>General freight operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Flatbed hauling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Reefer freight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Owner-operators and growing fleets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>New ventures welcome</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-blue-50 border-blue-200">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Licensed to Serve Missouri Carriers
                </h2>
                <p className="text-steel mb-4">
                  Affordable Truck Insurance Inc is licensed to write commercial trucking insurance in Missouri and eight other states. Our agency is based in Benton, Kentucky, and we serve carriers throughout our licensed states by phone and email.
                </p>
                <p className="text-steel">
                  We handle federal and state insurance filings remotely. You don&apos;t need to visit our office — we coordinate everything electronically and by phone.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Missouri Trucking Insurance FAQ
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-navy mb-2">What insurance do I need for a Missouri-based trucking company?</h3>
                    <p className="text-steel">
                      Missouri for-hire motor carriers must maintain liability insurance and file proof of coverage with the appropriate state and federal agencies. Requirements depend on whether you operate interstate or intrastate, and what cargo you haul. Your insurance company files the necessary forms on your behalf.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">Can you help if I&apos;m launching a new trucking company in Missouri?</h3>
                    <p className="text-steel">
                      Yes. We work with new-authority carriers and understand the insurance requirements for startup trucking operations. Visit our <Link href="/new-authority-insurance" className="text-navy hover:underline font-semibold">New Authority Insurance</Link> page to learn about the process and timeline.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">Do you cover Missouri carriers who haul to Kansas City or St. Louis?</h3>
                    <p className="text-steel">
                      Yes. We work with Missouri carriers operating throughout the state, including those serving Kansas City, St. Louis, Springfield, and other Missouri markets, as well as those hauling regionally or nationwide.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">What types of Missouri trucking operations do you insure?</h3>
                    <p className="text-steel">
                      We focus on for-hire trucking companies hauling general freight, flatbed, and reefer. We typically work with owner-operators and small fleets (2–10 trucks). For specialized commodities or larger operations, contact us to discuss your specific needs.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">How do I get a Missouri trucking insurance quote?</h3>
                    <p className="text-steel">
                      Email <a href="mailto:darin@insuredtrucking.com" className="text-navy hover:underline font-semibold">darin@insuredtrucking.com</a> or call <a href="tel:270-205-3002" className="text-navy hover:underline font-semibold">270-205-3002</a> with details about your operation. We&apos;ll shop multiple carriers and send you quotes to review.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-red-50 border-red-200">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  Not Legal or Regulatory Advice
                </h2>
                <p className="text-steel">
                  This information is for general educational purposes only. For specific questions about your Missouri insurance or filing requirements, contact the Missouri Department of Transportation or consult with a qualified attorney.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Get Missouri Trucking Insurance
              </h2>
              <p className="text-steel mb-6">
                Email <a href="mailto:darin@insuredtrucking.com" className="text-navy hover:underline font-semibold">darin@insuredtrucking.com</a> or call <a href="tel:270-205-3002" className="text-navy hover:underline font-semibold">270-205-3002</a>
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
