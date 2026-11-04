import type { Metadata } from 'next'
import NewAuthorityContent from '@/components/NewAuthorityContent'

export const metadata: Metadata = {
  title: 'New Authority Insurance | Affordable Truck Insurance Inc',
  description: 'Commercial trucking insurance for new ventures and new FMCSA authority. We work with startup trucking companies.',
  alternates: {
    canonical: 'https://getinsuredtrucking.com/new-authority-insurance/',
  },
  openGraph: {
    title: 'New Authority Insurance | Affordable Truck Insurance Inc',
    description: 'Commercial trucking insurance for new ventures and new FMCSA authority. We work with startup trucking companies.',
    url: 'https://getinsuredtrucking.com/new-authority-insurance/',
    siteName: 'Affordable Truck Insurance Inc',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Authority Insurance | Affordable Truck Insurance Inc',
    description: 'Commercial trucking insurance for new ventures and new FMCSA authority. We work with startup trucking companies.',
  },
}

export default function NewAuthorityInsurance() {
  return <NewAuthorityContent />
}
