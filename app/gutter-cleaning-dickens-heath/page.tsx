import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-dickens-heath/'
const pageData = suburbPages['dickens-heath']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Dickens Heath Solihull | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Dickens Heath, Solihull (B90). Historic village specialist. From £60. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Dickens Heath Solihull | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Dickens Heath, Solihull (B90). Historic village. From £60. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/dickens-heath.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Dickens Heath Solihull' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Dickens Heath Solihull | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Dickens Heath B90. From £60. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/dickens-heath.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Dickens Heath',
  description: 'Our 4-step professional gutter cleaning process for Dickens Heath, Solihull properties near the village green and Blythe Valley',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, checking the unique rooflines of Dickens Heath\'s character village homes and modern executive properties near the Blythe Valley business park.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system we clear all leaves, moss and debris from every section of your guttering — protecting character brickwork and modern finishes alike.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely away from your Dickens Heath property, with particular attention to the village\'s period homes with aging cast iron gutter systems.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, providing a full condition report with honest recommendations — essential for Dickens Heath\'s desirable village properties.' },
  ],
}

export default function DickensHeathPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Dickens Heath"
        url={URL_PATH}
        priceFrom={60}
        priceTo={150}
        nearbyAreas={['Solihull', 'Shirley', 'Blythe Valley', 'Cheswick Green']}
        geo={{ latitude: 52.396, longitude: -1.790 }}
        postcodes={['B90']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
