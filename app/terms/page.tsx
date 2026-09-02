import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Affordable Truck Insurance Inc',
  description: 'Terms of service for Affordable Truck Insurance Inc, an independent insurance agency based in Benton, Kentucky.',
}

export default function Terms() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Terms of Service
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
                Affordable Truck Insurance Inc is an independent insurance agency based in Benton, Kentucky, specializing in commercial trucking insurance. These terms govern your use of our website and services.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Website Purpose
              </h2>
              <p>
                This website provides information about commercial trucking insurance and allows you to request insurance quotes. The information provided is for general educational purposes only and does not constitute insurance advice, legal advice, or regulatory guidance.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-navy mb-4">
                No Binding Coverage
              </h2>
              <p className="mb-4">
                <strong className="text-navy">Important:</strong> Submitting a quote request through this website does not bind coverage or create an insurance contract. All coverage is subject to:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-navy mr-2">•</span>
                  <span>Underwriting approval by the insurance carrier</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy mr-2">•</span>
                  <span>Receipt and acceptance of a formal quote</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy mr-2">•</span>
                  <span>Payment of premium</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy mr-2">•</span>
                  <span>Issuance of a policy by the insurance carrier</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Licensed States
              </h2>
              <p className="mb-4">
                We are licensed to write commercial trucking insurance in the following states only:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
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
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Accuracy of Information
              </h2>
              <p>
                While we strive to provide accurate information about insurance requirements and coverage options, state and federal regulations change frequently. You should verify current requirements with the appropriate regulatory agencies or consult with a qualified attorney for specific legal or regulatory guidance.
              </p>
            </div>

            <div className="card bg-yellow-50 border-yellow-300">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Payment Security Notice
              </h2>
              <p>
                <strong>We never collect premium payments via Zelle, Cash App, or similar peer-to-peer payment services.</strong> If someone claiming to represent our agency requests payment via these methods, do not send payment and contact us directly to verify.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Independent Agency
              </h2>
              <p>
                Affordable Truck Insurance Inc is an independent insurance agency. We represent multiple insurance carriers and are not affiliated with or employed by any single insurance company.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Limitation of Liability
              </h2>
              <p>
                This website and the information provided are offered &quot;as is&quot; without warranties of any kind. We are not liable for any decisions made based on information found on this website.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Contact Information
              </h2>
              <p className="mb-2">
                If you have questions about these terms, please contact us:
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
