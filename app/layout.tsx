import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Affordable Truck Insurance Inc | Commercial Trucking Insurance',
  description: 'Independent insurance agency specializing in commercial trucking coverage. Serving owner-operators and for-hire trucking companies in KY, TN, TX, AL, MO, IN, FL, GA, and NC.',
  metadataBase: new URL('https://insuredtrucking.com'),
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
              url: 'https://insuredtrucking.com',
              email: 'darin@insuredtrucking.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Benton',
                addressRegion: 'KY',
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
