import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-rotton-park/'
const pageData = suburbPages['rotton-park']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Rotten Park Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Rotten Park, Birmingham (B16). Victorian terraces near Edgbaston Reservoir, no ladders, vacuum system, before & after photos. From \u00a345. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Rotten Park Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Rotten Park, Birmingham (B16). No ladders, vacuum system, before & after photos. From \u00a345. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/rotton-park.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd \u2014 Gutter Cleaning Rotten Park Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Rotten Park Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Rotten Park B16. From \u00a345. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/rotton-park.jpg'],
  },
}

const rottonParkHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Rotten Park',
  description: 'Our 4-step professional gutter cleaning process for Rotten Park, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages and damaged sections. For Rotten Park\'s canalside properties we pay close attention to moisture-related gutter wear and the heavy leaf fall from Edgbaston Reservoir trees.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris \u2014 leaves, moss, silt, bird debris \u2014 from ground level directly into a sealed collection unit. No mess left in your garden or on your Rotten Park property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. For Rotten Park\'s Victorian terraces near the canal we flag any repairs needed \u2014 honestly, without pressure.' },
  ],
}

export default function RottenParkPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Rotten Park"
        url={URL_PATH}
        priceFrom={45}
        priceTo={110}
        nearbyAreas={['Ladywood', 'Edgbaston', 'Jewellery Quarter', 'Lee Bank', 'Winson Green', 'Hockley']}
        geo={{ latitude: 52.475, longitude: -1.918 }}
        postcodes={['B16', 'B16 0', 'B16 8', 'B16 9']}
        faqs={pageData.faqs}
      />
      <JsonLd data={rottonParkHowToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
