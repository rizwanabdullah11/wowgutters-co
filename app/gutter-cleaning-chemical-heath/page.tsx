import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-chemical-heath/'
const pageData = suburbPages['chemical-heath']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Chemical Heath Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Chemical Heath, Birmingham (B33, B8). Terraces & semis, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Chemical Heath Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Chemical Heath, Birmingham (B33). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/chemical-heath.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Chemical Heath Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Chemical Heath Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Chemical Heath B33. From £50. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/chemical-heath.jpg'],
  },
}

export default function ChemicalHeathPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Chemical Heath"
        url={URL_PATH}
        priceFrom={50}
        priceTo={105}
        nearbyAreas={['Stechford', 'Ward End', 'Bordesley Green', 'Birmingham', 'Small Heath']}
        geo={{ latitude: 52.478, longitude: -1.835 }}
        postcodes={['B33', 'B8']}
        faqs={pageData.faqs}
      />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
