import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Small Fleet Trucking Insurance | Affordable Truck Insurance',
  description: 'Small fleet trucking insurance for 2-10 trucks. Coverage options, renewal strategies, and what growing motor carriers need to know.',
  alternates: {
    canonical: 'https://getinsuredtrucking.com/small-fleet-insurance/',
  },
  openGraph: {
    title: 'Small Fleet Trucking Insurance | Affordable Truck Insurance',
    description: 'Small fleet trucking insurance for 2-10 trucks. Coverage options, renewal strategies, and what growing motor carriers need to know.',
    url: 'https://getinsuredtrucking.com/small-fleet-insurance/',
    siteName: 'Affordable Truck Insurance Inc',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Fleet Trucking Insurance | Affordable Truck Insurance',
    description: 'Small fleet trucking insurance for 2-10 trucks. Coverage options, renewal strategies, and what growing motor carriers need to know.',
  },
}

export default function SmallFleetInsurance() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is considered a small fleet for trucking insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Small fleet typically means 2-10 trucks. This classification sits between single-truck owner operators and larger regional or national carriers. Small fleets often include the owner as a driver plus additional hired drivers.'
        }
      },
      {
        '@type': 'Question',
        name: 'What insurance does a small trucking company need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Small trucking companies need primary liability insurance filed with the FMCSA, cargo insurance to protect customer freight, physical damage coverage for trucks and trailers, general liability for premises exposure, and often workers compensation or occupational accident insurance for hired drivers. Additional endorsements may be required based on your operation.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does small fleet insurance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Small fleet insurance cost depends on the number of trucks, driver experience and records, type of freight, operating radius, equipment values, coverage limits, and loss history. Cost is calculated per truck and per driver, with total premium reflecting the aggregate exposure of your entire operation.'
        }
      },
      {
        '@type': 'Question',
        name: 'Why do trucking insurance rates go up at renewal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Renewal rates increase due to market conditions affecting all motor carriers, your loss history during the policy term, changes to your operation such as adding drivers or equipment, driver violations or accidents, and overall claims trends in the trucking insurance market. Shopping your renewal helps ensure competitive pricing.'
        }
      },
      {
        '@type': 'Question',
        name: 'When should I start shopping for my renewal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Start shopping 60-90 days before your renewal date. This gives carriers time to review your submission, pull loss runs, and provide competitive quotes. Last-minute shopping limits your options and may force you to accept less favorable terms.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Small Fleet Trucking Insurance
            </h1>
            <p className="text-lg text-steel mb-8">
              Growing from one truck to multiple trucks changes your insurance needs. Small fleet trucking insurance covers 2-10 trucks and the drivers who operate them. Understanding your coverage requirements and managing renewals strategically helps protect your growing business.
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
                  What Makes Small Fleet Insurance Different
                </h2>
                <p className="text-steel mb-4">
                  Small fleet operations face unique challenges. You are no longer a single owner operator, but you are not yet a large regional carrier with safety staff and sophisticated risk management programs. Your insurance program must accommodate this middle stage of growth.
                </p>
                
                <div className="space-y-4 mt-6">
                  <div>
                    <h3 className="font-bold text-navy mb-2">Multiple Drivers to Qualify</h3>
                    <p className="text-steel">
                      Each driver must meet underwriting requirements. One driver with a poor record can affect your entire fleet premium or make it difficult to find coverage. You need motor vehicle records, employment applications, and verification of experience for every driver.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-navy mb-2">Higher Liability Exposure</h3>
                    <p className="text-steel">
                      More trucks on the road means more exposure. A serious accident involving one of your drivers can generate a claim that affects your entire operation at renewal. Strong driver qualification, ongoing training, and safety practices become essential to managing your risk profile.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-navy mb-2">More Complex Coverage Needs</h3>
                    <p className="text-steel">
                      Small fleets often need workers compensation or occupational accident coverage for hired drivers. You may require hired and non-owned auto coverage for drivers using personal vehicles for company business. General liability becomes more important as you visit more customer locations and have more interactions with shippers and receivers.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-navy mb-2">Fleet Discounts May Not Apply</h3>
                    <p className="text-steel">
                      Two or three trucks typically do not qualify for large fleet discounts. Your premium is calculated per unit and per driver. While you lose some owner operator advantages, you have not yet reached fleet size where volume discounts offset the added complexity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Essential Coverage for Small Fleets
                </h2>
                <p className="text-steel mb-4">
                  Small trucking companies need a combination of federally required coverage and optional protections that safeguard your business and meet customer requirements.
                </p>

                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="font-bold text-navy mb-2">Primary Liability</h3>
                    <p className="text-steel">
                      Required by the FMCSA for your authority. Covers bodily injury and property damage your trucks cause to others. Most for-hire carriers need $750,000 minimum, though some haul commodities requiring $1 million or higher. Your policy covers all scheduled trucks and qualified drivers under one liability policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-navy mb-2">Cargo Insurance</h3>
                    <p className="text-steel">
                      Protects customer freight in your care, custody, and control. Brokers and shippers typically require cargo coverage, often $100,000 minimum. Your cargo limits should match the maximum value of freight you haul at any one time. Higher cargo values require higher limits.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-navy mb-2">Physical Damage</h3>
                    <p className="text-steel">
                      Covers your trucks and trailers for collision and comprehensive losses. Required by lenders if you finance your equipment. With multiple units, consider your deductible carefully. Frequent small claims across your fleet can hurt your renewal more than absorbing minor damage yourself.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-navy mb-2">General Liability</h3>
                    <p className="text-steel">
                      Provides slip-and-fall and premises liability coverage. Essential when your drivers regularly enter customer facilities. Many shippers and receivers require proof of general liability before allowing trucks on their property.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-navy mb-2">Driver Coverage: Workers Comp or Occupational Accident</h3>
                    <p className="text-steel">
                      Hired drivers need injury protection. Workers compensation is required in most states for employees. Occupational accident insurance can be an alternative in some situations. Talk to your agent about which option fits your operation and meets state requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-navy mb-2">Trailer Interchange</h3>
                    <p className="text-steel">
                      If you pull trailers you do not own (such as customer trailers or leased trailers), you need trailer interchange coverage. This protects you for damage to trailers in your possession that you do not own.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-blue-50 border-blue-200">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  What Affects Small Fleet Insurance Cost
                </h2>
                <p className="text-steel mb-4">
                  Multiple factors combine to determine your small fleet premium:
                </p>
                <ul className="space-y-3 text-steel">
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span><strong>Number of trucks:</strong> Each unit adds to your total exposure.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span><strong>Driver qualifications:</strong> Experience, age, MVR results, and years holding a CDL for each driver.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span><strong>Type of freight and radius:</strong> General freight vs. specialized commodities, local vs. long-haul operations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span><strong>Equipment values:</strong> Total stated value across your fleet for physical damage coverage.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span><strong>Loss history:</strong> Claims frequency and severity during your current and prior policy periods.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span><strong>Coverage limits and deductibles:</strong> Higher limits and lower deductibles increase your premium.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span><strong>Operating territory:</strong> States where you operate and percentage of miles in each state.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span><strong>Safety practices:</strong> Driver training programs, maintenance records, and safety management systems demonstrate lower risk.</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Understanding Your Renewal
                </h2>
                <p className="text-steel mb-4">
                  Trucking insurance renewals have become more challenging in recent years. Understanding the renewal process helps you plan ahead and avoid last-minute surprises.
                </p>

                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="font-bold text-navy mb-2">Why Renewals Increase</h3>
                    <p className="text-steel mb-3">
                      Several factors contribute to renewal rate increases:
                    </p>
                    <ul className="space-y-2 text-steel text-sm">
                      <li className="flex items-start">
                        <span className="text-navy mr-2">•</span>
                        <span>Market conditions affect all motor carriers. Hard market cycles mean carriers raise rates across their entire book of business.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-navy mr-2">•</span>
                        <span>Your loss history during the policy term. Even one moderate claim can trigger a significant renewal increase.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-navy mr-2">•</span>
                        <span>Driver violations or accidents that appeared on MVRs since you bound coverage.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-navy mr-2">•</span>
                        <span>Changes to your operation, such as adding drivers, changing freight types, or expanding radius.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-navy mr-2">•</span>
                        <span>Overall claims trends in the trucking insurance market affect future pricing.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-navy mb-2">How to Prepare for Renewal</h3>
                    <p className="text-steel mb-3">
                      Start preparing 60-90 days before your expiration date:
                    </p>
                    <ul className="space-y-2 text-steel text-sm">
                      <li className="flex items-start">
                        <span className="text-navy mr-2">•</span>
                        <span>Request loss runs from your current carrier showing all claims during the policy term.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-navy mr-2">•</span>
                        <span>Update your driver list and obtain current MVRs for all drivers.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-navy mr-2">•</span>
                        <span>Review your equipment schedule and remove sold trucks or add new purchases.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-navy mr-2">•</span>
                        <span>Document any safety improvements, training programs, or telematics you implemented.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-navy mr-2">•</span>
                        <span>Shop your renewal with multiple carriers to ensure competitive pricing.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-navy mb-2">Last-Minute Renewals Are Risky</h3>
                    <p className="text-steel">
                      Waiting until 30 days or less before expiration limits your options. Carriers need time to review your submission, pull reports, and underwrite your risk. Last-minute quotes often come back with higher premiums or more restrictive terms because underwriters rush the process. Give yourself and your agent adequate time to shop the market.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-yellow-50 border-yellow-300">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Strategies to Manage Your Fleet Insurance Cost
                </h2>
                <p className="text-steel mb-4">
                  Small fleets can take steps to control insurance expenses without sacrificing necessary coverage:
                </p>
                <ul className="space-y-3 text-steel">
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span><strong>Hire quality drivers.</strong> One bad driver can cost you thousands in increased premiums. Screen carefully and verify experience claims.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span><strong>Document your safety culture.</strong> Written safety policies, driver training records, and regular safety meetings demonstrate commitment to risk management.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span><strong>Investigate claims thoroughly.</strong> Not all reported incidents need to become claims. Investigate damage and consider paying small amounts out of pocket to preserve your loss history.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span><strong>Consider higher deductibles.</strong> If you can afford to absorb more out-of-pocket cost, higher deductibles reduce your premium.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span><strong>Shop annually.</strong> Market conditions change. Even with a good relationship with your current carrier, shopping ensures you receive competitive terms.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span><strong>Work with a specialized agent.</strong> Trucking insurance is complex. An agent who focuses on motor carriers knows which markets fit your operation and can present your risk effectively.</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Growing Beyond 10 Trucks
                </h2>
                <p className="text-steel mb-4">
                  As you approach 10-15 trucks, your insurance needs shift again. Larger fleets may access different carriers with better pricing tiers. You may need a dedicated safety manager and more formal risk management programs.
                </p>
                <p className="text-steel">
                  Your agent should help you plan for this transition. Some carriers specialize in fleets of 10-50 trucks and offer better terms than markets focused on smaller operations. Discuss your growth plans with your agent so they can position you for the right markets at the right time.
                </p>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-4">
                  We Work With Small Fleets
                </h2>
                <p className="text-steel mb-4">
                  We specialize in small fleet trucking insurance for 2-10 truck operations. We understand the challenges of growing from one truck to multiple trucks. Our approach focuses on finding competitive coverage while helping you manage renewals strategically.
                </p>
                <p className="text-steel">
                  We are licensed in nine states and work with multiple carriers to find coverage that fits your operation. Whether you are adding your second truck or managing your tenth renewal, we can help you navigate the small fleet insurance market.
                </p>
              </div>

            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-navy mb-6 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <div className="card">
                  <h3 className="font-bold text-lg text-navy mb-2">
                    What is considered a small fleet for trucking insurance?
                  </h3>
                  <p className="text-steel">
                    Small fleet typically means 2-10 trucks. This classification sits between single-truck owner operators and larger regional or national carriers. Small fleets often include the owner as a driver plus additional hired drivers.
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-bold text-lg text-navy mb-2">
                    What insurance does a small trucking company need?
                  </h3>
                  <p className="text-steel">
                    Small trucking companies need primary liability insurance filed with the FMCSA, cargo insurance to protect customer freight, physical damage coverage for trucks and trailers, general liability for premises exposure, and often workers compensation or occupational accident insurance for hired drivers. Additional endorsements may be required based on your operation.
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-bold text-lg text-navy mb-2">
                    How much does small fleet insurance cost?
                  </h3>
                  <p className="text-steel">
                    Small fleet insurance cost depends on the number of trucks, driver experience and records, type of freight, operating radius, equipment values, coverage limits, and loss history. Cost is calculated per truck and per driver, with total premium reflecting the aggregate exposure of your entire operation.
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-bold text-lg text-navy mb-2">
                    Why do trucking insurance rates go up at renewal?
                  </h3>
                  <p className="text-steel">
                    Renewal rates increase due to market conditions affecting all motor carriers, your loss history during the policy term, changes to your operation such as adding drivers or equipment, driver violations or accidents, and overall claims trends in the trucking insurance market. Shopping your renewal helps ensure competitive pricing.
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-bold text-lg text-navy mb-2">
                    When should I start shopping for my renewal?
                  </h3>
                  <p className="text-steel">
                    Start shopping 60-90 days before your renewal date. This gives carriers time to review your submission, pull loss runs, and provide competitive quotes. Last-minute shopping limits your options and may force you to accept less favorable terms.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Get a Small Fleet Insurance Quote
              </h2>
              <p className="text-steel mb-6">
                Request a quote online or call to discuss your fleet operation and coverage needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="btn-primary">
                  Request a Quote
                </Link>
                <a href="tel:270-205-3002" className="btn-secondary">
                  Call 270-205-3002
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
