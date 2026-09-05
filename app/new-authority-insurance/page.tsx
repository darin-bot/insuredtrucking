import type { Metadata } from 'next'
import NewAuthorityContent from '@/components/NewAuthorityContent'

export const metadata: Metadata = {
  title: 'New Authority Insurance | Affordable Truck Insurance Inc',
  description: 'Commercial trucking insurance for new ventures and new FMCSA authority. We work with startup trucking companies.',
}

export default function NewAuthorityInsurance() {
  return <NewAuthorityContent />
}
