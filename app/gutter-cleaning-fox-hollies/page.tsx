import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-fox-hollies/'
const pageData = suburbPages['fox-hollies']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Fox Hollies Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Fox Hollies, Birmingham (B26, B27). 1930s semis & terraces, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Fox Hollies Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Fox Hollies, Birmingham (B26). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/fox-hollies.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Fox Hollies Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Fox Hollies Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Fox Hollies B26. From £50. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/fox-hollies.jpg'],
  },
}

export default function FoxHolliesPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Fox Hollies"
        url={URL_PATH}
        priceFrom={50}
        priceTo={110}
        nearbyAreas={['Acocks Green', 'Yardley', 'Hall Green', 'Birmingham', 'Tyseley']}
        geo={{ latitude: 52.44, longitude: -1.81 }}
        postcodes={['B26', 'B27']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
