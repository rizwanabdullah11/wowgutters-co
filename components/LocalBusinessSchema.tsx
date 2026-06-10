import { buildLocalBusinessSchemaGraph } from '@/lib/localBusinessSchemaGraph';
import type { AreaServiceKind } from '@/lib/areaServiceMeta';

type LocalBusinessSchemaProps = {
  city: string;
  url: string;
  priceFrom: number;
  priceTo: number;
  nearbyAreas: string[];
  geo: {
    latitude: number;
    longitude: number;
  };
  faqs?: Array<{ question: string; answer: string }>;
  postcodes?: string[];
  serviceKind?: AreaServiceKind;
  slug?: string;
};

export default function LocalBusinessSchema(props: LocalBusinessSchemaProps) {
  const schema = buildLocalBusinessSchemaGraph(props);

  return (
    <script
      id="schema-static"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
