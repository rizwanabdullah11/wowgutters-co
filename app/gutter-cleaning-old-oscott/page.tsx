import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-old-oscott/'
const pageData = suburbPages['old-oscott']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Old Oscott Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Old Oscott, Birmingham (B73). 1950s–70s semis & detached homes, no ladders, vacuum system, before & after photos. From £55. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Old Oscott Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Old Oscott, Birmingham (B73). No ladders, vacuum system, before & after photos. From £55. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/old-oscott.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Old Oscott Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Old Oscott Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Old Oscott B73. From £55. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/old-oscott.jpg'],
  },
}

export default function OldOscottPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Old Oscott"
        url={URL_PATH}
        priceFrom={55}
        priceTo={115}
        nearbyAreas={['Sutton Coldfield', 'Erdington', 'Birmingham', 'Walmley', 'Kingstanding']}
        geo={{ latitude: 52.545, longitude: -1.84 }}
        postcodes={['B73']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
