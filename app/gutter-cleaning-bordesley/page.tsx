import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-bordesley/'
const pageData = suburbPages['bordesley']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Bordesley Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Bordesley, Birmingham (B9). Victorian terraces near Grand Union Canal, no ladders, vacuum system, before & after photos. From \u00a340. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Bordesley Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Bordesley, Birmingham (B9). No ladders, vacuum system, before & after photos. From \u00a340. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/bordesley.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd \u2014 Gutter Cleaning Bordesley Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Bordesley Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Bordesley B9. From \u00a340. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/bordesley.jpg'],
  },
}

const bordesleyHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Bordesley',
  description: 'Our 4-step professional gutter cleaning process for Bordesley, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages and damaged sections. For Bordesley\'s Victorian terraces we pay particular attention to aging cast iron guttering and canal-side moisture conditions.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris \u2014 leaves, moss, silt, bird debris \u2014 from ground level directly into a sealed collection unit. No mess left in your garden or on your Bordesley property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. For Bordesley\'s Victorian terraces we also flag any repairs needed on period guttering \u2014 honestly, without pressure.' },
  ],
}

export default function BordesleyPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Bordesley"
        url={URL_PATH}
        priceFrom={40}
        priceTo={100}
        nearbyAreas={['Small Heath', 'Bordesley Green', 'Digbeth', 'Saltley', 'Nechells', 'Sparkbrook']}
        geo={{ latitude: 52.475, longitude: -1.865 }}
        postcodes={['B9', 'B9 4', 'B9 5', 'B9 9']}
        faqs={pageData.faqs}
      />
      <JsonLd data={bordesleyHowToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
