import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Affordable Truck Insurance Inc',
  description: 'Independent insurance agency based in Benton, Kentucky specializing in commercial trucking coverage. Owner Darin Austin, Transportation Risk Specialist.',
}

export default function About() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              About Affordable Truck Insurance Inc
            </h1>
            <p className="text-lg text-steel mb-8">
              Independent insurance agency specializing in commercial trucking coverage for owner-operators and for-hire trucking companies.
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
                  Based in Benton, Kentucky
                </h2>
                <p className="text-steel mb-4">
                  Affordable Truck Insurance Inc is an independent insurance agency based in Benton, Kentucky. We specialize exclusively in commercial trucking insurance for owner-operators and for-hire trucking companies.
                </p>
                <p className="text-steel">
                  As an independent agency, we work with multiple insurance carriers to find competitive coverage options for your trucking operation.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Owner: Darin Austin
                </h2>
                <p className="text-steel mb-4">
                  Darin Austin is the owner of Affordable Truck Insurance Inc and brings over 30 years of experience in the insurance industry. He has specialized in trucking insurance since 2014.
                </p>
                <p className="text-steel">
                  Darin is a Transportation Risk Specialist, a designation from MCIEF.org that demonstrates specialized knowledge in commercial trucking insurance and the unique risks facing motor carriers.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Our Specialization
                </h2>
                <p className="text-steel mb-4">
                  We focus exclusively on commercial trucking insurance. This specialization allows us to understand the unique challenges and requirements facing owner-operators and for-hire trucking companies.
                </p>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-navy mb-1">Freight Types</h3>
                    <p className="text-steel text-sm">
                      General freight, flatbed, and reefer (temperature-controlled)
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">New Authority Welcome</h3>
                    <p className="text-steel text-sm">
                      We work with startup trucking companies and new FMCSA authority holders
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Coverage Types</h3>
                    <p className="text-steel text-sm">
                      Primary liability, physical damage, cargo, general liability, and occupational accident
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  States We Serve
                </h2>
                <p className="text-steel mb-4">
                  We are licensed to write commercial trucking insurance in nine states:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-steel">
                  <div>Alabama</div>
                  <div>Florida</div>
                  <div>Georgia</div>
                  <div>Indiana</div>
                  <div>Kentucky</div>
                  <div>Missouri</div>
                  <div>North Carolina</div>
                  <div>Tennessee</div>
                  <div>Texas</div>
                </div>
                <p className="text-steel mt-4">
                  <Link href="/states" className="text-navy hover:underline font-semibold">
                    View state-specific information →
                  </Link>
                </p>
              </div>

              <div className="card bg-yellow-50 border-yellow-300">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Important: Payment Security Notice
                </h2>
                <p className="text-steel mb-4">
                  <strong>We never collect premium payments via Zelle, Cash App, or similar peer-to-peer payment services.</strong>
                </p>
                <p className="text-steel">
                  If someone claiming to represent our agency requests payment via these methods, do not send payment and contact us directly at darin@insuredtrucking.com to verify.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Contact Us
                </h2>
                <p className="text-steel mb-4">
                  For quote requests or questions about commercial trucking insurance:
                </p>
                <p className="mb-2">
                  <a 
                    href="mailto:darin@insuredtrucking.com" 
                    className="text-navy hover:underline font-semibold text-lg"
                  >
                    darin@insuredtrucking.com
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Ready to Get a Quote?
              </h2>
              <p className="text-steel mb-6">
                Contact us for commercial trucking insurance in our nine licensed states.
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
