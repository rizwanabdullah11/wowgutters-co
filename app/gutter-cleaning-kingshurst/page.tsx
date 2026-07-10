import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-kingshurst/'
const pageData = suburbPages['kingshurst']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Kingshurst Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Kingshurst, Birmingham (B37). 1960s/70s estate homes, no ladders, vacuum system, before & after photos. From \u00a345. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Kingshurst Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Kingshurst, Birmingham (B37). No ladders, vacuum system, before & after photos. From \u00a345. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/kingshurst.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd \u2014 Gutter Cleaning Kingshurst Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Kingshurst Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Kingshurst B37. From \u00a345. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/kingshurst.jpg'],
  },
}

const kingshurstHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Kingshurst',
  description: 'Our 4-step professional gutter cleaning process for Kingshurst, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, checking for blockages and damage. For Kingshurst\'s 1960s/70s estate housing we pay close attention to aging uPVC joints and the mature tree debris common across the B37 area.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris \u2014 leaves, moss, silt, bird debris \u2014 from ground level directly into a sealed collection unit. No mess left in your garden or on your Kingshurst property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. For Kingshurst\'s estate properties we also flag any repairs needed on original gutter systems \u2014 honestly, without pressure.' },
  ],
}

export default function KingshurstPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Kingshurst"
        url={URL_PATH}
        priceFrom={45}
        priceTo={110}
        nearbyAreas={['Chelmsley Wood', 'Fordbridge', 'Marston Green', 'Castle Bromwich', 'Smith\'s Wood']}
        geo={{ latitude: 52.488, longitude: -1.752 }}
        postcodes={['B37', 'B37 5', 'B37 6', 'B37 7']}
        faqs={pageData.faqs}
      />
      <JsonLd data={kingshurstHowToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
