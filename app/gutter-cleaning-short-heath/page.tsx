import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-short-heath/'
const pageData = suburbPages['short-heath']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Short Heath Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Short Heath, Birmingham (B23, B24). Post-war semis & terraces, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Short Heath Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Short Heath, Birmingham (B23). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/short-heath.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Short Heath Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Short Heath Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Short Heath B23. From £50. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/short-heath.jpg'],
  },
}

export default function ShortHeathPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Short Heath"
        url={URL_PATH}
        priceFrom={50}
        priceTo={110}
        nearbyAreas={['Erdington', 'Sutton Coldfield', 'Birmingham', 'Pype Hayes', 'Kingstanding']}
        geo={{ latitude: 52.53, longitude: -1.84 }}
        postcodes={['B23', 'B24']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
