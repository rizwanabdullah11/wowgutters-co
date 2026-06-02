import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-hamstead/'
const pageData = suburbPages['hamstead']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Hamstead Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Hamstead, Birmingham (B43, B44). 1930s semis & post-war homes, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Hamstead Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Hamstead, Birmingham (B43). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/hamstead.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Hamstead Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Hamstead Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Hamstead B43. From £50. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/hamstead.jpg'],
  },
}

export default function HamsteadPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Hamstead"
        url={URL_PATH}
        priceFrom={50}
        priceTo={110}
        nearbyAreas={['Great Barr', 'Kingstanding', 'Perry Barr', 'Birmingham', 'Walsall']}
        geo={{ latitude: 52.54, longitude: -1.93 }}
        postcodes={['B43', 'B44']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
