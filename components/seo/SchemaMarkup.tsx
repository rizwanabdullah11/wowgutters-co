type JsonLd = Record<string, unknown>;

/**
 * Renders structured data as a plain <script type="application/ld+json">.
 * We intentionally avoid next/script here — in Next.js 16 static export
 * (output: "export" + Turbopack) <Script> tags are dropped from the
 * generated HTML, which would strip the schema from the final output.
 */
export default function SchemaMarkup({
  id,
  data,
}: {
  id: string;
  data: JsonLd | JsonLd[];
}) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload.length === 1 ? payload[0] : payload),
      }}
    />
  );
}
