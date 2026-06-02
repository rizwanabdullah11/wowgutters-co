import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-roughley/'
const pageData = suburbPages.roughley

export const metadata: Metadata = {
  title: 'Gutter Cleaning Roughley Sutton Coldfield | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Roughley, Sutton Coldfield (B74, B75). Detached & large semi-detached homes, no ladders, vacuum system, before & after photos. From £55. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Roughley Sutton Coldfield | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Roughley, Sutton Coldfield (B74). No ladders, vacuum system, before & after photos. From £55. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/roughley.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Roughley Sutton Coldfield' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Roughley Sutton Coldfield | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Roughley B74. From £55. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/roughley.jpg'],
  },
}

export default function RoughleyPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Roughley"
        url={URL_PATH}
        priceFrom={55}
        priceTo={125}
        nearbyAreas={['Sutton Coldfield', 'Four Oaks', 'Birmingham', 'Mere Green', 'Streetly']}
        geo={{ latitude: 52.57, longitude: -1.84 }}
        postcodes={['B74', 'B75']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
