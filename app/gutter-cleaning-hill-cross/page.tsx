import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-hill-cross/'
const pageData = suburbPages['hill-cross']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Hill Cross Sutton Coldfield | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Hill Cross, Sutton Coldfield (B73, B72). Detached & semi-detached homes, no ladders, vacuum system, before & after photos. From £55. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Hill Cross Sutton Coldfield | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Hill Cross, Sutton Coldfield (B73). No ladders, vacuum system, before & after photos. From £55. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/hill-cross.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Hill Cross Sutton Coldfield' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Hill Cross Sutton Coldfield | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Hill Cross B73. From £55. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/hill-cross.jpg'],
  },
}

export default function HillCrossPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Hill Cross"
        url={URL_PATH}
        priceFrom={55}
        priceTo={120}
        nearbyAreas={['Sutton Coldfield', 'Maney', 'Walmley', 'Birmingham', 'Erdington']}
        geo={{ latitude: 52.555, longitude: -1.82 }}
        postcodes={['B73', 'B72']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
