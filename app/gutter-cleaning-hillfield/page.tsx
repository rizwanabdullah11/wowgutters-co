import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-hillfield/'
const pageData = suburbPages['hillfield']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Hillfield Solihull | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Hillfield, Solihull (B91). Town centre & Touchwood area specialist. From £55. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Hillfield Solihull | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Hillfield, Solihull (B91). Touchwood area. From £55. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/hillfield.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Hillfield Solihull' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Hillfield Solihull | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Hillfield B91. From £55. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/hillfield.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Hillfield',
  description: 'Our 4-step professional gutter cleaning process for Hillfield, Solihull properties near Touchwood and Malvern Park',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, checking for damage on Hillfield\'s 1930s-70s semis and detached homes near Solihull town centre.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system we clear all leaves, moss and debris from every section of your guttering — no ladders against your brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely away from your Hillfield property, with particular attention to aging uPVC systems on tree-lined residential streets.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, providing a full condition report — ideal for Hillfield\'s well-presented family homes and town-centre properties.' },
  ],
}

export default function HillfieldPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Hillfield"
        url={URL_PATH}
        priceFrom={55}
        priceTo={130}
        nearbyAreas={['Solihull', 'Olton', 'Shirley', 'Monkspath']}
        geo={{ latitude: 52.417, longitude: -1.773 }}
        postcodes={['B91']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
