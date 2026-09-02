'use client'

import { useState } from 'react'

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How much does commercial trucking insurance cost?',
    answer: 'Coverage cost depends on your operation, equipment, drivers, freight type, and operating radius. New authority policies typically start at several thousand dollars per truck annually. We shop multiple carriers to find competitive terms for your specific situation. Submit a quote request so we can provide accurate pricing based on your details.'
  },
  {
    question: 'Which states are you licensed in?',
    answer: 'We are licensed to write commercial trucking insurance in nine states: Alabama, Florida, Georgia, Indiana, Kentucky, Missouri, North Carolina, Tennessee, and Texas. We work with motor carriers garaged in these states.'
  },
  {
    question: 'Do you work with new authority?',
    answer: 'Yes. We specialize in working with new ventures and new FMCSA authority holders. Whether you have prior trucking experience or are starting your first operation, we can help you understand your insurance requirements and find coverage.'
  },
  {
    question: 'What is BMC-91 and who files it?',
    answer: 'BMC-91 (and BMC-91X for freight brokers) is the FMCSA form that proves you carry required liability insurance. Your insurance company files this form electronically with FMCSA on your behalf. You don\'t file it yourself. We work with carriers who handle this filing as part of your policy.'
  },
  {
    question: 'What documents do I need to get a quote?',
    answer: 'Basic quotes require your DOT/MC numbers, driver information (license, DOT, MVR), and equipment details (VIN, year, make, model, value). If you have prior insurance, provide loss runs. IFTA quarterly reports help demonstrate established operations. New ventures can get quotes with just driver and equipment details.'
  },
  {
    question: 'How fast can I get a quote?',
    answer: 'We respond to quote requests within 1-2 business days by email. Complex operations or new authority may require additional underwriting review. Rush requests are possible but not guaranteed. Contact us at darin@insuredtrucking.com with your details.'
  },
  {
    question: 'Do you insure small fleets?',
    answer: 'Yes. We work with owner-operators running one truck and small fleets up to about 10 trucks. Our focus is on for-hire general freight, flatbed, and reefer operations. We serve independent operators and growing companies.'
  },
  {
    question: 'What if I only have 2-3 trucks?',
    answer: 'That\'s exactly our market. We specialize in small operations. Whether you operate 1 truck or 10 trucks, we can help you find coverage for your for-hire trucking business.'
  }
]

export default function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })
        }}
      />
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex justify-between items-start gap-4 min-h-[48px]"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-semibold text-navy text-lg pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 text-navy flex-shrink-0 transition-transform duration-200 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-steel leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
