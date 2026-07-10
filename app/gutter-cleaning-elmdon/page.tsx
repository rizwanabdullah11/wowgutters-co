import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-elmdon/'
const pageData = suburbPages['elmdon']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Elmdon Solihull | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Elmdon, Solihull (B26). Elmdon Park & Airport area specialist. From £55. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Elmdon Solihull | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Elmdon, Solihull (B26). Elmdon Park area. From £55. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/elmdon.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Elmdon Solihull' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Elmdon Solihull | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Elmdon B26. From £55. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/elmdon.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Elmdon',
  description: 'Our 4-step professional gutter cleaning process for Elmdon, Solihull properties near Elmdon Park and Birmingham Airport',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, checking for damage on Elmdon\'s historic village cottages and 1930s semis near the airport flight path.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system we clear all leaves, moss and debris from every section of your guttering — no ladders against your brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely away from your Elmdon property, with extra attention to homes backing onto Elmdon Park\'s specimen trees.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, providing a full condition report with honest recommendations for Elmdon\'s period homes and modern airport-area properties.' },
  ],
}

export default function ElmdonPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Elmdon"
        url={URL_PATH}
        priceFrom={55}
        priceTo={120}
        nearbyAreas={['Solihull', 'Birmingham', 'Sheldon', 'Marston Green']}
        geo={{ latitude: 52.445, longitude: -1.760 }}
        postcodes={['B26']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
