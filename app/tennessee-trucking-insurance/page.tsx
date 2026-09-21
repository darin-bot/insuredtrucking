import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tennessee Trucking Insurance | Owner-Operator & Fleet Coverage',
  description: 'Commercial trucking insurance for Tennessee motor carriers. Licensed in TN. Coverage for general freight, flatbed, and reefer operations.',
}

export default function TennesseeTruckingInsurance() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Tennessee Trucking Insurance
            </h1>
            <p className="text-lg text-steel mb-8">
              Affordable Truck Insurance Inc provides commercial trucking insurance for Tennessee owner-operators, small fleets, and new-authority carriers hauling general freight, flatbed, and reefer across the state and beyond.
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
                  Coverage for Tennessee Motor Carriers
                </h2>
                <p className="text-steel mb-4">
                  We work with Tennessee-based for-hire carriers operating across the state and throughout the Southeast, Midwest, and beyond. Whether you run primarily on I-40, I-24, or I-65, or haul produce from Middle Tennessee farms, we help you secure appropriate coverage for your operation.
                </p>
                <p className="text-steel mb-4">
                  Our agency specializes in commercial trucking insurance for:
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
                    <span>Reefer (temperature-controlled) freight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>New ventures and new authority carriers</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-blue-50 border-blue-200">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Licensed in Tennessee
                </h2>
                <p className="text-steel mb-4">
                  Affordable Truck Insurance Inc is licensed to write commercial trucking insurance in Tennessee and eight other states. Our home office is in Benton, Kentucky, just across the Tennessee River from the Tennessee state line.
                </p>
                <p className="text-steel">
                  We work remotely by phone and email to serve carriers throughout our licensed territory. You don&apos;t need to travel to our office — we handle everything by phone, email, and electronic signature.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Tennessee Trucking Insurance FAQ
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-navy mb-2">Do I need separate insurance for Tennessee intrastate operations?</h3>
                    <p className="text-steel">
                      If you operate exclusively within Tennessee (intrastate), you may have different insurance requirements than interstate carriers. Tennessee requires proof of insurance for intrastate for-hire operations. Your insurance company files the required forms with the appropriate state and federal agencies.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">What if I haul freight through Nashville or Memphis but I&apos;m based in another state?</h3>
                    <p className="text-steel">
                      Interstate carriers based outside Tennessee can haul freight through or to Tennessee under their federal authority. Your insurance policy covers you in all states where you operate, subject to policy terms and conditions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">Can I get coverage if I&apos;m starting a new trucking company in Tennessee?</h3>
                    <p className="text-steel">
                      Yes. We work with new-authority carriers regularly. Visit our <Link href="/new-authority-insurance" className="text-navy hover:underline font-semibold">New Authority Insurance</Link> page to learn about the process, timeline, and what to expect when launching a trucking operation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">What freight types can you cover in Tennessee?</h3>
                    <p className="text-steel">
                      We specialize in for-hire general freight, flatbed, and reefer operations. We work with owner-operators and small fleets (typically 2–10 trucks). If you haul specialized commodities or operate larger fleets, contact us to discuss your specific operation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">How do I get a quote for Tennessee trucking insurance?</h3>
                    <p className="text-steel">
                      Email your operation details to <a href="mailto:darin@insuredtrucking.com" className="text-navy hover:underline font-semibold">darin@insuredtrucking.com</a> or call us at <a href="tel:270-205-3002" className="text-navy hover:underline font-semibold">270-205-3002</a>. We&apos;ll shop multiple carriers and send you quotes to review at your pace.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-red-50 border-red-200">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  Not Legal or Regulatory Advice
                </h2>
                <p className="text-steel">
                  This information is for general educational purposes only. For specific questions about your Tennessee insurance or filing requirements, contact the Tennessee Department of Safety and Homeland Security or consult with a qualified attorney.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Get Tennessee Trucking Insurance
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
