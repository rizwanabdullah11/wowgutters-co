import { buildLocalBusinessSchemaGraph } from '@/lib/localBusinessSchemaGraph';

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
};

export default function LocalBusinessSchema(props: LocalBusinessSchemaProps) {
  const schema = buildLocalBusinessSchemaGraph(props);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
