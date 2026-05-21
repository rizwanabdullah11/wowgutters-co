import { JsonLd } from '@/components/JsonLd';

/** Homepage LocalBusiness schema - server-rendered for static export */
export default function HomepageSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WOW Gutters Ltd",
    "telephone": "+447421433910",
    "email": "support@wowgutters.co.uk",
    "url": "https://wowgutters.co.uk",
    "image": "https://wowgutters.co.uk/og/default.jpg",
    "description": "Professional gutter cleaning in Birmingham and West Midlands. Ground-level vacuum system, no ladders, 4-storey reach. 4.9 stars from 2696 reviews. 1-year guarantee.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "38 Ryland Street",
      "addressLocality": "Birmingham",
      "addressRegion": "West Midlands",
      "postalCode": "B16 8DD",
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
    "sameAs": [
      "https://web.facebook.com/wowgutters.co.uk",
      "https://twitter.com/wowgutters",
      "https://www.instagram.com/wowgutters/",
      "https://www.linkedin.com/company/wow-gutters",
      "https://www.youtube.com/@wowgutters"
    ]
  };

  return <JsonLd data={organizationSchema} />;
}
