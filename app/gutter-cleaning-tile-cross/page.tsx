import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-tile-cross/'
const pageData = suburbPages['tile-cross']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Tile Cross Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Tile Cross, Birmingham (B33). 1930s semis & post-war homes, no ladders, vacuum system, before & after photos. From \u00a350. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Tile Cross Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Tile Cross, Birmingham (B33). No ladders, vacuum system, before & after photos. From \u00a350. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/tile-cross.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd \u2014 Gutter Cleaning Tile Cross Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Tile Cross Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Tile Cross B33. From \u00a350. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/tile-cross.jpg'],
  },
}

const tileCrossHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Tile Cross',
  description: 'Our 4-step professional gutter cleaning process for Tile Cross, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages and damaged sections. For Tile Cross\'s 1930s semis we pay particular attention to aging uPVC and cast-iron systems for signs of joint wear.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris \u2014 leaves, moss, silt, bird debris \u2014 from ground level directly into a sealed collection unit. No mess left in your garden or on your Tile Cross property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. For Tile Cross\'s 1930s and post-war homes we also flag any repairs needed on aging gutter systems \u2014 honestly, without pressure.' },
  ],
}

export default function TileCrossPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Tile Cross"
        url={URL_PATH}
        priceFrom={50}
        priceTo={120}
        nearbyAreas={['Stechford', 'Marston Green', 'Chelmsley Wood', 'Kitts Green', 'Hodge Hill', 'Yardley']}
        geo={{ latitude: 52.479, longitude: -1.790 }}
        postcodes={['B33', 'B33 0', 'B33 8', 'B33 9']}
        faqs={pageData.faqs}
      />
      <JsonLd data={tileCrossHowToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
