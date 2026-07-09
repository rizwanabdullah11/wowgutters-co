import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-pleck/'
const pageData = suburbPages.pleck

export const metadata: Metadata = {
  title: 'Gutter Cleaning Pleck Walsall | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Pleck, Walsall (WS2). Victorian terraces & interwar semis, no ladders, vacuum system, before & after photos. From £40. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Pleck Walsall | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Pleck, Walsall (WS2). No ladders, vacuum system, before & after photos. From £40. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/pleck.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Pleck Walsall' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Pleck Walsall | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Pleck WS2. From £40. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/pleck.jpg'],
  },
}

const pleckHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Pleck',
  description: 'Our 4-step professional gutter cleaning process for Pleck, Walsall properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern. For Pleck\'s Victorian terraces we also check aging cast iron and early uPVC systems for joint wear.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit. No mess left in your garden or on your Pleck property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function PleckPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Pleck"
        url={URL_PATH}
        priceFrom={40}
        priceTo={95}
        nearbyAreas={['Walsall', 'Caldmore', 'Alumwell', 'Bentley', 'Birchills', 'Blakenall']}
        geo={{ latitude: 52.583, longitude: -1.987 }}
        postcodes={['WS2', 'WS2 9', 'WS2 6', 'WS2 7']}
        faqs={pageData.faqs}
      />
      <JsonLd data={pleckHowToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
