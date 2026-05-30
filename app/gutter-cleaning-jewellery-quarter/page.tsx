import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-jewellery-quarter/'
const pageData = suburbPages['jewellery-quarter']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Jewellery Quarter Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in the Jewellery Quarter, Birmingham (B1, B3, B4, B18). Listed buildings, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Jewellery Quarter Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in the Jewellery Quarter, Birmingham (B1, B3, B4, B18). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/jewellery-quarter.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Jewellery Quarter Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Jewellery Quarter Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in the Jewellery Quarter B1, B3, B4, B18. From £50. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/jewellery-quarter.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Cleans Your Gutters in the Jewellery Quarter',
  description: 'Our 4-step professional gutter cleaning process for the Jewellery Quarter, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern for the Jewellery Quarter\'s historic properties.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function JewelleryQuarterPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Jewellery Quarter"
        url={URL_PATH}
        priceFrom={50}
        priceTo={110}
        nearbyAreas={['Birmingham', 'Hockley', 'Ladywood', 'Edgbaston', 'Lee Bank']}
        geo={{ latitude: 52.4850, longitude: -1.9150 }}
        postcodes={['B1', 'B3', 'B4', 'B18']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
