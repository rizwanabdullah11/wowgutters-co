import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-hall-green/'
const pageData = suburbPages['hall-green']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Hall Green Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Hall Green, Birmingham (B28). Established suburb, no ladders, vacuum system, before & after photos. From \u00a350. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Hall Green Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Hall Green, Birmingham (B28). No ladders, vacuum system, before & after photos. From \u00a350. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/hall-green.jpg', width: 1200, height: 630, alt: 'WOW Gutters \u2014 Gutter Cleaning Hall Green Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Hall Green Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Hall Green B28. From \u00a350. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/hall-green.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Cleans Your Gutters in Hall Green',
  description: 'Our 4-step professional gutter cleaning process for Hall Green, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern for Hall Green\'s 1930s and post-war properties.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris \u2014 leaves, moss, silt, bird debris \u2014 from ground level directly into a sealed collection unit.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed \u2014 honestly, without pressure.' },
  ],
}

export default function HallGreenPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Hall Green"
        url={URL_PATH}
        priceFrom={50}
        priceTo={120}
        nearbyAreas={['Moseley', 'Acocks Green', 'Yardley Wood', 'Birmingham', 'Kings Heath']}
        geo={{ latitude: 52.4333, longitude: -1.8417 }}
        postcodes={['B28']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
