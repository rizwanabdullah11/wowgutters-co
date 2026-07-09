import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-green-lane/'
const pageData = suburbPages['green-lane']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Green Lane Coventry | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Green Lane, Coventry (CV3, CV6). Victorian terraces, post-war semis, no ladders, vacuum system, before & after photos. From £45. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Green Lane Coventry | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Green Lane, Coventry (CV3, CV6). No ladders, vacuum system, before & after photos. From £45. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/green-lane.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Green Lane Coventry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Green Lane Coventry | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Green Lane Coventry CV3, CV6. From £45. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/green-lane.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Green Lane',
  description: 'Our 4-step professional gutter cleaning process for Green Lane, Coventry properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern. For Green Lane\'s diverse housing stock we check cast iron and uPVC systems alike.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt — from ground level directly into a sealed collection unit. No mess in your garden or on your property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function GreenLanePage() {
  return (
    <>
      <LocalBusinessSchema
        city="Green Lane"
        url={URL_PATH}
        priceFrom={45}
        priceTo={110}
        nearbyAreas={['Coventry', 'Walsgrave', 'Binley', 'Stoke', 'Wood End']}
        geo={{ latitude: 52.430, longitude: -1.475 }}
        postcodes={['CV3', 'CV6']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
