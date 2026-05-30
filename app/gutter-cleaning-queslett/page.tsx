import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-queslett/'
const pageData = suburbPages['queslett']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Queslett Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Queslett, Birmingham (B43). 1930s semis, post-war homes, no ladders, vacuum system, before & after photos. From £45. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Queslett Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Queslett, Birmingham (B43). No ladders, vacuum system, before & after photos. From £45. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/queslett.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Queslett Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Queslett Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Queslett B43. From £45. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/queslett.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Cleans Your Gutters in Queslett',
  description: 'Our 4-step professional gutter cleaning process for Queslett, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern. For Queslett\'s 1930s and post-war properties we check aging uPVC systems for joint wear and damage.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit. No mess left in your garden or on your property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function QueslettPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Queslett"
        url={URL_PATH}
        priceFrom={45}
        priceTo={115}
        nearbyAreas={['Great Barr', 'Kingstanding', 'Perry Barr', 'Walsall', 'Birmingham']}
        geo={{ latitude: 52.5430, longitude: -1.9200 }}
        postcodes={['B43']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
