import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-pensnett/'
const pageData = suburbPages.pensnett

export const metadata: Metadata = {
  title: 'Gutter Cleaning Pensnett | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Pensnett, Dudley (DY5). Interwar semis & modern homes, ground-level vacuum, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Pensnett | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Pensnett, Dudley (DY5). Interwar & modern homes, vacuum system, before & after photos. From £50. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/pensnett.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd \u2014 Gutter Cleaning Pensnett' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Pensnett | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Pensnett DY5. From £50. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/pensnett.jpg'],
  },
}

const pensnettHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Pensnett',
  description: 'Our 4-step professional gutter cleaning process for Pensnett, Dudley properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying blockages, damaged sections and areas of concern. For Pensnett\u2019s interwar properties we check aging uPVC and cast iron systems for joint wear.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris \u2014 leaves, moss, silt, bird debris \u2014 from ground level directly into a sealed unit. No mess left on your drive or in your garden.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. Blocked downpipes are cleared as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean and send you the images. We also flag any damage or repairs needed \u2014 honestly, without pressure.' },
  ],
}

export default function PensnettPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Pensnett"
        url={URL_PATH}
        priceFrom={50}
        priceTo={110}
        nearbyAreas={['Dudley', 'Kingswinford', 'Brierley Hill', 'Stourbridge', 'Wollaston', 'Sedgley']}
        geo={{ latitude: 52.498, longitude: -2.127 }}
        postcodes={['DY5']}
        faqs={pageData.faqs}
      />
      <JsonLd data={pensnettHowToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
