import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-castle-bromwich/'
const pageData = suburbPages['castle-bromwich']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Castle Bromwich Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Castle Bromwich, Birmingham (B34, B36). Semis & detached homes, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Castle Bromwich Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Castle Bromwich (B34, B36). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/castle-bromwich.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Castle Bromwich Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Castle Bromwich Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Castle Bromwich B34. From £50. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/castle-bromwich.jpg'],
  },
}

export default function CastleBromwichPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Castle Bromwich"
        url={URL_PATH}
        priceFrom={50}
        priceTo={115}
        nearbyAreas={['Chelmsley Wood', 'Stechford', 'Birmingham', 'Solihull', 'Yardley']}
        geo={{ latitude: 52.505, longitude: -1.79 }}
        postcodes={['B34', 'B36']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
