import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Indiana Trucking Insurance | Owner-Operator & Fleet Coverage',
  description: 'Indiana commercial trucking insurance for motor carriers. Licensed in IN. General freight, flatbed, and reefer coverage for owner-operators and small fleets.',
}

export default function IndianaTruckingInsurance() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Indiana Trucking Insurance
            </h1>
            <p className="text-lg text-steel mb-8">
              Affordable Truck Insurance Inc serves Indiana owner-operators, small fleets, and new-authority carriers with commercial trucking insurance for for-hire general freight, flatbed, and reefer operations.
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
                  Indiana Motor Carrier Insurance
                </h2>
                <p className="text-steel mb-4">
                  Indiana&apos;s position in the Midwest transportation network — with I-65 running north-south, I-69 connecting to Michigan, and I-70 crossing east-west — makes it a key state for freight movement. We work with Indiana carriers hauling regionally and nationwide.
                </p>
                <p className="text-steel mb-4">
                  Our agency provides commercial trucking insurance for:
                </p>
                <ul className="space-y-2 text-steel">
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>General freight hauling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Flatbed operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Reefer (refrigerated) freight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Owner-operators and small fleets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>New-authority carriers welcome</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-blue-50 border-blue-200">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Licensed in Indiana
                </h2>
                <p className="text-steel mb-4">
                  Affordable Truck Insurance Inc is licensed to write commercial trucking insurance in Indiana and eight other states. Our office is located in Benton, Kentucky, and we work with carriers throughout our nine-state footprint by phone and email.
                </p>
                <p className="text-steel">
                  All insurance filings and paperwork are handled remotely. You don&apos;t need to visit our office in person — we coordinate everything electronically.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Indiana Trucking Insurance Questions
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-navy mb-2">What insurance is required for Indiana trucking companies?</h3>
                    <p className="text-steel">
                      Indiana for-hire motor carriers must maintain appropriate liability insurance and file proof of coverage with state and federal authorities. The specific requirements depend on your operation (interstate or intrastate) and the freight you haul. Your insurance company handles required filings.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">Can I get coverage if I&apos;m starting a new trucking operation in Indiana?</h3>
                    <p className="text-steel">
                      Yes. We work with new-authority carriers and understand the insurance requirements for startup trucking operations. Our <Link href="/new-authority-insurance" className="text-navy hover:underline font-semibold">New Authority Insurance</Link> page explains the process, timeline, and what to expect.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">Do you cover Indiana carriers hauling through Indianapolis or Fort Wayne?</h3>
                    <p className="text-steel">
                      Yes. We work with carriers operating throughout Indiana, including those serving Indianapolis, Fort Wayne, Evansville, and other Indiana markets. Your policy covers you in all states where you operate, subject to policy terms and conditions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">What size fleets do you typically insure in Indiana?</h3>
                    <p className="text-steel">
                      We specialize in owner-operators and small fleets, typically 2–10 trucks. Whether you run one truck or are growing a small fleet, we shop multiple insurance markets to find competitive coverage options.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">How do I request an Indiana trucking insurance quote?</h3>
                    <p className="text-steel">
                      Email <a href="mailto:darin@insuredtrucking.com" className="text-navy hover:underline font-semibold">darin@insuredtrucking.com</a> or call <a href="tel:270-205-3002" className="text-navy hover:underline font-semibold">270-205-3002</a> with details about your drivers, equipment, operating radius, and freight types. We&apos;ll shop carriers and send you quotes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">What if I operate in Indiana and other nearby states?</h3>
                    <p className="text-steel">
                      We are licensed in nine states and can coordinate coverage for carriers operating across multiple states. If your operation crosses state lines within our licensed territory, we can help structure coverage for your full operation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-red-50 border-red-200">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  Not Legal or Regulatory Advice
                </h2>
                <p className="text-steel">
                  This information is for general educational purposes only. For specific questions about your Indiana insurance or filing requirements, contact the Indiana Department of Revenue or consult with a qualified attorney.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Get Indiana Trucking Insurance
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
