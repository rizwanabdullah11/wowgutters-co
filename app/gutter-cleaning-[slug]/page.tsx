/**
 * SEO URL: /gutter-cleaning-{city}/ (single path segment).
 * Reuses the same SSG + metadata as app/gutter-cleaning/[slug]/ — no middleware
 * (middleware is incompatible with output: "export").
 */
export {
  generateStaticParams,
  generateMetadata,
  default,
} from '../gutter-cleaning/[slug]/page';
