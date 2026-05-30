import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-west-heath/'
const pageData = suburbPages['west-heath']

export const metadata: Metadata = {
  title: 'Gutter Cleaning West Heath, Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in West Heath, Birmingham (B31). Interwar & post-war homes, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning West Heath, Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in West Heath, Birmingham (B31). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/west-heath.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning West Heath Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning West Heath, Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in West Heath B31. From £50. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/west-heath.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Cleans Your Gutters in West Heath',
  description: 'Our 4-step professional gutter cleaning process for West Heath, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern. For West Heath\'s interwar and post-war properties we also check original and early-replacement uPVC systems for joint wear.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit. No mess left in your garden or on your West Heath property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function WestHeathPage() {
  return (
    <>
      <LocalBusinessSchema
        city="West Heath"
        url={URL_PATH}
        priceFrom={50}
        priceTo={115}
        nearbyAreas={['Northfield', 'Longbridge', 'Kings Norton', 'Cofton Hackett', 'Birmingham']}
        geo={{ latitude: 52.4010, longitude: -1.9620 }}
        postcodes={['B31', 'B31 3', 'B31 4']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
