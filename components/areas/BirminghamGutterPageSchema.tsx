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
import { buildCitySchemaFaqs } from '@/lib/cityFaqs'

export default function BirminghamGutterPageSchema() {
  return (
    <LocalBusinessSchema
      city="Birmingham"
      url="https://wowgutters.co.uk/gutter-cleaning-birmingham/"
      priceFrom={50}
      priceTo={120}
      nearbyAreas={['Solihull', 'Sutton Coldfield', 'Wolverhampton', 'Walsall', 'Dudley', 'West Bromwich']}
      geo={{ latitude: 52.4862, longitude: -1.8904 }}
      faqs={buildCitySchemaFaqs({
        city: 'Birmingham',
        slug: 'birmingham',
        priceFrom: 50,
        priceTo: 120,
        postcodes: ['B1', 'B13', 'B14', 'B15', 'B16', 'B17', 'B23', 'B27', 'B28', 'B29', 'B31', 'B43', 'B73', 'B74', 'B76'],
        nearbyAreas: ['Solihull', 'Sutton Coldfield', 'Wolverhampton', 'Walsall', 'Dudley', 'West Bromwich'],
      })}
      postcodes={['B1', 'B2', 'B3', 'B4', 'B5', 'B13', 'B14', 'B15', 'B16', 'B17', 'B23', 'B27', 'B28', 'B29', 'B31', 'B43', 'B73', 'B74', 'B76']}
    />
  )
}
