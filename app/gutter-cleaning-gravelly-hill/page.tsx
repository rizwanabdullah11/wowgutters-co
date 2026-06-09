import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-gravelly-hill/'
const pageData = suburbPages['gravelly-hill']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Gravelly Hill Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Gravelly Hill, Birmingham (B23, B24). 1930s semis, no ladders, vacuum system, before & after photos. From \u00a345. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Gravelly Hill Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Gravelly Hill, Birmingham (B23, B24). No ladders, vacuum system, before & after photos. From \u00a345. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/gravelly-hill.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd \u2014 Gutter Cleaning Gravelly Hill Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Gravelly Hill Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Gravelly Hill B23, B24. From \u00a345. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/gravelly-hill.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Gravelly Hill',
  description: 'Our 4-step professional gutter cleaning process for Gravelly Hill, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern for Gravelly Hill\'s 1930s properties.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris \u2014 leaves, moss, silt, bird debris \u2014 from ground level directly into a sealed collection unit.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed \u2014 honestly, without pressure.' },
  ],
}

export default function GravellyHillPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Gravelly Hill"
        url={URL_PATH}
        priceFrom={45}
        priceTo={110}
        nearbyAreas={['Erdington', 'Witton', 'Aston', 'Birmingham', 'Stockland Green']}
        geo={{ latitude: 52.5150, longitude: -1.8550 }}
        postcodes={['B23', 'B24']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
