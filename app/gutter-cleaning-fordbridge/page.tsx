import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-fordbridge/'
const pageData = suburbPages['fordbridge']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Fordbridge Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Fordbridge, Birmingham (B37). 1960s/70s estate homes near Babbs Mill Lake, no ladders, vacuum system, before & after photos. From \u00a345. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Fordbridge Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Fordbridge, Birmingham (B37). No ladders, vacuum system, before & after photos. From \u00a345. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/fordbridge.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd \u2014 Gutter Cleaning Fordbridge Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Fordbridge Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Fordbridge B37. From \u00a345. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/fordbridge.jpg'],
  },
}

const fordbridgeHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Fordbridge',
  description: 'Our 4-step professional gutter cleaning process for Fordbridge, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, checking for blockages and damage. For Fordbridge\'s waterside properties near Babbs Mill Lake we also assess moisture-related wear on uPVC joints.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris \u2014 leaves, moss, silt, bird debris \u2014 from ground level directly into a sealed collection unit. No mess left in your garden or on your Fordbridge property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. For Fordbridge\'s estate homes near the River Cole we flag any debris-related issues \u2014 honestly, without pressure.' },
  ],
}

export default function FordbridgePage() {
  return (
    <>
      <LocalBusinessSchema
        city="Fordbridge"
        url={URL_PATH}
        priceFrom={45}
        priceTo={110}
        nearbyAreas={['Kingshurst', 'Chelmsley Wood', 'Marston Green', 'Smith\'s Wood', 'Castle Bromwich', 'Coleshill Heath']}
        geo={{ latitude: 52.492, longitude: -1.753 }}
        postcodes={['B37', 'B37 5', 'B37 6', 'B37 7']}
        faqs={pageData.faqs}
      />
      <JsonLd data={fordbridgeHowToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
