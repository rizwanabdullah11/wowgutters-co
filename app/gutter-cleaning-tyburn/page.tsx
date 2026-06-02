import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-tyburn/'
const pageData = suburbPages.tyburn

export const metadata: Metadata = {
  title: 'Gutter Cleaning Tyburn Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Tyburn, Birmingham (B35). Post-war estates & semis, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Tyburn Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Tyburn, Birmingham (B35). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/tyburn.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Tyburn Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Tyburn Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Tyburn B35. From £50. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/tyburn.jpg'],
  },
}

export default function TyburnPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Tyburn"
        url={URL_PATH}
        priceFrom={50}
        priceTo={110}
        nearbyAreas={['Castle Vale', 'Erdington', 'Birmingham', 'Minworth', 'Walmley']}
        geo={{ latitude: 52.515, longitude: -1.79 }}
        postcodes={['B35']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
