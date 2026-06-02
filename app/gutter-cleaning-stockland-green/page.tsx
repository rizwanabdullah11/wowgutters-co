import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-stockland-green/'
const pageData = suburbPages['stockland-green']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Stockland Green Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Stockland Green, Birmingham (B33, B34). Post-war terraces & semis, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Stockland Green Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Stockland Green, Birmingham (B33). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/stockland-green.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Stockland Green Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Stockland Green Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Stockland Green B33. From £50. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/stockland-green.jpg'],
  },
}

export default function StocklandGreenPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Stockland Green"
        url={URL_PATH}
        priceFrom={50}
        priceTo={105}
        nearbyAreas={['Stechford', 'Castle Bromwich', 'Birmingham', 'Ward End', 'Hodge Hill']}
        geo={{ latitude: 52.49, longitude: -1.81 }}
        postcodes={['B33', 'B34']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
