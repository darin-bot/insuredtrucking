'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container-custom px-4 md:px-6">
          <div className="flex justify-between items-center h-20 md:h-24">
            <Link href="/" className="flex items-center">
              <Image 
                src="/ati-logo.png" 
                alt="Affordable Truck Insurance" 
                width={72} 
                height={72}
                className="h-14 w-auto md:h-16"
                priority
              />
            </Link>
            
            <button
              className="md:hidden p-2 text-navy min-h-[48px] min-w-[48px]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/new-authority-insurance" className="text-steel hover:text-navy transition-colors min-h-[48px] flex items-center">
                New Authority
              </Link>
              <Link href="/states" className="text-steel hover:text-navy transition-colors min-h-[48px] flex items-center">
                States
              </Link>
              <Link href="/about" className="text-steel hover:text-navy transition-colors min-h-[48px] flex items-center">
                About
              </Link>
              <Link href="/quote" className="btn-primary">
                Get a Quote
              </Link>
            </nav>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 bg-white">
            <div className="container-custom px-4 py-4 flex flex-col gap-2">
              <Link 
                href="/new-authority-insurance" 
                className="text-steel hover:text-navy transition-colors py-3 min-h-[48px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                New Authority Insurance
              </Link>
              <Link 
                href="/states" 
                className="text-steel hover:text-navy transition-colors py-3 min-h-[48px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                States We Serve
              </Link>
              <Link 
                href="/about" 
                className="text-steel hover:text-navy transition-colors py-3 min-h-[48px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/quote" 
                className="btn-primary mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        )}
      </header>
      
      <div className="sticky top-20 md:top-24 z-40 md:hidden">
        <Link href="/quote" className="btn-primary w-full rounded-none">
          Get a Quote
        </Link>
      </div>
    </>
  )
}
