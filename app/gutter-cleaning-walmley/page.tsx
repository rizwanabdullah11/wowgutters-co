import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-walmley/'
const pageData = suburbPages.walmley

export const metadata: Metadata = {
  title: 'Gutter Cleaning Walmley Sutton Coldfield | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Walmley, Sutton Coldfield (B76). Detached & semi-detached homes, no ladders, vacuum system, before & after photos. From £55. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Walmley Sutton Coldfield | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Walmley, Sutton Coldfield (B76). No ladders, vacuum system, before & after photos. From £55. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/walmley.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Walmley Sutton Coldfield' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Walmley Sutton Coldfield | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Walmley B76. From £55. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/walmley.jpg'],
  },
}

export default function WalmleyPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Walmley"
        url={URL_PATH}
        priceFrom={55}
        priceTo={120}
        nearbyAreas={['Sutton Coldfield', 'Minworth', 'Birmingham', 'Erdington', 'Castle Bromwich']}
        geo={{ latitude: 52.54, longitude: -1.79 }}
        postcodes={['B76']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
