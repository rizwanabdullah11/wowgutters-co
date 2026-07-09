import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-bell-green/'
const pageData = suburbPages['bell-green']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Bell Green Coventry | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Bell Green, Coventry (CV2, CV6). Post-war semis, council estates, no ladders, vacuum system, before & after photos. From £45. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Bell Green Coventry | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Bell Green, Coventry (CV2, CV6). No ladders, vacuum system, before & after photos. From £45. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/bell-green.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Bell Green Coventry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Bell Green Coventry | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Bell Green Coventry CV2, CV6. From £45. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/bell-green.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Bell Green',
  description: 'Our 4-step professional gutter cleaning process for Bell Green, Coventry properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern. For Bell Green\'s post-war semis and council estate properties we check aging uPVC systems and look for joint wear common in CV2 and CV6 properties.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit. No mess left in your garden or on your Bell Green property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function BellGreenPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Bell Green"
        url={URL_PATH}
        priceFrom={45}
        priceTo={110}
        nearbyAreas={['Coventry', 'Bedworth', 'Nuneaton', 'Foleshill', 'Longford']}
        geo={{ latitude: 52.455, longitude: -1.480 }}
        postcodes={['CV2', 'CV6']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
