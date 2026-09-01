import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BMC-91 Filing Explained | Affordable Truck Insurance Inc',
  description: 'Understanding BMC-91 vs BMC-34 filing requirements, the 20-day approval window, and common misconceptions about FMCSA insurance filings.',
}

export default function BMC91Filing() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              BMC-91 Filing Explained
            </h1>
            <p className="text-lg text-steel mb-8">
              Understanding the BMC-91 insurance filing process and clearing up common misconceptions about FMCSA proof of insurance requirements.
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
                  What is BMC-91?
                </h2>
                <p className="text-steel mb-4">
                  The BMC-91 is the form that insurance companies file with the Federal Motor Carrier Safety Administration (FMCSA) to provide proof that a motor carrier has the required liability insurance coverage.
                </p>
                <p className="text-steel">
                  When your insurance company files a BMC-91, they are certifying to the FMCSA that you have the minimum required insurance coverage in force.
                </p>
              </div>

              <div className="card bg-yellow-50 border-yellow-300">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  BMC-91 vs BMC-34: Common Misconception
                </h2>
                <p className="text-steel mb-4">
                  There is a common misconception in the trucking industry that BMC-91 and BMC-34 are two different types of insurance or filing options that carriers can choose between. This is not accurate.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-navy mb-2">BMC-91</h3>
                    <p className="text-steel">
                      Filed by insurance companies on behalf of individual motor carriers. This is what most trucking companies need.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">BMC-34</h3>
                    <p className="text-steel">
                      Used by surety companies or motor carriers posting bonds. This is not a standard insurance filing and is rarely used by typical for-hire carriers.
                    </p>
                  </div>
                </div>
                <p className="text-steel mt-4">
                  If you are purchasing standard commercial trucking insurance, your insurance company will file a BMC-91. You do not choose between BMC-91 and BMC-34.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  The 20-Day Approval Window
                </h2>
                <p className="text-steel mb-4">
                  When a BMC-91 is filed, it typically takes up to 20 business days for the FMCSA to process and approve the filing. During this time:
                </p>
                <ul className="space-y-2 text-steel">
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Your insurance coverage is in effect from the policy effective date</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>The BMC-91 filing is pending with the FMCSA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>You should not begin operating until the filing is approved</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>You can check filing status on the FMCSA website</span>
                  </li>
                </ul>
                <p className="text-steel mt-4">
                  Once approved, your authority will show active insurance coverage on the FMCSA&apos;s public database.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  When Coverage Changes or Cancels
                </h2>
                <p className="text-steel mb-4">
                  If your insurance policy is cancelled or not renewed, the insurance company is required to file a BMC-36 (notice of cancellation) with the FMCSA. This typically provides 30 to 35 days notice before coverage terminates.
                </p>
                <p className="text-steel">
                  Operating without proper insurance on file with the FMCSA can result in your authority being placed out of service.
                </p>
              </div>

              <div className="card bg-red-50 border-red-200">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  Important: This is Not Legal Advice
                </h2>
                <p className="text-steel">
                  The information on this page is for general educational purposes only and should not be construed as legal advice. For specific questions about your FMCSA filing requirements, consult with a qualified attorney or contact the FMCSA directly.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  State Filings May Also Be Required
                </h2>
                <p className="text-steel mb-4">
                  In addition to the federal BMC-91 filing, some states require separate state-level insurance filings. For example:
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link href="/kentucky-trucking-insurance" className="text-navy hover:underline font-semibold">
                      Kentucky requires KYTC Form E (not KYU)
                    </Link>
                  </li>
                  <li>
                    <Link href="/texas-trucking-insurance" className="text-navy hover:underline font-semibold">
                      Texas requires TxDMV Form E
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Need Help with Your BMC-91 Filing?
              </h2>
              <p className="text-steel mb-6">
                When you purchase a commercial trucking policy from us, we handle the BMC-91 filing process with the FMCSA on your behalf.
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
