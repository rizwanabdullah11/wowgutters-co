import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-glebe-farm/'
const pageData = suburbPages['glebe-farm']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Glebe Farm Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Glebe Farm, Birmingham (B90). Semis & detached homes, no ladders, vacuum system, before & after photos. From £55. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Glebe Farm Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Glebe Farm, Birmingham (B90). No ladders, vacuum system, before & after photos. From £55. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/glebe-farm.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Glebe Farm Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Glebe Farm Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Glebe Farm B90. From £55. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/glebe-farm.jpg'],
  },
}

export default function GlebeFarmPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Glebe Farm"
        url={URL_PATH}
        priceFrom={55}
        priceTo={115}
        nearbyAreas={['Shirley', 'Solihull', 'Hall Green', 'Birmingham', 'Yardley Wood']}
        geo={{ latitude: 52.42, longitude: -1.82 }}
        postcodes={['B90']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
