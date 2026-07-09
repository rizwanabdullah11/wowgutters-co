import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-low-hill/'
const pageData = suburbPages['low-hill']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Low Hill Wolverhampton | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Low Hill, Wolverhampton (WV10). Interwar semis, post-war homes, no ladders, vacuum system, before & after photos. From £40. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Low Hill Wolverhampton | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Low Hill, Wolverhampton (WV10). From £40. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/low-hill.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Low Hill Wolverhampton' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Low Hill Wolverhampton | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Low Hill Wolverhampton WV10. From £40. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/low-hill.jpg'],
  },
}

const lowHillHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Low Hill',
  description: 'Our 4-step professional gutter cleaning process for Low Hill, Wolverhampton properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern. For Low Hill\'s interwar semis we check original uPVC systems for joint wear and blockages.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris \u2014 leaves, moss, silt, bird debris \u2014 from ground level directly into a sealed collection unit. No mess left in your garden or on your Low Hill property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed \u2014 honestly, without pressure.' },
  ],
}

export default function LowHillPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Low Hill"
        url={URL_PATH}
        priceFrom={40}
        priceTo={105}
        nearbyAreas={['Bushbury', 'Fallings Park', 'Fordhouses', 'Pendeford']}
        geo={{ latitude: 52.615, longitude: -2.100 }}
        postcodes={['WV10', 'WV10 1', 'WV10 2', 'WV10 3']}
        faqs={pageData.faqs}
      />
      <JsonLd data={lowHillHowToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
