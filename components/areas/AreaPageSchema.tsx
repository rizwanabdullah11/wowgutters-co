/**
 * Area Page Schema
 * 
 * Uses the unified LocalBusinessSchema component for all area pages.
 * Generates city-specific data from the slug.
 */
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import { getCityData } from '@/lib/cities'

interface AreaPageSchemaProps {
  slug: string
}

export default function AreaPageSchema({ slug }: AreaPageSchemaProps) {
  // Try to get city data from cities.ts
  const cityData = getCityData(slug)
  
  // Fallback: Convert slug to proper area name
  const areaName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  // Use city data if available, otherwise use defaults
  if (cityData) {
    return (
      <LocalBusinessSchema
        city={cityData.name}
        url={`https://wowgutters.co.uk/gutter-cleaning-${slug}/`}
        priceFrom={cityData.pricing.terraced.min}
        priceTo={cityData.pricing.detached.max}
        nearbyAreas={cityData.nearbyAreas}
        geo={cityData.geo}
        postcodes={cityData.postcodes}
      />
    )
  }

  // Fallback for areas not in cities.ts
  return (
    <LocalBusinessSchema
      city={areaName}
      url={`https://wowgutters.co.uk/gutter-cleaning-${slug}/`}
      priceFrom={50}
      priceTo={120}
      nearbyAreas={[]}
      geo={{ latitude: 52.4862, longitude: -1.8904 }} // Default to Birmingham coordinates
    />
  )
}
