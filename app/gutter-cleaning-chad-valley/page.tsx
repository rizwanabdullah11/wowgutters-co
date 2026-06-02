import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-chad-valley/'
const pageData = suburbPages['chad-valley']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Chad Valley Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Chad Valley, Birmingham (B44, B42). 1930s semis & post-war properties, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Chad Valley Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Chad Valley, Birmingham (B44). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/chad-valley.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Chad Valley Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Chad Valley Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Chad Valley B44. From £50. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/chad-valley.jpg'],
  },
}

export default function ChadValleyPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Chad Valley"
        url={URL_PATH}
        priceFrom={50}
        priceTo={110}
        nearbyAreas={['Kingstanding', 'Perry Barr', 'Great Barr', 'Birmingham', 'Hamstead']}
        geo={{ latitude: 52.53, longitude: -1.9 }}
        postcodes={['B44', 'B42']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
