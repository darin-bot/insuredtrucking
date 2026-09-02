import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Affordable Truck Insurance Inc',
  description: 'Privacy policy for Affordable Truck Insurance Inc, an independent insurance agency based in Benton, Kentucky.',
}

export default function Privacy() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Privacy Policy
          </h1>
          
          <div className="space-y-6 text-steel">
            <p className="text-sm text-steel-dark">
              Last Updated: September 2, 2026
            </p>

            <div className="card">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Overview
              </h2>
              <p>
                Affordable Truck Insurance Inc is an independent insurance agency based in Benton, Kentucky. This privacy policy describes how we collect, use, and protect information provided through our website.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Information We Collect
              </h2>
              <p className="mb-4">
                When you request a quote through our website, we collect information necessary to provide an insurance quote, including:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-navy mr-2">•</span>
                  <span>Company name and contact information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy mr-2">•</span>
                  <span>DOT number and MC number</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy mr-2">•</span>
                  <span>Driver information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy mr-2">•</span>
                  <span>Equipment details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy mr-2">•</span>
                  <span>Operating details and commodities hauled</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy mr-2">•</span>
                  <span>Documents you choose to upload (license copies, loss runs, IFTA reports)</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-navy mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4">
                Information collected through our quote form is used to:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-navy mr-2">•</span>
                  <span>Provide you with a commercial trucking insurance quote</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy mr-2">•</span>
                  <span>Communicate with you about coverage options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy mr-2">•</span>
                  <span>Issue insurance policies if you choose to purchase coverage</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Document Storage
              </h2>
              <p>
                Documents uploaded through our quote form (driver&apos;s license copies, loss runs, IFTA reports) are transmitted via email and are not stored on this website. These documents are used only to prepare your insurance quote.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Information Sharing
              </h2>
              <p>
                We do not sell or share your personal information with third parties except as necessary to provide you with insurance quotes and coverage (sharing with insurance carriers for underwriting purposes).
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Contact Information
              </h2>
              <p className="mb-2">
                If you have questions about this privacy policy or how we handle your information, please contact us:
              </p>
              <p className="font-semibold">
                <a href="mailto:darin@insuredtrucking.com" className="text-navy hover:underline">
                  darin@insuredtrucking.com
                </a>
              </p>
            </div>

            <div className="card bg-gray-50">
              <p className="text-sm">
                Affordable Truck Insurance Inc<br />
                Independent Insurance Agency<br />
                Benton, Kentucky
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
