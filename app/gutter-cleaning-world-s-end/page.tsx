import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-world-s-end/'
const pageData = suburbPages['world-s-end']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Worlds End Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Worlds End, Birmingham (B8, B10). Victorian & post-war terraces, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Worlds End Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Worlds End, Birmingham (B8). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/world-s-end.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Worlds End Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Worlds End Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Worlds End B8. From £50. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/world-s-end.jpg'],
  },
}

export default function WorldsEndPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Worlds End"
        url={URL_PATH}
        priceFrom={50}
        priceTo={105}
        nearbyAreas={['Alum Rock', 'Small Heath', 'Birmingham', 'Washwood Heath', 'Saltley']}
        geo={{ latitude: 52.48, longitude: -1.845 }}
        postcodes={['B8', 'B10']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
