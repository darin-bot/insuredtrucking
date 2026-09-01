import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Texas Trucking Insurance | TxDMV Form E Filing',
  description: 'Texas commercial trucking insurance requirements and TxDMV Form E filing for motor carriers operating in Texas.',
}

export default function TexasTruckingInsurance() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Texas Trucking Insurance
            </h1>
            <p className="text-lg text-steel mb-8">
              Commercial trucking insurance requirements for Texas motor carriers, including TxDMV Form E filing and federal BMC-91 requirements.
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
                  Texas Filing Requirements
                </h2>
                <p className="text-steel mb-4">
                  Motor carriers operating in Texas must comply with both federal and state insurance filing requirements:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-navy mb-2">Federal: BMC-91</h3>
                    <p className="text-steel">
                      Required by the FMCSA for interstate commerce. Filed with the Federal Motor Carrier Safety Administration.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2">Texas: TxDMV Form E</h3>
                    <p className="text-steel">
                      Required by the Texas Department of Motor Vehicles for intrastate operations. Filed with TxDMV.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  TxDMV Form E
                </h2>
                <p className="text-steel mb-4">
                  Form E is the Texas certificate of insurance that demonstrates compliance with state insurance requirements for motor carriers operating intrastate in Texas.
                </p>
                <p className="text-steel mb-4">
                  Your insurance company files Form E with the Texas Department of Motor Vehicles on your behalf when you purchase coverage.
                </p>
                <p className="text-steel">
                  This filing is in addition to any federal BMC-91 filing required for interstate operations.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Coverage for Texas Operations
                </h2>
                <p className="text-steel mb-4">
                  We provide commercial trucking insurance for motor carriers operating in Texas, including:
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
                    <span>Interstate and intrastate operations</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-blue-50 border-blue-200">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Texas and Multi-State Operations
                </h2>
                <p className="text-steel mb-4">
                  Many trucking companies operate across multiple states. If you operate in Texas and other states, you may need insurance filings in multiple jurisdictions.
                </p>
                <p className="text-steel">
                  We are licensed to write commercial trucking insurance in Texas and eight other states, making it easier to coordinate coverage across your operating territory.
                </p>
              </div>

              <div className="card bg-red-50 border-red-200">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  Not Legal or Regulatory Advice
                </h2>
                <p className="text-steel">
                  This information is for general educational purposes only. For specific questions about your Texas filing requirements, contact the Texas Department of Motor Vehicles or consult with a qualified attorney.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Get Texas Trucking Insurance
              </h2>
              <p className="text-steel mb-6">
                We handle TxDMV Form E and BMC-91 filings for your Texas trucking operation.
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
