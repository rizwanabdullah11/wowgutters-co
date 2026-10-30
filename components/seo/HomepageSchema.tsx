import { JsonLd } from '@/components/JsonLd';
import { businessEntityNode } from '@/lib/businessEntity';
import { SOCIAL_PROFILES } from '@/lib/businessDetails';
import { BUSINESS_DIRECTORY_LISTINGS } from '@/lib/citationListings';

/** Homepage business schema — the one canonical entity (lib/business-entity.json), server-rendered. */
export default function HomepageSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    ...businessEntityNode({
      description:
        'WOW Gutters Ltd — professional gutter cleaning, repairs, inspections, roof cleaning and exterior uPVC care across Birmingham and the West Midlands. Ground-level methods, fully insured, highly rated on Google.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+447421433910',
        contactType: 'Customer Service',
        areaServed: 'GB',
        availableLanguage: 'English',
      },
      sameAs: [
        ...SOCIAL_PROFILES.map((p) => p.url),
        ...BUSINESS_DIRECTORY_LISTINGS.map((l) => l.url),
      ],
    }),
  };

  return <JsonLd data={organizationSchema} />;
}
