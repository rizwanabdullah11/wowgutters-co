import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-maney/'
const pageData = suburbPages.maney

export const metadata: Metadata = {
  title: 'Gutter Cleaning Maney Sutton Coldfield | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Maney, Sutton Coldfield (B72, B73). Victorian & Edwardian properties, no ladders, vacuum system, before & after photos. From £55. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Maney Sutton Coldfield | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Maney, Sutton Coldfield (B72). No ladders, vacuum system, before & after photos. From £55. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/maney.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Maney Sutton Coldfield' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Maney Sutton Coldfield | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Maney B72. From £55. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/maney.jpg'],
  },
}

export default function ManeyPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Maney"
        url={URL_PATH}
        priceFrom={55}
        priceTo={120}
        nearbyAreas={['Sutton Coldfield', 'Wylde Green', 'Birmingham', 'Erdington', 'Walmley']}
        geo={{ latitude: 52.56, longitude: -1.82 }}
        postcodes={['B72', 'B73']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
