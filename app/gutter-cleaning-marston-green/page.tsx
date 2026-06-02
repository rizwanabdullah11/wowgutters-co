import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-marston-green/'
const pageData = suburbPages['marston-green']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Marston Green Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Marston Green, Birmingham (B37). Semis & detached homes, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Marston Green Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Marston Green, Birmingham (B37). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/marston-green.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Marston Green Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Marston Green Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Marston Green B37. From £50. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/marston-green.jpg'],
  },
}

export default function MarstonGreenPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Marston Green"
        url={URL_PATH}
        priceFrom={50}
        priceTo={115}
        nearbyAreas={['Chelmsley Wood', 'Birmingham', 'Solihull', 'Castle Bromwich', 'Coleshill']}
        geo={{ latitude: 52.47, longitude: -1.74 }}
        postcodes={['B37']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
