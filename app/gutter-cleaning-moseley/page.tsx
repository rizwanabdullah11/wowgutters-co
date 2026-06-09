import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-moseley/'
const pageData = suburbPages.moseley

export const metadata: Metadata = {
  title: 'Gutter Cleaning Moseley Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Moseley, Birmingham (B13). Victorian & Edwardian homes, no ladders, vacuum system, before & after photos. From £55. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Moseley Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Moseley, Birmingham (B13). No ladders, vacuum system, before & after photos. From £55. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/moseley.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Moseley Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Moseley Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Moseley B13. From £55. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/moseley.jpg'],
  },
}

const moseleyHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Moseley',
  description: 'Our 4-step professional gutter cleaning process for Moseley, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern. For Moseley\'s period properties we also check original cast iron and early uPVC systems for joint wear.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit. No mess left in your garden or on your Moseley property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function MoseleyPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Moseley"
        url={URL_PATH}
        priceFrom={55}
        priceTo={140}
        nearbyAreas={['Kings Heath', 'Balsall Heath', 'Sparkhill', 'Stirchley', 'Edgbaston', 'Hall Green']}
        geo={{ latitude: 52.4479, longitude: -1.8831 }}
        postcodes={['B13', 'B13 0', 'B13 8', 'B13 9']}
        faqs={pageData.faqs}
      />
      <JsonLd data={moseleyHowToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
