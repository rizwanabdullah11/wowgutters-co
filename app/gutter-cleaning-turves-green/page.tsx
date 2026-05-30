import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-turves-green/'
const pageData = suburbPages['turves-green']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Turves Green, Birmingham | WOW Gutters Ltd',
  description: 'Gutter cleaning in Turves Green, Birmingham (B31). Maisonettes, tower blocks & semis, no ladders, vacuum system, before & after photos. From £45. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Turves Green, Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Turves Green, Birmingham (B31). No ladders, vacuum system, before & after photos. From £45. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/turves-green.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Turves Green Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Turves Green, Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Turves Green B31. From £45. No ladders, before & after photos, 1-year guarantee. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/turves-green.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Cleans Your Gutters in Turves Green',
  description: 'Our 4-step professional gutter cleaning process for Turves Green, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit. No mess left in your garden or on your Turves Green property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function TurvesGreenPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Turves Green"
        url={URL_PATH}
        priceFrom={45}
        priceTo={100}
        nearbyAreas={['West Heath', 'Northfield', 'Longbridge', 'Birmingham', 'Kings Norton', 'Rubery']}
        geo={{ latitude: 52.4030, longitude: -1.9650 }}
        postcodes={['B31']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
