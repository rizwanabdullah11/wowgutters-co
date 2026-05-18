/**
 * Birmingham Gutter Cleaning Page Schema
 * 
 * Uses the unified LocalBusinessSchema component to output all 4 schema types
 * in a single @graph block:
 * 1. HomeAndConstructionBusiness
 * 2. Service
 * 3. FAQPage
 * 4. BreadcrumbList
 * 
 * Server-side rendering for static export - schema is baked into HTML at build time.
 */
import LocalBusinessSchema from '@/components/LocalBusinessSchema'

export default function BirminghamGutterPageSchema() {
  // Birmingham-specific FAQs
  const birminghamFaqs = [
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
  ]

  return (
    <LocalBusinessSchema
      city="Birmingham"
      url="https://wowgutters.co.uk/gutter-cleaning-birmingham/"
      priceFrom={50}
      priceTo={120}
      nearbyAreas={['Solihull', 'Sutton Coldfield', 'Wolverhampton', 'Walsall', 'Dudley', 'West Bromwich']}
      geo={{ latitude: 52.4862, longitude: -1.8904 }}
      faqs={birminghamFaqs}
      postcodes={['B1', 'B2', 'B3', 'B4', 'B5', 'B13', 'B14', 'B15', 'B16', 'B17', 'B23', 'B27', 'B28', 'B29', 'B31', 'B43', 'B73', 'B74', 'B76']}
    />
  )
}
