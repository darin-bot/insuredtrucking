import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get a Quote | Affordable Truck Insurance Inc',
  description: 'Request a commercial trucking insurance quote for your operation. We serve owner-operators and for-hire carriers in 9 states.',
  alternates: {
    canonical: 'https://getinsuredtrucking.com/quote/',
  },
  openGraph: {
    title: 'Get a Quote | Affordable Truck Insurance Inc',
    description: 'Request a commercial trucking insurance quote for your operation. We serve owner-operators and for-hire carriers in 9 states.',
    url: 'https://getinsuredtrucking.com/quote/',
    siteName: 'Affordable Truck Insurance Inc',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get a Quote | Affordable Truck Insurance Inc',
    description: 'Request a commercial trucking insurance quote for your operation. We serve owner-operators and for-hire carriers in 9 states.',
  },
}

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
