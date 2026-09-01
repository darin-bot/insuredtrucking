import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get a Quote | Affordable Truck Insurance Inc',
  description: 'Request a commercial trucking insurance quote. We serve motor carriers in KY, TN, TX, AL, MO, IN, FL, GA, and NC.',
}

export default function Quote() {
  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Get a Quote
            </h1>
            <p className="text-lg text-steel mb-8">
              Request a commercial trucking insurance quote for your operation. We serve motor carriers in Alabama, Florida, Georgia, Indiana, Kentucky, Missouri, North Carolina, Tennessee, and Texas.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="card bg-white">
              <h2 className="text-2xl font-bold text-navy mb-6">
                Request Your Quote
              </h2>

              <div className="mb-8 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
                <h3 className="font-bold text-navy mb-2">Important: Licensed States Only</h3>
                <p className="text-steel text-sm">
                  We are licensed to write commercial trucking insurance in Alabama, Florida, Georgia, Indiana, Kentucky, Missouri, North Carolina, Tennessee, and Texas. We cannot provide coverage for operations based in other states.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-navy mb-3">To Request a Quote:</h3>
                  <p className="text-steel mb-4">
                    Email us at{' '}
                    <a 
                      href="mailto:darin@insuredtrucking.com?subject=Trucking Insurance Quote Request" 
                      className="text-navy hover:underline font-semibold"
                    >
                      darin@insuredtrucking.com
                    </a>
                    {' '}with the following information:
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="card bg-gray-50">
                    <h4 className="font-semibold text-navy mb-2">Business Information</h4>
                    <ul className="space-y-1 text-steel text-sm">
                      <li>• Business name and address</li>
                      <li>• DOT and MC numbers (or indicate if new authority)</li>
                      <li>• Years in business</li>
                      <li>• Business entity type (LLC, Corporation, etc.)</li>
                    </ul>
                  </div>

                  <div className="card bg-gray-50">
                    <h4 className="font-semibold text-navy mb-2">Operation Details</h4>
                    <ul className="space-y-1 text-steel text-sm">
                      <li>• Type of freight (general freight, flatbed, reefer, etc.)</li>
                      <li>• Operating radius or states of operation</li>
                      <li>• Interstate or intrastate</li>
                      <li>• Annual mileage estimate</li>
                    </ul>
                  </div>

                  <div className="card bg-gray-50">
                    <h4 className="font-semibold text-navy mb-2">Drivers</h4>
                    <ul className="space-y-1 text-steel text-sm">
                      <li>• Number of drivers</li>
                      <li>• Driver names and dates of birth</li>
                      <li>• Years of commercial driving experience</li>
                      <li>• CDL information</li>
                    </ul>
                  </div>

                  <div className="card bg-gray-50">
                    <h4 className="font-semibold text-navy mb-2">Vehicles</h4>
                    <ul className="space-y-1 text-steel text-sm">
                      <li>• Number and type of power units</li>
                      <li>• Vehicle year, make, model</li>
                      <li>• VINs</li>
                      <li>• Vehicle values (if requesting physical damage coverage)</li>
                    </ul>
                  </div>

                  <div className="card bg-gray-50">
                    <h4 className="font-semibold text-navy mb-2">Coverage Needed</h4>
                    <ul className="space-y-1 text-steel text-sm">
                      <li>• Primary liability limits required</li>
                      <li>• Cargo coverage amount (if needed)</li>
                      <li>• Physical damage coverage (if needed)</li>
                      <li>• General liability (if needed)</li>
                      <li>• Desired effective date</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <a 
                    href="mailto:darin@insuredtrucking.com?subject=Trucking Insurance Quote Request"
                    className="btn-primary w-full"
                  >
                    Email for Quote: darin@insuredtrucking.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 card bg-blue-50 border-blue-200">
              <h3 className="font-bold text-navy mb-3">What Happens Next?</h3>
              <p className="text-steel mb-3">
                After you send your quote request, we will review your information and work to obtain competitive quotes from insurance carriers that write your type of operation.
              </p>
              <p className="text-steel">
                Quote timing varies based on complexity, but we typically respond within 1-2 business days with initial information or follow-up questions.
              </p>
            </div>

            <div className="mt-8 card bg-red-50 border-red-200">
              <h3 className="font-bold text-red-900 mb-3">Important Notice</h3>
              <p className="text-steel">
                Submitting a quote request does not bind coverage. Coverage is subject to underwriting approval and policy terms. This website is for informational purposes only and does not constitute an insurance contract.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
