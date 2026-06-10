import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-druids-heath/'
const pageData = suburbPages['druids-heath']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Druids Heath Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Druids Heath, Birmingham (B90, B91). 1930s semis & executive homes, no ladders, vacuum system, before & after photos. From \u00a350. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Druids Heath Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Druids Heath, Birmingham (B90, B91). No ladders, vacuum system, before & after photos. From \u00a350. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/druids-heath.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd \u2014 Gutter Cleaning Druids Heath Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Druids Heath Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Druids Heath B90, B91. From \u00a350. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/druids-heath.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Druids Heath',
  description: 'Our 4-step professional gutter cleaning process for Druids Heath, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern for Druids Heath\'s 1930s and post-war properties.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris \u2014 leaves, moss, silt, bird debris \u2014 from ground level directly into a sealed collection unit.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed \u2014 honestly, without pressure.' },
  ],
}

export default function DruidsHeathPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Druids Heath"
        url={URL_PATH}
        priceFrom={50}
        priceTo={115}
        nearbyAreas={['Solihull', 'Shirley', 'Hall Green', 'Yardley Wood', 'Birmingham']}
        geo={{ latitude: 52.4100, longitude: -1.8300 }}
        postcodes={['B90', 'B91']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
