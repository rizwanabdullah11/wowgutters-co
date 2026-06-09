import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-mere-green/'
const pageData = suburbPages['mere-green']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Mere Green, Sutton Coldfield, Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Mere Green, Sutton Coldfield (B75). Executive homes, 1930s semis, no ladders, vacuum system, before & after photos. From £55. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Mere Green, Sutton Coldfield, Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Mere Green, Sutton Coldfield (B75). No ladders, vacuum system, before & after photos. From £55. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/mere-green.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Mere Green, Sutton Coldfield, Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Mere Green, Sutton Coldfield, Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Mere Green B75. From £55. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/mere-green.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Mere Green',
  description: 'Our 4-step professional gutter cleaning process for Mere Green, Sutton Coldfield properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern. For Mere Green\'s executive homes we check complex rooflines thoroughly.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function MereGreenPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Mere Green"
        url={URL_PATH}
        priceFrom={55}
        priceTo={140}
        nearbyAreas={['Sutton Coldfield', 'Four Oaks', 'Little Aston', 'Birmingham', 'Streetly']}
        geo={{ latitude: 52.5590, longitude: -1.8360 }}
        postcodes={['B75']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
