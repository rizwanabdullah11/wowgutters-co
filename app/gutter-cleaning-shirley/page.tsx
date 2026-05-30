import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-shirley/'
const pageData = suburbPages['shirley']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Shirley, Solihull, Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Shirley, Solihull (B90). Victorian terraces, 1930s semis & executive homes, no ladders, vacuum system, before & after photos. From £55. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Shirley, Solihull, Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Shirley, Solihull (B90). No ladders, vacuum system, before & after photos. From £55. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/shirley.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Shirley, Solihull, Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Shirley, Solihull, Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Shirley B90. From £55. No ladders, before & after photos, 1-year guarantee. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/shirley.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Cleans Your Gutters in Shirley',
  description: 'Our 4-step professional gutter cleaning process for Shirley, Solihull properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit. No mess left in your garden or on your Shirley property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function ShirleyPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Shirley"
        url={URL_PATH}
        priceFrom={55}
        priceTo={140}
        nearbyAreas={['Solihull', 'Olton', 'Hall Green', 'Yardley Wood', 'Cheswick Green', 'Birmingham']}
        geo={{ latitude: 52.4065, longitude: -1.8566 }}
        postcodes={['B90']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
