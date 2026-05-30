import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-digbeth/'
const pageData = suburbPages['digbeth']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Digbeth Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Digbeth, Birmingham (B5, B9, B11, B12). Historic warehouses & conversions, no ladders, vacuum system, before & after photos. From \u00a350. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Digbeth Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Digbeth, Birmingham (B5, B9, B11, B12). No ladders, vacuum system, before & after photos. From \u00a350. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/digbeth.jpg', width: 1200, height: 630, alt: 'WOW Gutters \u2014 Gutter Cleaning Digbeth Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Digbeth Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Digbeth B5, B9, B11, B12. From \u00a350. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/digbeth.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Cleans Your Gutters in Digbeth',
  description: 'Our 4-step professional gutter cleaning process for Digbeth, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern for Digbeth\'s historic industrial buildings.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris \u2014 leaves, moss, silt, bird debris \u2014 from ground level directly into a sealed collection unit.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed \u2014 honestly, without pressure.' },
  ],
}

export default function DigbethPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Digbeth"
        url={URL_PATH}
        priceFrom={50}
        priceTo={110}
        nearbyAreas={['Birmingham', 'Bordesley Green', 'Small Heath', 'Sparkbrook', 'Deritend']}
        geo={{ latitude: 52.4750, longitude: -1.8800 }}
        postcodes={['B5', 'B9', 'B11', 'B12']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
