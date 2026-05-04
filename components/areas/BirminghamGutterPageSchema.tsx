import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { getBirminghamGutterPageJsonLd } from '@/lib/birminghamJsonLd';

/** Server-rendered JSON-LD so `<script type="application/ld+json">` appears in static HTML for the main Birmingham URL. */
export default function BirminghamGutterPageSchema() {
  return <SchemaMarkup id="birmingham-gutter-jsonld" data={getBirminghamGutterPageJsonLd()} />;
}
