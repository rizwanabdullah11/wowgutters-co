import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-weoley-hill/'
const pageData = suburbPages['weoley-hill']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Weoley Hill Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Weoley Hill, Birmingham (B29). Post-war semis & terraces, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Weoley Hill Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Weoley Hill, Birmingham (B29). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/weoley-hill.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Weoley Hill Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Weoley Hill Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Weoley Hill B29. From £50. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/weoley-hill.jpg'],
  },
}

export default function WeoleyHillPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Weoley Hill"
        url={URL_PATH}
        priceFrom={50}
        priceTo={110}
        nearbyAreas={['Selly Oak', 'Weoley Castle', 'Birmingham', 'Northfield', 'Harborne']}
        geo={{ latitude: 52.435, longitude: -1.945 }}
        postcodes={['B29']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
