/**
 * Post-export safety net (Oct 30 2026): every INDEXABLE page must carry JSON-LD.
 * Pages that render none (hubs, blog index, quote, discount pages, keyword service pages)
 * get a minimal, accurate graph: WebPage/CollectionPage + BreadcrumbList, plus a Service node
 * for service pages — all linked to the one business entity (lib/business-entity.json).
 * Pages that already have JSON-LD are never touched.
 */
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.join(process.cwd(), 'out');
const SITE = 'https://wowgutters.co.uk';
const BUSINESS_ID = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'lib', 'business-entity.json'), 'utf8'),
)['@id'];

const COLLECTION_PATHS = new Set([
  '/blog/', '/services/', '/gutter-guides/', '/latest-news/',
  '/gutter-cleaning-service-areas/', '/roof-cleaning-service-areas/', '/gutter-repair-service-areas/',
]);
const PLAIN_PAGE_PATHS = new Set(['/quote/', '/reviews/', '/neighbourhood-discount/', '/oap-discount/', '/contact/']);

function* pages(dir) {
  for (const name of fs.readdirSync(dir)) {
    if (name === '_next') continue;
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) yield* pages(full);
    else if (name === 'index.html') yield full;
  }
}

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

let added = 0;
for (const file of pages(OUT)) {
  const html = fs.readFileSync(file, 'utf8');
  if (/application\/ld\+json/.test(html)) continue;
  if (/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html)) continue;
  const canonical = /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i.exec(html)?.[1];
  if (!canonical || !canonical.startsWith(SITE)) continue;
  const rel = path.relative(OUT, path.dirname(file)).split(path.sep).join('/');
  const pagePath = rel ? `/${rel}/` : '/';
  if (canonical !== `${SITE}${pagePath}`) continue; // canonicalised elsewhere

  const title = decode((/<title>([^<]*)<\/title>/i.exec(html)?.[1] || '').trim());
  const h1 = decode((/<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(html)?.[1] || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  const name = (h1 || title.split('|')[0]).trim();
  const description = decode(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i.exec(html)?.[1] || '');

  const isCollection = COLLECTION_PATHS.has(pagePath);
  const isService = !isCollection && !PLAIN_PAGE_PATHS.has(pagePath);
  const graph = [
    {
      '@type': isCollection ? 'CollectionPage' : 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: title || name,
      ...(description ? { description } : {}),
      inLanguage: 'en-GB',
      isPartOf: { '@id': `${SITE}/#website` },
      about: { '@id': isService ? `${canonical}#service` : BUSINESS_ID },
      breadcrumb: { '@id': `${canonical}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name, item: canonical },
      ],
    },
  ];
  if (isService) {
    graph.push({
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name,
      ...(description ? { description } : {}),
      provider: { '@id': BUSINESS_ID },
      areaServed: [
        { '@type': 'City', name: 'Birmingham' },
        { '@type': 'AdministrativeArea', name: 'West Midlands' },
      ],
      url: canonical,
    });
  }
  const tag = `<script type="application/ld+json" data-schema="ensure-page-schema">${JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  }).replace(/</g, '\\u003c')}</script>`;
  fs.writeFileSync(file, html.replace('</head>', `${tag}</head>`), 'utf8');
  added++;
}
console.log(`ensure-page-schema: added baseline JSON-LD to ${added} indexable page(s) that had none`);
