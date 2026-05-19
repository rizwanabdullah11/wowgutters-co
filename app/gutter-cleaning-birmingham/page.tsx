import type { Metadata } from 'next'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import BirminghamGutterCleaningPage from '@/components/areas/BirminghamGutterCleaningPage'

const URL_PATH = 'https://wowgutters.co.uk/gutter-cleaning-birmingham/'

export const metadata: Metadata = {
  title: 'Gutter Cleaning Birmingham | WOW Gutters Ltd',
  description: 'Professional gutter cleaning in Birmingham from £50. Ground-level vacuum system, before & after photos, 1-year guarantee. Call WOW Gutters: 07421 433910.',
  alternates: {
    canonical: URL_PATH,
    languages: {
      'en-GB': URL_PATH,
      'x-default': URL_PATH,
    },
  },
  robots: {
    index: true, // explicit — overrides any default
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'Gutter Cleaning Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Birmingham from £50. Ground-level vacuum system, before & after photos, 1-year guarantee.',
    url: URL_PATH,
    type: 'website',
    locale: 'en_GB',
    siteName: 'WOW Gutters',
    images: [
      {
        url: 'https://wowgutters.co.uk/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'WOW Gutters - Gutter Cleaning Birmingham',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Cleaning Birmingham | WOW Gutters Ltd',
    description: 'Professional gutter cleaning in Birmingham from £50. Ground-level vacuum system, before & after photos, 1-year guarantee.',
    images: ['https://wowgutters.co.uk/og/default.jpg'],
  },
}

export default function BirminghamPage() {
  return (
    <>
      <LocalBusinessSchema
        city="Birmingham"
        url={URL_PATH}
        priceFrom={50}
        priceTo={120}
        nearbyAreas={['Solihull', 'Sutton Coldfield', 'Wolverhampton', 'Walsall', 'Dudley', 'West Bromwich']}
        geo={{ latitude: 52.4862, longitude: -1.8904 }}
        postcodes={['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16', 'B17', 'B18', 'B19', 'B20', 'B21', 'B23', 'B24', 'B25', 'B26', 'B27', 'B28', 'B29', 'B30', 'B31', 'B32', 'B33', 'B34', 'B35', 'B36', 'B37', 'B38', 'B40', 'B42', 'B43', 'B44', 'B45', 'B46', 'B47', 'B48', 'B49', 'B50', 'B60', 'B61', 'B62', 'B63', 'B64', 'B65', 'B66', 'B67', 'B68', 'B69', 'B70', 'B71', 'B72', 'B73', 'B74', 'B75', 'B76', 'B90', 'B91', 'B92', 'B93', 'B94', 'B95', 'B96', 'B97', 'B98']}
        faqs={[
          {
            question: 'How much does gutter cleaning cost in Birmingham?',
            answer: 'Prices start from £50 for a terraced house, £60–£80 for semi-detached, £80–£120 for detached. Fixed quote before work starts.',
          },
          {
            question: 'How often should I have my gutters cleaned in Birmingham?',
            answer: 'Once or twice a year. Late autumn (October–November) is most critical. Spring clean in April or May for properties with significant tree coverage.',
          },
          {
            question: 'Do you use ladders when cleaning gutters?',
            answer: 'No. Ground-level vacuum system only. No ladders against your property. Reaches up to 4 storeys.',
          },
          {
            question: 'Do you clear downpipes as well as gutters?',
            answer: 'Yes. Downpipe clearing included as standard. We flush and test every downpipe. Blocked downpipes cleared at no extra charge.',
          },
          {
            question: 'Do you provide before and after photos?',
            answer: 'Yes. Before and after photos on every single job. Images sent directly to you.',
          },
          {
            question: 'What areas of Birmingham do you cover?',
            answer: 'All Birmingham postcodes B1 to B76 including Moseley (B13), Harborne (B17), Edgbaston (B15-B16), Kings Heath (B14), Erdington (B23), Sutton Coldfield (B73-B74), Selly Oak (B29), Northfield (B31), Acocks Green (B27), Hall Green (B28) and Great Barr (B43).',
          },
          {
            question: 'Are you insured?',
            answer: 'Yes. Fully insured with comprehensive public liability insurance. 1-year service guarantee on every job.',
          },
        ]}
      />
      <BirminghamGutterCleaningPage />
    </>
  )
}
