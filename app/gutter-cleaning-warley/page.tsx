import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-warley/'
const pageData = suburbPages.warley

export const metadata: Metadata = {
  title: 'Gutter Cleaning Warley | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Warley, Oldbury (B68). 1930s semis & post-war homes, ground-level vacuum, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Warley | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Warley, Oldbury (B68). 1930s semis & post-war homes, vacuum system, before & after photos. From £50. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/warley.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd \u2014 Gutter Cleaning Warley' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Warley | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Warley B68. From £50. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/warley.jpg'],
  },
}

const warleyHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Warley',
  description: 'Our 4-step professional gutter cleaning process for Warley, Oldbury properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying blockages, damaged sections and areas of concern. For Warley\u2019s 1930s semis we check aging uPVC joints and cast iron systems for wear.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris \u2014 leaves, moss, silt, bird debris \u2014 from ground level directly into a sealed collection unit. No mess on your drive or in your garden.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. Blocked downpipes are cleared as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean and send you the images. We also flag any damage or repairs needed \u2014 honestly, without pressure.' },
  ],
}

export default function WarleyPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Warley"
        url={URL_PATH}
        priceFrom={50}
        priceTo={110}
        nearbyAreas={['Oldbury', 'Bearwood', 'Smethwick', 'Quinton', 'Harborne', 'Halesowen']}
        geo={{ latitude: 52.485, longitude: -1.998 }}
        postcodes={['B68']}
        faqs={pageData.faqs}
      />
      <JsonLd data={warleyHowToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
