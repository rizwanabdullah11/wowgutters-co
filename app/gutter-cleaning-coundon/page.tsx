import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage'
import { suburbPages } from '@/lib/suburbPageData'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-coundon/'
const pageData = suburbPages['coundon']

export const metadata: Metadata = {
  title: 'Gutter Cleaning Coundon Coventry | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Coundon, Coventry (CV6). 1930s semis, Coundon Park area, no ladders, vacuum system, before & after photos. From £50. Call: 07421 433910.',
  alternates: { canonical: URL_PATH, languages: { 'en-GB': URL_PATH, 'x-default': URL_PATH } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Gutter Cleaning Coundon Coventry | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Coundon, Coventry (CV6). No ladders, vacuum system, before & after photos. From £50. Call WOW Gutters Ltd: 07421 433910.',
    url: URL_PATH, type: 'website', locale: 'en_GB', siteName: 'WOW Gutters Ltd',
    images: [{ url: 'https://wowgutters.co.uk/og/coundon.jpg', width: 1200, height: 630, alt: 'WOW Gutters Ltd — Gutter Cleaning Coundon Coventry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Coundon Coventry | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Coundon Coventry CV6. From £50. No ladders, before & after photos. Call WOW Gutters Ltd: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/coundon.jpg'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Ltd Cleans Your Gutters in Coundon',
  description: 'Our 4-step professional gutter cleaning process for Coundon, Coventry properties',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Assessment', text: 'We inspect your gutters and downpipes before starting. For Coundon\'s 1930s semis and post-war detached homes we check uPVC systems and look for joint wear from the area\'s established tree cover.' },
    { '@type': 'HowToStep', position: 2, name: 'Vacuum Clean', text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt — from ground level directly into a sealed collection unit. No mess left in your garden or on your Coundon property\'s brickwork.' },
    { '@type': 'HowToStep', position: 3, name: 'Downpipe Check', text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.' },
    { '@type': 'HowToStep', position: 4, name: 'Photos and Condition Report', text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.' },
  ],
}

export default function CoundonPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Coundon"
        url={URL_PATH}
        priceFrom={50}
        priceTo={120}
        nearbyAreas={['Coventry', 'Allesley', 'Meriden', 'Berkswell', 'Kenilworth']}
        geo={{ latitude: 52.433, longitude: -1.520 }}
        postcodes={['CV6']}
        faqs={pageData.faqs}
      />
      <JsonLd data={howToSchema} />
      <SuburbGutterCleaningPage data={pageData} />
    </>
  )
}
