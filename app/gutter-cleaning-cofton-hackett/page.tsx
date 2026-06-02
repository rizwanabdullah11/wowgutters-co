import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-cofton-hackett/'
const pageData = suburbPages['cofton-hackett']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Cofton Hackett Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Cofton Hackett, Birmingham (B45, B31). Detached & semi-detached homes, no ladders, vacuum system, before & after photos. From £55. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Cofton Hackett Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Cofton Hackett (B45). No ladders, vacuum system, before & after photos. From £55. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/cofton-hackett.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Cofton Hackett Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Cofton Hackett Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Cofton Hackett B45. From £55. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/cofton-hackett.jpg'],
  },
}

export default function CoftonHackettPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Cofton Hackett"
        url={URL_PATH}
        priceFrom={55}
        priceTo={120}
        nearbyAreas={['Longbridge', 'Rednal', 'Birmingham', 'Barnt Green', 'Rubery']}
        geo={{ latitude: 52.38, longitude: -1.99 }}
        postcodes={['B45', 'B31']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
