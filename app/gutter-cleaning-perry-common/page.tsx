import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-perry-common/'
const pageData = suburbPages['perry-common']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Perry Common Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Perry Common, Birmingham (B23, B24). Interwar semis, post-war homes, no ladders, vacuum system, before & after photos. From £45. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Perry Common Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Perry Common, Birmingham (B23, B24). No ladders, vacuum system, before & after photos. From £45. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/perry-common.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Perry Common Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Perry Common Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Perry Common B23/B24. From £45. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/perry-common.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Cleans Your Gutters in Perry Common',
  description: 'Our 4-step professional gutter cleaning process for Perry Common, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern. For Perry Common\'s interwar semis we pay particular attention to aging uPVC systems and check for joint wear.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit. No mess left in your garden or on your property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function PerryCommonPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Perry Common"
        url={URL_PATH}
        priceFrom={45}
        priceTo={105}
        nearbyAreas={['Erdington', 'Kingstanding', 'Perry Barr', 'Birmingham', 'Sutton Coldfield']}
        geo={{ latitude: 52.5350, longitude: -1.8500 }}
        postcodes={['B23', 'B24']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
