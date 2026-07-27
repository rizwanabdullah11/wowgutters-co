import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-ettingshall/'
const pageData = suburbPages.ettingshall

export const metadata: Metadata = {
  title: 'Gutter Cleaning Ettingshall Wolverhampton | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Ettingshall, Wolverhampton (WV2). Victorian & industrial heritage homes, no ladders, vacuum system, before & after photos. From £40. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Ettingshall Wolverhampton | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Ettingshall, Wolverhampton (WV2). No ladders, vacuum system, before & after photos. From £40. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/ettingshall.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Ettingshall Wolverhampton' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Ettingshall Wolverhampton | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Ettingshall WV2. From £40. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/ettingshall.jpg'],
  },
}

const ettingshallHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Ettingshall',
  description: 'Our 4-step professional gutter cleaning process for Ettingshall, Wolverhampton properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern. For Ettingshall\'s metalworkers\' terraces we check aging cast iron and early uPVC systems for joint wear and structural integrity.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit. No mess left in your garden or on your Ettingshall property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function EttingshallPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Ettingshall"
        url={URL_PATH}
        priceFrom={40}
        priceTo={100}
        nearbyAreas={['Wolverhampton', 'Bilston', 'Spring Vale', 'Coseley', 'Sedgley', 'Priestfield']}
        geo={{ latitude: 52.586, longitude: -2.070 }}
        postcodes={['WV2', 'WV4', 'WV2 0', 'WV4 4']}
        faqs={pageData.faqs}
      />
      <JsonLd data={ettingshallHowToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
