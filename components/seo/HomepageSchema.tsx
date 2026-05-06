import SchemaMarkup from '@/components/seo/SchemaMarkup';

/** Homepage LocalBusiness schema - server-rendered for static export */
export default function HomepageSchema() {
  const addressLine1 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE1 || '').trim();
  const addressLine2 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE2 || '').trim();
  const addressCity = (process.env.NEXT_PUBLIC_BUSINESS_CITY || '').trim();
  const addressRegion = (process.env.NEXT_PUBLIC_BUSINESS_REGION || '').trim();
  const addressPostcode = (process.env.NEXT_PUBLIC_BUSINESS_POSTCODE || '').trim();
  const gbpCidUrl = (process.env.NEXT_PUBLIC_GBP_CID_URL || '').trim();
  const trustpilotUrl = (process.env.NEXT_PUBLIC_TRUSTPILOT_URL || '').trim();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://wowgutters.co.uk/#business",
    "name": "WOW Gutters Ltd",
    "description": "Professional gutter cleaning in Birmingham and West Midlands. Ground-level vacuum system, no ladders, 4-storey reach, same-day booking.",
    "image": "https://wowgutters.co.uk/gutter-cleaning.jpeg",
    "logo": "https://wowgutters.co.uk/assets/wow-gutter-logo2.png",
    "url": "https://wowgutters.co.uk/",
    "telephone": "+447421433910",
    "email": "support@wowgutters.co.uk",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      ...(addressLine1 ? { "streetAddress": [addressLine1, addressLine2].filter(Boolean).join(', ') } : {}),
      ...(addressCity ? { "addressLocality": addressCity } : { "addressLocality": "Birmingham" }),
      ...(addressRegion ? { "addressRegion": addressRegion } : { "addressRegion": "West Midlands" }),
      ...(addressPostcode ? { "postalCode": addressPostcode } : {}),
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.4862,
      "longitude": -1.8904
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "07:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "openingHours": [
      "Mo-Fr 07:00-20:00",
      "Sa 09:00-18:00",
      "Su 10:00-18:00"
    ],
    "areaServed": [
      { "@type": "City", "name": "Birmingham" },
      { "@type": "City", "name": "Coventry" },
      { "@type": "City", "name": "Wolverhampton" },
      { "@type": "City", "name": "Worcester" },
      { "@type": "City", "name": "Solihull" },
      { "@type": "City", "name": "Sutton Coldfield" },
      { "@type": "City", "name": "Walsall" },
      { "@type": "City", "name": "Dudley" },
      { "@type": "City", "name": "West Bromwich" },
      { "@type": "City", "name": "Halesowen" },
      { "@type": "City", "name": "Stourbridge" },
      { "@type": "City", "name": "Redditch" },
      { "@type": "City", "name": "Tamworth" },
      { "@type": "City", "name": "Bromsgrove" },
      { "@type": "City", "name": "Smethwick" },
      { "@type": "AdministrativeArea", "name": "West Midlands" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Gutter & Roof Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gutter Cleaning Birmingham" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Cleaning Birmingham" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Downpipe Unblocking" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fascia & Soffit Cleaning" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Gutter Cleaning" } }
      ]
    },
    "sameAs": [
      ...(gbpCidUrl ? [gbpCidUrl] : []),
      ...(trustpilotUrl ? [trustpilotUrl] : []),
      "https://www.facebook.com/wowgutters",
      "https://www.instagram.com/wowgutters",
      "https://twitter.com/wowgutters",
      "https://www.linkedin.com/company/wow-gutters",
      "https://www.youtube.com/@wowgutters"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2696",
      "bestRating": "5"
    }
  };

  return <SchemaMarkup id="homepage-business-schema" data={organizationSchema} />;
}
