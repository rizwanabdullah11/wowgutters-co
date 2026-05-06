/**
 * WebSite Schema for Homepage
 * Enables Google Sitelinks Search Box and declares site identity to Google's Knowledge Graph
 */
export default function HomepageWebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "WOW Gutters Ltd",
    "url": "https://wowgutters.co.uk",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wowgutters.co.uk/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
