import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-pype-hayes/'
const pageData = suburbPages['pype-hayes']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Pype Hayes Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Pype Hayes, Birmingham (B23, B24). 1950s–70s semis & post-war estates, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Pype Hayes Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Pype Hayes, Birmingham (B23). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/pype-hayes.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Pype Hayes Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Pype Hayes Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Pype Hayes B23. From £50. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/pype-hayes.jpg'],
  },
}

export default function PypeHayesPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Pype Hayes"
        url={URL_PATH}
        priceFrom={50}
        priceTo={110}
        nearbyAreas={['Erdington', 'Sutton Coldfield', 'Birmingham', 'Walmley', 'Minworth']}
        geo={{ latitude: 52.52, longitude: -1.83 }}
        postcodes={['B23', 'B24']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
