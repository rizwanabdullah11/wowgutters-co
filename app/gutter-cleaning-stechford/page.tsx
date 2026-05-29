import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-stechford/'
const pageData = suburbPages['stechford']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Stechford, Birmingham | WOW Gutters Ltd',
  description: 'Gutter cleaning in Stechford, Birmingham (B33). Victorian terraces & 1930s semis, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Stechford, Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Stechford, Birmingham (B33). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/stechford.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Stechford Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Stechford, Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Stechford B33. From £50. No ladders, before & after photos, 1-year guarantee. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/stechford.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Cleans Your Gutters in Stechford',
  description: 'Our 4-step professional gutter cleaning process for Stechford, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit. No mess left in your garden or on your Stechford property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function StechfordPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Stechford"
        url={URL_PATH}
        priceFrom={50}
        priceTo={110}
        nearbyAreas={['Yardley', 'Shard End', 'Acocks Green', 'Birmingham', 'Sheldon', 'Hodge Hill']}
        geo={{ latitude: 52.4817, longitude: -1.8017 }}
        postcodes={['B33']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
