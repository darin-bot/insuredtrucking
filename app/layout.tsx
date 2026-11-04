import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Affordable Truck Insurance Inc | Commercial Trucking Insurance',
  description: 'Independent insurance agency specializing in commercial trucking coverage for owner-operators and for-hire trucking companies. Licensed in 9 states.',
  metadataBase: new URL('https://getinsuredtrucking.com'),
  alternates: {
    canonical: 'https://getinsuredtrucking.com/',
  },
  openGraph: {
    title: 'Affordable Truck Insurance Inc | Commercial Trucking Insurance',
    description: 'Independent insurance agency specializing in commercial trucking coverage for owner-operators and for-hire trucking companies. Licensed in 9 states.',
    url: 'https://getinsuredtrucking.com/',
    siteName: 'Affordable Truck Insurance Inc',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Truck Insurance Inc | Commercial Trucking Insurance',
    description: 'Independent insurance agency specializing in commercial trucking coverage for owner-operators and for-hire trucking companies. Licensed in 9 states.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Affordable Truck Insurance Inc',
              url: 'https://getinsuredtrucking.com',
              email: 'darin@insuredtrucking.com',
              telephone: '+1-270-205-3002',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '702 Poplar St',
                addressLocality: 'Benton',
                addressRegion: 'KY',
                postalCode: '42025',
                addressCountry: 'US',
              },
              description: 'Independent insurance agency specializing in commercial trucking coverage for owner-operators and for-hire trucking companies.',
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
