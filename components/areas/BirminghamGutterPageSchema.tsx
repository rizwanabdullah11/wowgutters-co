import { JsonLd } from '@/components/JsonLd';
import { 
  getBirminghamLocalBusinessSchema, 
  getBirminghamFAQSchema, 
  getBirminghamBreadcrumbSchema 
} from '@/lib/birminghamJsonLd';

/** Server-rendered JSON-LD so `<script type="application/ld+json">` appears in static HTML for the main Birmingham URL. */
export default function BirminghamGutterPageSchema() {
  return (
    <>
      <JsonLd data={getBirminghamLocalBusinessSchema()} />
      <JsonLd data={getBirminghamFAQSchema()} />
      <JsonLd data={getBirminghamBreadcrumbSchema()} />
    </>
  );
}
