import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { getAreaPageJsonLd } from '@/lib/areaJsonLd';

interface AreaPageSchemaProps {
  slug: string;
}

/**
 * Comprehensive JSON-LD schema for area pages
 * Includes: LocalBusiness, Service, FAQPage, and BreadcrumbList
 */
export default function AreaPageSchema({ slug }: AreaPageSchemaProps) {
  // Convert slug to proper area name
  const areaName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <SchemaMarkup
      id={`area-${slug}-jsonld`}
      data={getAreaPageJsonLd(slug, areaName)}
    />
  );
}
