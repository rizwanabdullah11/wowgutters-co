import SchemaMarkup from '@/components/seo/SchemaMarkup';

type JsonLdGraph = Record<string, unknown>;

export default function PageSchema({
  id,
  data,
}: {
  id: string;
  data: JsonLdGraph;
}) {
  return <SchemaMarkup id={id} data={data} />;
}
