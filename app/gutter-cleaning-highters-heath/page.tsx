import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-highters-heath/'
const pageData = suburbPages['highters-heath']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Highter\'s Heath Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Highter\'s Heath, Birmingham (B14). 1930s semis, no ladders, vacuum system, before & after photos. From £45. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Highter\'s Heath Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Highter\'s Heath, Birmingham (B14). No ladders, vacuum system, before & after photos. From £45. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/highters-heath.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Highter\'s Heath Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Highter\'s Heath Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Highter\'s Heath B14. From £45. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/highters-heath.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Highter\'s Heath',
  description: 'Our 4-step professional gutter cleaning process for Highter\'s Heath, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern for Highter\'s Heath\'s interwar properties.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function HightersHeathPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Highter's Heath"
        url={URL_PATH}
        priceFrom={45}
        priceTo={105}
        nearbyAreas={['Yardley Wood', 'Kings Heath', 'Hall Green', 'Birmingham', 'Shirley']}
        geo={{ latitude: 52.4150, longitude: -1.8600 }}
        postcodes={['B14']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
