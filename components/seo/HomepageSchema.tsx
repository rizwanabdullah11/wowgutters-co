import SchemaMarkup from '@/components/seo/SchemaMarkup';

/** Homepage LocalBusiness schema - server-rendered for static export */
export default function HomepageSchema() {
  const addressLine1 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE1 || '38 Ryland Street').trim();
  const addressLine2 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE2 || '').trim();
  const addressCity = (process.env.NEXT_PUBLIC_BUSINESS_CITY || 'Birmingham').trim();
  const addressRegion = (process.env.NEXT_PUBLIC_BUSINESS_REGION || 'West Midlands').trim();
  const addressPostcode = (process.env.NEXT_PUBLIC_BUSINESS_POSTCODE || 'B16 8DD').trim();
  const gbpCidUrl = (process.env.NEXT_PUBLIC_GBP_CID_URL || '').trim();
  const trustpilotUrl = (process.env.NEXT_PUBLIC_TRUSTPILOT_URL || '').trim();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WOW Gutters Ltd",
    "image": "https://wowgutters.co.uk/og/default.jpg",
    "logo": "https://wowgutters.co.uk/_next/static/media/wow-gutters-logo1.f91894db.png",
    "url": "https://wowgutters.co.uk",
    "telephone": "+447421433910",
    "email": "support@wowgutters.co.uk",
    "description": "Professional gutter cleaning in Birmingham and West Midlands. Ground-level vacuum system, no ladders, 4-storey reach. 4.9 stars from 2696 reviews. 1-year guarantee.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": addressLine1,
      "addressLocality": addressCity,
      "addressRegion": addressRegion,
      "postalCode": addressPostcode,
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.4862,
      "longitude": -1.8904
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2696",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+447421433910",
      "contactType": "Customer Service",
      "areaServed": "GB",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/wowgutters",
      "https://twitter.com/wowgutters",
      "https://www.instagram.com/wowgutters",
      "https://www.linkedin.com/company/wow-gutters",
      "https://www.youtube.com/@wowgutters",
      ...(gbpCidUrl ? [gbpCidUrl] : []),
      ...(trustpilotUrl ? [trustpilotUrl] : [])
    ],
    "areaServed": [
      "Birmingham",
      "Solihull",
      "Wolverhampton",
      "Coventry",
      "Walsall",
      "Dudley",
      "West Bromwich",
      "Worcester",
      "Bromsgrove",
      "Redditch",
      "Kidderminster",
      "Malvern",
      "Evesham",
      "Droitwich Spa"
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wowgutters.co.uk/quote/",
        "inLanguage": "en-GB",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Gutter Cleaning Quote"
      }
    }
  };

  return <SchemaMarkup id="homepage-business-schema" data={organizationSchema} />;
}
