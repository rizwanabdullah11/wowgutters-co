import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-bickenhill/'
const pageData = suburbPages['bickenhill']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Bickenhill Solihull | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Bickenhill, Solihull (B92). NEC & Airport area specialist. From £55. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Bickenhill Solihull | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Bickenhill, Solihull (B92). NEC & Airport area. From £55. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/bickenhill.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Bickenhill Solihull' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Bickenhill Solihull | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Bickenhill B92. From £55. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/bickenhill.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Bickenhill',
  description: 'Our 4-step professional gutter cleaning process for Bickenhill, Solihull properties near the NEC and Airport',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, checking for damage on Bickenhill\'s period brickwork and modern homes near the NEC transport corridor.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system we clear all leaves, moss and debris from every section of your guttering — no ladders touch your property.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely away from your Bickenhill property, with particular attention to rural lane properties with longer drainage runs.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, providing a full condition report with honest recommendations — essential for Bickenhill\'s historic village homes and executive properties alike.' },
  ],
}

export default function BickenhillPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Bickenhill"
        url={URL_PATH}
        priceFrom={55}
        priceTo={150}
        nearbyAreas={['Solihull', 'Birmingham', 'Marston Green', 'Hampton-in-Arden']}
        geo={{ latitude: 52.448, longitude: -1.745 }}
        postcodes={['B92']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
