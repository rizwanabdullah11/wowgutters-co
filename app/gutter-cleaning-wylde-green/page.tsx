import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-wylde-green/'
const pageData = suburbPages['wylde-green']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Wylde Green, Sutton Coldfield, Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Wylde Green, Sutton Coldfield (B73). Edwardian & detached homes, no ladders, vacuum system, before & after photos. From £60. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Wylde Green, Sutton Coldfield, Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Wylde Green, Sutton Coldfield (B73). No ladders, vacuum system, before & after photos. From £60. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/wylde-green.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Wylde Green, Sutton Coldfield, Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Wylde Green, Sutton Coldfield, Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Wylde Green B73. From £60. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/wylde-green.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Wylde Green',
  description: 'Our 4-step professional gutter cleaning process for Wylde Green, Sutton Coldfield properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern. For Wylde Green\'s Edwardian and period properties we also check original cast iron and early uPVC systems for joint wear.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit. No mess left in your garden or on your Wylde Green property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function WyldeGreenPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Wylde Green"
        url={URL_PATH}
        priceFrom={60}
        priceTo={150}
        nearbyAreas={['Sutton Coldfield', 'Boldmere', 'Four Oaks', 'Erdington', 'Birmingham']}
        geo={{ latitude: 52.5370, longitude: -1.8310 }}
        postcodes={['B73', 'B73 5', 'B73 6', 'B73 9']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
