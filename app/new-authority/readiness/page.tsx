import type { Metadata } from 'next'
import ReadinessQuiz from './ReadinessQuiz'

export const metadata: Metadata = {
  title: 'New Authority Readiness Checker | Affordable Truck Insurance Inc',
  description: 'Starting your own trucking authority? Answer a few quick questions to see how ready you are for commercial truck insurance and get a personal checklist of next steps.',
  alternates: {
    canonical: 'https://getinsuredtrucking.com/new-authority/readiness/',
  },
  openGraph: {
    title: 'New Authority Readiness Checker | Affordable Truck Insurance Inc',
    description: 'Starting your own trucking authority? Answer a few quick questions to see how ready you are for commercial truck insurance and get a personal checklist of next steps.',
    url: 'https://getinsuredtrucking.com/new-authority/readiness/',
    siteName: 'Affordable Truck Insurance Inc',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Authority Readiness Checker | Affordable Truck Insurance Inc',
    description: 'Starting your own trucking authority? Answer a few quick questions to see how ready you are for commercial truck insurance and get a personal checklist of next steps.',
  },
}

export default function ReadinessPage() {
  return (
    <section className="px-4 py-8 md:py-14 bg-gray-50">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-navy mb-2">New authority readiness checker</h1>
        <p className="text-steel mb-4">Starting your own authority? Answer a few quick questions and get a personal checklist of what to line up before you shop for truck insurance. Takes about 2 minutes.</p>
        <p className="text-steel mb-6">
          Questions? Call <a href="tel:270-205-3002" className="text-navy hover:underline font-semibold">270-205-3002</a>
        </p>
        <ReadinessQuiz />
      </div>
    </section>
  )
}
