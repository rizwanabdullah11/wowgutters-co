import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import MoseleyGutterCleaningPage from '@/components/areas/MoseleyGutterCleaningPage'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-moseley/'

export const metadata: Metadata = {
  title: 'Gutter Cleaning Moseley Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Moseley, Birmingham (B13). Victorian & Edwardian homes, no ladders, vacuum system, before & after photos. From £55. Call: 07421 433910.',
  alternates: {
    canonical: URL_PATH,
    languages: {
      'en-GB': URL_PATH,
      'x-default': URL_PATH,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'Gutter Cleaning Moseley Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Moseley, Birmingham (B13). No ladders, vacuum system, before & after photos. From £55. Call WOW Gutters: 07421 433910.',
    url: URL_PATH,
    type: 'website',
    locale: 'en_GB',
    siteName: 'WOW Gutters',
    images: [
      {
        url: 'https://wowgutters.co.uk/og/moseley.jpg',
        width: 1200,
        height: 630,
        alt: 'WOW Gutters — Gutter Cleaning Moseley Birmingham',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Moseley Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Moseley B13. From £55. No ladders, before & after photos, 1-year guarantee. Call WOW Gutters: 07421 433910.',
    images: ['https://wowgutters.co.uk/og/moseley.jpg'],
  },
}

const moseleyHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How WOW Gutters Cleans Your Gutters in Moseley',
  description: 'Our 4-step professional gutter cleaning process for Moseley, Birmingham properties',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Assessment',
      text: 'We inspect your gutters and downpipes before starting, identifying all blockages, damaged sections and areas of concern. For Moseley\'s period properties we also check original cast iron and early uPVC systems for joint wear.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Vacuum Clean',
      text: 'Using our high-reach vacuum system, we remove all debris — leaves, moss, silt, bird debris — from ground level directly into a sealed collection unit. No mess left in your garden or on your Moseley property\'s brickwork.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Downpipe Check',
      text: 'We flush and test every downpipe to confirm water flows freely. If a downpipe is blocked, we clear it as part of the standard service at no extra charge.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Photos and Condition Report',
      text: 'We photograph your gutters before and after the clean, then send you the images. We also flag any damage or repairs needed — honestly, without pressure.',
    },
  ],
}

export default function MoseleyPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Moseley"
        url={URL_PATH}
        priceFrom={55}
        priceTo={140}
        nearbyAreas={['Kings Heath', 'Balsall Heath', 'Sparkhill', 'Stirchley', 'Edgbaston', 'Hall Green']}
        geo={{ latitude: 52.4479, longitude: -1.8831 }}
        postcodes={['B13', 'B13 0', 'B13 8', 'B13 9']}
        faqs={[
          {
            question: 'How much does gutter cleaning cost in Moseley?',
            answer: 'Prices start from £55 for a standard terraced property in Moseley. Most Victorian and Edwardian semis in B13 range from £65 to £90, and larger detached properties from £90 to £140. All prices include downpipe flushing and before & after photos. Fixed quote provided before work starts — no hidden fees.',
          },
          {
            question: 'Is there a gutter cleaning service near me in Moseley?',
            answer: 'Yes — WOW Gutters covers all of Moseley (B13) including properties near Moseley Park & Pool, along Alcester Road, Salisbury Road, Wake Green Road, St Mary\'s Row, Woodbridge Road and all surrounding streets. We work in Moseley regularly and can often book within 2 to 3 working days. Call 07421 433910 to check today\'s availability.',
          },
          {
            question: 'Do you clean gutters near Moseley Park and the village area?',
            answer: 'Yes — we regularly work throughout the Moseley village area, on properties along St Mary\'s Row and on homes backing onto Moseley Park & Pool. The park\'s mature trees mean these properties experience significant leaf fall each autumn.',
          },
          {
            question: 'Can blocked gutters cause damp in Moseley\'s Victorian properties?',
            answer: 'Yes — this is one of the most common problems we see in B13. Victorian and Edwardian properties have solid brick construction, and when gutters overflow against the wall the water has nowhere to go except inward. We see interior damp patches, stained brickwork and damaged window frames — all caused by blocked gutters that cost a fraction of the repair bill to maintain.',
          },
          {
            question: 'What postcodes do you cover in Moseley?',
            answer: 'We cover B13 in full, including B13 0, B13 8 and B13 9 sectors. Key streets include Alcester Road, Salisbury Road, Wake Green Road, Oxford Road, College Road, Church Road, St Mary\'s Row, Woodbridge Road, Woodfield Road, Prospect Road and all surrounding streets. We also cover bordering postcodes B14 (Kings Heath), B12 (Balsall Heath) and B11 (Sparkhill).',
          },
          {
            question: 'Do you offer fascia and soffit cleaning in Moseley?',
            answer: 'Yes — our hot purified water system restores fascias and soffits on Moseley\'s period properties to a bright, streak-free finish. Popular with homeowners preparing to sell or following a roof replacement. Particularly effective on the white-painted uPVC rooflines common on Moseley\'s Edwardian semis.',
          },
          {
            question: 'How quickly can you get to Moseley?',
            answer: 'We aim to offer bookings within 2 to 5 working days across Moseley. Same-day visits may be available — call 07421 433910 to check availability.',
          },
        ]}
      />
      <JsonLd data={moseleyHowToSchema} />
      <MoseleyGutterCleaningPage />
    </>
  )
}
