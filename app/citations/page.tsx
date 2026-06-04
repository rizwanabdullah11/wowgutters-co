import type { Metadata } from 'next';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import CitationsHubContent from '@/components/citations/CitationsHubContent';
import { buildMetadata } from '@/lib/seo';
import { SCHEMA_DATE_MODIFIED, SCHEMA_DATE_PUBLISHED } from '@/lib/schemaDates';

const SITE_URL = 'https://wowgutters.co.uk';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Local Citations & Google Business Profile Guide | WOW Gutters',
  description:
    'Official WOW Gutters NAP, directory citation targets, Google Maps service area, weekly GBP posting ideas, and review response templates for Birmingham & the West Midlands.',
  canonicalPath: '/citations/',
});

export default function CitationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SchemaMarkup
        id="schema-citations-webpage"
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Local Citations & Google Business Profile Guide',
          description:
            'Official business information, citation directories, and Google Business Profile guidance for WOW Gutters Ltd.',
          url: `${SITE_URL}/citations/`,
          isPartOf: { '@type': 'WebSite', name: 'WOW Gutters', url: SITE_URL },
          datePublished: SCHEMA_DATE_PUBLISHED,
          dateModified: SCHEMA_DATE_MODIFIED,
        }}
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <h1 className="text-3xl font-black text-slate-900 sm:text-4xl">
          Local citations &amp; Google Business Profile
        </h1>
        <p className="mt-3 text-base text-slate-600 sm:text-lg leading-relaxed">
          This hub keeps name, address, and phone consistent across directories, documents our Google Maps service
          area, and gives the team a checklist for weekly GBP posts and review replies — core local SEO signals for
          gutter cleaning in Birmingham and the West Midlands.
        </p>

        <div className="mt-10">
          <CitationsHubContent />
        </div>
      </section>
    </main>
  );
}
