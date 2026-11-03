import { buildLocalBusinessSchemaGraph } from '@/lib/localBusinessSchemaGraph';
import type { AreaServiceKind } from '@/lib/areaServiceMeta';
import { localiseFaqs } from '@/lib/localVariants';

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
  // FAQ answers localised the same way as the visible FAQ (CollapsibleAreaFAQ / suburb FAQ).
  const schema = buildLocalBusinessSchemaGraph({ ...props, faqs: props.faqs ? localiseFaqs(props.city, props.faqs) : props.faqs });

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
