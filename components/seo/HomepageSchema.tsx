import { JsonLd } from '@/components/JsonLd';
import { OPENING_HOURS_SCHEMA } from '@/lib/businessHours';
import { buildReviewSchemaFields } from '@/lib/reviewSchema';

/** Homepage LocalBusiness schema - server-rendered for static export */
export default function HomepageSchema() {
  const businessId = 'https://wowgutters.co.uk/#business';
  const { aggregateRating, review } = buildReviewSchemaFields(businessId);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WOW Gutters Ltd",
    "telephone": "+447421433910",
    "email": "support@wowgutters.co.uk",
    "url": "https://wowgutters.co.uk",
    "image": "https://wowgutters.co.uk/og/default.jpg",
    "description": "WOW Gutters Ltd — professional gutter cleaning, repairs, inspections, roof cleaning and exterior uPVC care across Birmingham and the West Midlands. Ground-level methods, fully insured, highly rated on Google.",
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
    "aggregateRating": aggregateRating,
    "review": review,
    "openingHoursSpecification": OPENING_HOURS_SCHEMA,
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
