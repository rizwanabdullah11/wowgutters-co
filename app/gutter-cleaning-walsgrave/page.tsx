import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-walsgrave/'
const pageData = suburbPages.walsgrave

export const metadata: Metadata = {
  title: 'Gutter Cleaning Walsgrave Coventry | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Walsgrave, Coventry (CV2). Homes near University Hospital, no ladders, vacuum system, before & after photos. From \u00a345. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Walsgrave Coventry | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Walsgrave, Coventry (CV2). Hospital area, interwar semis, no ladders. From \u00a345. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/walsgrave.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd \u2014 Gutter Cleaning Walsgrave Coventry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Walsgrave Coventry | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Walsgrave CV2. From \u00a345. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/walsgrave.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Walsgrave',
  description: 'Our 4-step professional gutter cleaning process for Walsgrave, Coventry properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages and damaged sections. For Walsgrave\'s interwar semis and hospital-adjacent properties we check for debris build-up from the surrounding residential streets.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris \u2014 leaves, moss, silt \u2014 from ground level directly into a sealed collection unit. No mess left in your garden or on paths.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed \u2014 honestly, without pressure.' },
  ],
}

export default function WalsgravePage() {
  return (
    <>
      <LocalBusinessSchema
        city="Walsgrave"
        url={URL_PATH}
        priceFrom={45}
        priceTo={110}
        nearbyAreas={['Coventry', 'Wyken', 'Stoke', 'Binley', 'Wood End', 'Hinckley']}
        geo={{ latitude: 52.420, longitude: -1.430 }}
        postcodes={['CV2', 'CV2 1', 'CV2 2', 'CV2 3', 'CV2 5']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}