import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-compton/'
const pageData = suburbPages.compton

export const metadata: Metadata = {
  title: 'Gutter Cleaning Compton Wolverhampton | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Compton, Wolverhampton (WV3). Victorian & Edwardian villas, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Compton Wolverhampton | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Compton, Wolverhampton (WV3). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/compton.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Compton Wolverhampton' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Compton Wolverhampton | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Compton WV3. From £50. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/compton.jpg'],
  },
}

const comptonHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Compton',
  description: 'Our 4-step professional gutter cleaning process for Compton, Wolverhampton properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern. For Compton\'s grand Victorian and Edwardian villas we pay special attention to complex gutter runs and decorative cast iron.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit. No mess left in your garden or on your Compton property\'s decorative brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function ComptonPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Compton"
        url={URL_PATH}
        priceFrom={50}
        priceTo={130}
        nearbyAreas={['Wolverhampton', 'Tettenhall', 'Finchfield', 'Penn', 'Merridale', 'Claregate']}
        geo={{ latitude: 52.597, longitude: -2.125 }}
        postcodes={['WV3', 'WV3 7', 'WV3 8', 'WV3 9']}
        faqs={pageData.faqs}
      />
      <JsonLd data={comptonHowToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
