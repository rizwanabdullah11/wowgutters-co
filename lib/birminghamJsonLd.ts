/** 
 * Comprehensive JSON-LD schema for Birmingham gutter landing page
 * Uses @graph structure for better entity recognition by Google
 */
export function getBirminghamLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://wowgutters.co.uk/#business",
        "name": "WOW Gutters Ltd",
        "telephone": "+447421433910",
        "email": "support@wowgutters.co.uk",
        "url": "https://wowgutters.co.uk/gutter-cleaning-birmingham/",
        "image": "https://wowgutters.co.uk/og/default.jpg",
        "logo": {
          "@type": "ImageObject",
          "url": "https://wowgutters.co.uk/assets/wow-gutter-logo2.png"
        },
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
        "areaServed": [
          { "@type": "City", "name": "Birmingham" },
          { "@type": "Place", "name": "Moseley" },
          { "@type": "Place", "name": "Harborne" },
          { "@type": "Place", "name": "Edgbaston" },
          { "@type": "Place", "name": "Sutton Coldfield" },
          { "@type": "Place", "name": "Kings Heath" }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://wowgutters.co.uk/gutter-cleaning-birmingham/#service",
        "name": "Gutter Cleaning Birmingham",
        "serviceType": "Gutter cleaning",
        "description": "Professional gutter cleaning in Birmingham. Ground-level vacuum system, no ladders, up to 4 storeys, before & after photos, downpipes cleared, 1-year guarantee.",
        "provider": { "@id": "https://wowgutters.co.uk/#business" },
        "areaServed": { "@type": "City", "name": "Birmingham" },
        "url": "https://wowgutters.co.uk/gutter-cleaning-birmingham/"
      }
    ]
  };
}

/** 
 * FAQPage schema for Birmingham gutter landing
 * Kept separate for better organization
 */
export function getBirminghamFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://wowgutters.co.uk/gutter-cleaning-birmingham/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does gutter cleaning cost in Birmingham?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prices start from GBP 50 for a terraced house, GBP 60-80 for semi-detached, GBP 80-120 for detached. Fixed quote before work starts."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I have my gutters cleaned in Birmingham?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once or twice a year. Late autumn October to November is most critical. Spring clean in April or May for properties with significant tree coverage."
        }
      },
      {
        "@type": "Question",
        "name": "Do you use ladders when cleaning gutters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Ground-level vacuum system only. No ladders against your property. Reaches up to 4 storeys."
        }
      },
      {
        "@type": "Question",
        "name": "Do you clear downpipes as well as gutters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Downpipe clearing included as standard. We flush and test every downpipe. Blocked downpipes cleared at no extra charge."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide before and after photos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Before and after photos on every single job. Images sent directly to you."
        }
      },
      {
        "@type": "Question",
        "name": "What areas of Birmingham do you cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All Birmingham postcodes B1 to B76 including Moseley (B13), Harborne (B17), Edgbaston (B15-B16), Kings Heath (B14), Erdington (B23), Sutton Coldfield (B73-B74), Selly Oak (B29), Northfield (B31), Acocks Green (B27), Hall Green (B28) and Great Barr (B43)."
        }
      },
      {
        "@type": "Question",
        "name": "Are you insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Fully insured with comprehensive public liability insurance. 1-year service guarantee on every job."
        }
      }
    ]
  };
}

/** 
 * BreadcrumbList schema for Birmingham gutter landing
 * Helps Google understand site hierarchy
 */
export function getBirminghamBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://wowgutters.co.uk/gutter-cleaning-birmingham/#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://wowgutters.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Gutter Cleaning",
        "item": "https://wowgutters.co.uk/help/unblock/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Gutter Cleaning Birmingham",
        "item": "https://wowgutters.co.uk/gutter-cleaning-birmingham/"
      }
    ]
  };
}
