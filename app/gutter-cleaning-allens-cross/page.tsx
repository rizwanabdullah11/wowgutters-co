import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-allens-cross/'
const pageData = suburbPages['allens-cross']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Allens Cross Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Allens Cross, Birmingham (B32). Post-war semis & terraces, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Allens Cross Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Allens Cross, Birmingham (B32). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/allens-cross.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Allens Cross Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Allens Cross Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Allens Cross B32. From £50. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/allens-cross.jpg'],
  },
}

export default function AllensCrossPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Allens Cross"
        url={URL_PATH}
        priceFrom={50}
        priceTo={110}
        nearbyAreas={['Smethwick', 'Rowley Regis', 'Oldbury', 'Birmingham', 'Bearwood']}
        geo={{ latitude: 52.49, longitude: -1.97 }}
        postcodes={['B69', 'B66']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
