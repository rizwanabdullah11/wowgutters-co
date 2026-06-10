import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-cotteridge/'
const pageData = suburbPages['cotteridge']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Cotteridge Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Cotteridge, Birmingham (B30). 1930s semis & post-war homes, no ladders, vacuum system, before & after photos. From \u00a350. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Cotteridge Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Cotteridge, Birmingham (B30). No ladders, vacuum system, before & after photos. From \u00a350. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/cotteridge.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd \u2014 Gutter Cleaning Cotteridge Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Cotteridge Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Cotteridge B30. From \u00a350. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/cotteridge.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Cotteridge',
  description: 'Our 4-step professional gutter cleaning process for Cotteridge, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern for Cotteridge\'s 1930s and post-war properties.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris \u2014 leaves, moss, silt, bird debris \u2014 from ground level directly into a sealed collection unit.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed \u2014 honestly, without pressure.' },
  ],
}

export default function CotteridgePage() {
  return (
    <>
      <LocalBusinessSchema
        city="Cotteridge"
        url={URL_PATH}
        priceFrom={50}
        priceTo={115}
        nearbyAreas={['Bournville', 'Kings Norton', 'Stirchley', 'Selly Oak', 'Birmingham']}
        geo={{ latitude: 52.4200, longitude: -1.9300 }}
        postcodes={['B30']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
