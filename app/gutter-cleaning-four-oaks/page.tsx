import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-four-oaks/'
const pageData = suburbPages['four-oaks']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Four Oaks Sutton Coldfield | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Four Oaks, Sutton Coldfield (B74, B75). Large detached homes, no ladders, vacuum system, before & after photos. From \u00a360. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Four Oaks Sutton Coldfield | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Four Oaks, Sutton Coldfield (B74, B75). No ladders, vacuum system, before & after photos. From \u00a360. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/four-oaks.jpg', width: 1200, height: 630, alt: 'WOW Gutters \u2014 Gutter Cleaning Four Oaks Sutton Coldfield' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Four Oaks Sutton Coldfield | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Four Oaks B74, B75. From \u00a360. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/four-oaks.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Cleans Your Gutters in Four Oaks',
  description: 'Our 4-step professional gutter cleaning process for Four Oaks, Sutton Coldfield properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern for Four Oaks\' large detached properties.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris \u2014 leaves, moss, silt, bird debris \u2014 from ground level directly into a sealed collection unit.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed \u2014 honestly, without pressure.' },
  ],
}

export default function FourOaksPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Four Oaks"
        url={URL_PATH}
        priceFrom={60}
        priceTo={140}
        nearbyAreas={['Sutton Coldfield', 'Little Aston', 'Mere Green', 'Birmingham', 'Lichfield']}
        geo={{ latitude: 52.5650, longitude: -1.8450 }}
        postcodes={['B74', 'B75']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
