import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-king-edward/'
const pageData = suburbPages['king-edward']

export const metadata: Metadata = {
  title: 'Gutter Cleaning King Edward Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in King Edward, Birmingham (B1, B16). Victorian & Edwardian properties, no ladders, vacuum system, before & after photos. From £55. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning King Edward Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in King Edward, Birmingham (B1, B16). No ladders, vacuum system, before & after photos. From £55. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/king-edward.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning King Edward Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning King Edward Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in King Edward B1. From £55. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/king-edward.jpg'],
  },
}

export default function KingEdwardPage() {
  return (
    <>
      <LocalBusinessSchema
        city="King Edward"
        url={URL_PATH}
        priceFrom={55}
        priceTo={120}
        nearbyAreas={['Ladywood', 'Edgbaston', 'Birmingham', 'Harborne', 'Jewellery Quarter']}
        geo={{ latitude: 52.475, longitude: -1.92 }}
        postcodes={['B1', 'B16']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
