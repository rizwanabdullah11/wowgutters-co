import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-kitts-green/'
const pageData = suburbPages['kitts-green']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Kitts Green Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Kitts Green, Birmingham (B26). Post-war semis, no ladders, vacuum system, before & after photos. From £45. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Kitts Green Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Kitts Green, Birmingham (B26). No ladders, vacuum system, before & after photos. From £45. Call WOW Gutters: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters',
    images: [{ url: 'https://wowgutters.co.uk/og/kitts-green.jpg', width: 1200, height: 630, alt: 'WOW Gutters — Gutter Cleaning Kitts Green Birmingham' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Kitts Green Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Kitts Green B26. From £45. No ladders, before & after photos. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/kitts-green.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Cleans Your Gutters in Kitts Green',
  description: 'Our 4-step professional gutter cleaning process for Kitts Green, Birmingham properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern for Kitts Green\'s post-war properties.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function KittsGreenPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Kitts Green"
        url={URL_PATH}
        priceFrom={45}
        priceTo={105}
        nearbyAreas={['Yardley', 'Sheldon', 'Stechford', 'Birmingham', 'Shard End']}
        geo={{ latitude: 52.4770, longitude: -1.7800 }}
        postcodes={['B26']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
