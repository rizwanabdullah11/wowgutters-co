import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-moor-green/'
const pageData = suburbPages['moor-green']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Moor Green Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Moor Green, Birmingham (B44, B23). 1930s semis & post-war estates, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Moor Green Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Moor Green, Birmingham (B44). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/moor-green.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Moor Green Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Moor Green Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Moor Green B44. From £50. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/moor-green.jpg'],
  },
}

export default function MoorGreenPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Moor Green"
        url={URL_PATH}
        priceFrom={50}
        priceTo={110}
        nearbyAreas={['Kingstanding', 'Erdington', 'Birmingham', 'Perry Barr', 'Great Barr']}
        geo={{ latitude: 52.53, longitude: -1.87 }}
        postcodes={['B44', 'B23']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
