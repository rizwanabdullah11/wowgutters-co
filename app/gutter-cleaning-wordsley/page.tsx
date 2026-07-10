import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-wordsley/'
const pageData = suburbPages.wordsley

export const metadata: Metadata = {
  title: 'Gutter Cleaning Wordsley Stourbridge | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Wordsley, Stourbridge (DY8). Georgian & Victorian cottages, no ladders, vacuum system, before & after photos. From £45. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Wordsley Stourbridge | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Wordsley, Stourbridge (DY8). No ladders, vacuum system, before & after photos. From £45. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/wordsley.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Wordsley Stourbridge' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Wordsley Stourbridge | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Wordsley DY8. From £45. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/wordsley.jpg'],
  },
}

const wordsleyHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Wordsley',
  description: 'Our 4-step professional gutter cleaning process for Wordsley, Stourbridge properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern. For Wordsley\'s historic cottages and period homes we pay special attention to original cast iron gutter systems.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit. No mess left in your garden or on your Wordsley property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function WordsleyPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Wordsley"
        url={URL_PATH}
        priceFrom={45}
        priceTo={115}
        nearbyAreas={['Stourbridge', 'Kingswinford', 'Wollaston', 'Brierley Hill', 'Amblecote', 'Norton']}
        geo={{ latitude: 52.472, longitude: -2.113 }}
        postcodes={['DY8', 'DY8 0', 'DY8 3', 'DY8 4']}
        faqs={pageData.faqs}
      />
      <JsonLd data={wordsleyHowToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
