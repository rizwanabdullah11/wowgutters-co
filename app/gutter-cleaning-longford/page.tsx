import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-longford/'
const pageData = suburbPages.longford

export const metadata: Metadata = {
  title: 'Gutter Cleaning Longford Coventry | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Longford, Coventry (CV6). Homes near Coventry Arena & Longford Park, no ladders, vacuum system from \u00a345. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Longford Coventry | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Longford, Coventry (CV6). Arena & park area homes. From \u00a345. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/longford.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd \u2014 Gutter Cleaning Longford Coventry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Longford Coventry | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Longford CV6. From \u00a345. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/longford.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Longford',
  description: 'Our 4-step professional gutter cleaning process for Longford, Coventry properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages and damaged sections. For Longford\'s interwar semis and arena-area homes we check for wind-blown debris from the M6 corridor and leaf compaction from park-side trees.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris \u2014 leaves, moss, silt \u2014 from ground level directly into a sealed collection unit. No mess left in your garden or on paths.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed \u2014 honestly, without pressure.' },
  ],
}

export default function LongfordPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Longford"
        url={URL_PATH}
        priceFrom={45}
        priceTo={110}
        nearbyAreas={['Coventry', 'Holbrooks', 'Wood End', 'Bell Green', 'Bedworth', 'Foleshill']}
        geo={{ latitude: 52.440, longitude: -1.460 }}
        postcodes={['CV6', 'CV6 1', 'CV6 3', 'CV6 5', 'CV6 6']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}