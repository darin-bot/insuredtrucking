import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Affordable Truck Insurance Inc</h3>
            <p className="text-steel-light mb-4">
              Independent insurance agency specializing in commercial trucking coverage for owner-operators and for-hire trucking companies.
            </p>
            <p className="text-steel-light">
              <a href="mailto:darin@insuredtrucking.com" className="hover:text-white transition-colors">
                darin@insuredtrucking.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Coverage</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/new-authority-insurance" className="text-steel-light hover:text-white transition-colors">
                  New Authority Insurance
                </Link>
              </li>
              <li>
                <Link href="/bmc-91-filing" className="text-steel-light hover:text-white transition-colors">
                  BMC-91 Filing
                </Link>
              </li>
              <li>
                <Link href="/kentucky-trucking-insurance" className="text-steel-light hover:text-white transition-colors">
                  Kentucky Trucking Insurance
                </Link>
              </li>
              <li>
                <Link href="/texas-trucking-insurance" className="text-steel-light hover:text-white transition-colors">
                  Texas Trucking Insurance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">States We Serve</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/states" className="text-steel-light hover:text-white transition-colors">
                  All States
                </Link>
              </li>
              <li className="text-steel-light">Alabama</li>
              <li className="text-steel-light">Florida</li>
              <li className="text-steel-light">Georgia</li>
              <li className="text-steel-light">Indiana</li>
              <li className="text-steel-light">Kentucky</li>
              <li className="text-steel-light">Missouri</li>
              <li className="text-steel-light">North Carolina</li>
              <li className="text-steel-light">Tennessee</li>
              <li className="text-steel-light">Texas</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-steel-dark mt-8 pt-8 text-sm text-steel-light space-y-4">
          <p className="font-semibold">
            Licensed to write commercial trucking insurance in Alabama, Florida, Georgia, Indiana, Kentucky, Missouri, North Carolina, Tennessee, and Texas.
          </p>
          <p>
            This website is for informational purposes only and does not constitute a binder or insurance contract. Coverage is subject to underwriting approval and policy terms.
          </p>
          <p className="font-semibold text-yellow-400">
            Important: We never collect premium payments via Zelle, Cash App, or similar peer-to-peer payment services. Please verify payment instructions directly with our office.
          </p>
          <p>
            &copy; {currentYear} Affordable Truck Insurance Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
