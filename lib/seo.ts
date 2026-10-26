import type { Metadata } from 'next';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

/** Per-town OG images were never created; fall back to the shared one so shares never show a broken image. */
function resolveOgImage(path?: string): string {
  if (!path) return '/og/default.jpg';
  if (path.startsWith('/') && !existsSync(join(process.cwd(), 'public', path))) return '/og/default.jpg';
  return path;
}


const BRAND = 'WOW Gutters Ltd';
const BRAND_RE = /wow gutters ltd/i;

/**
 * On-page SEO normaliser (Oct 2026 audit):
 * - fixes the broken "”" separator that appeared in some generated titles
 * - removes a second "| WOW Gutters Ltd" (several titles had the brand twice)
 * - keeps titles within ~60 characters by dropping trailing tagline segments,
 *   then the brand suffix, before Google truncates them mid-word.
 */
export function seoTitle(raw: string, opts: { keepSegments?: boolean } = {}): string {
  const cleaned = raw.replace(/\s*”\s*/g, ' — ').replace(/\s+/g, ' ').trim();
  let brandInCore = false;
  const segs: string[] = [];
  for (let part of cleaned.split(/\s+\|\s+/)) {
    part = part.trim();
    if (!part || /^wow gutters ltd$/i.test(part)) continue;
    part = part
      .replace(/^wow gutters ltd\s*[—–-]\s*/i, '')
      .replace(/\s*[—–-]?\s*wow gutters ltd\s+(\d{4})$/i, ' $1')
      .replace(/\s*[—–-]\s*wow gutters ltd$/i, '')
      .trim();
    if (!part) continue;
    if (BRAND_RE.test(part)) brandInCore = true;
    segs.push(part);
  }
  if (segs.length === 0) return BRAND;
  const compose = (s: string[]) => (brandInCore ? s.join(' | ') : [...s, BRAND].join(' | '));
  if (opts.keepSegments) {
    const full = compose(segs);
    return full.length <= 60 ? full : segs.join(' | ');
  }
  let use = segs;
  while (compose(use).length > 60 && use.length > 1) use = use.slice(0, -1);
  if (compose(use).length <= 60) return compose(use);
  return use.join(' | ');
}

/** Meta descriptions: fix encoding, keep ≤160 chars, cut at a sentence or word boundary. */
export function seoDescription(raw: string): string {
  const d = raw.replace(/\s*”\s*/g, ' — ').replace(/\s+/g, ' ').trim();
  if (d.length <= 160) return d;
  const window = d.slice(0, 160);
  const stop = Math.max(window.lastIndexOf('. '), window.lastIndexOf('! '), window.lastIndexOf('? '));
  if (stop >= 90) return window.slice(0, stop + 1);
  const cut = d.slice(0, 157);
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:—–-]$/, '')}…`;
}

/**
 * Near-identical pages that exist at two URLs. The /services/* versions are the
 * ones linked site-wide, so the orphan copies point their canonical there.
 */
const CANONICAL_OVERRIDES: Record<string, string> = {
  '/professional-gutter-cleaning/': '/services/gutter-cleaning/',
  '/free-roof-inspection/': '/services/roof-inspection/',
  '/commercial-gutter-cleaning/': '/services/commercial-gutter-cleaning/',
  '/commercial-downpipe-cleaning/': '/services/commercial-downpipe-cleaning/',
  '/commercial-property-gutter-maintenance/': '/services/commercial-property-gutter-maintenance/',
  '/block-management-gutter-cleaning/': '/services/block-management-gutter-cleaning/',
  '/approved-gutter-cleaning-contractor/': '/services/approved-gutter-cleaning-contractor/',
  '/gutter-repairs-bromsgrove/': '/gutter-repair-bromsgrove/',
  '/gutter-repairs-wolverhampton/': '/gutter-repair-wolverhampton/',
  '/gutter-cleaning-cost-calculator/': '/gutter-cleaning-calculator/',
};

export function canonicalOverride(path: string): string {
  const p = path.endsWith('/') ? path : `${path}/`;
  return CANONICAL_OVERRIDES[p] ?? path;
}

type BuildMetadataInput = {
  /** Plain title; root layout appends ` | WOW Gutters Ltd` unless `absoluteTitle` is set. */
  title?: string;
  /** Full `<title>` — skips the layout template (avoids duplicate suffix like `| WOW Gutters Ltd | WOW Gutters Ltd`). */
  absoluteTitle?: string;
  description: string;
  canonicalPath?: string; // e.g. "/services/gutter-cleaning"
  ogImagePath?: string; // default: "/assets/wow-gutter-logo2.png"
  noindex?: boolean; // Prevent search engines from indexing this page
  robots?: Metadata['robots']; // Custom robots configuration (overrides noindex if provided)
};

function toAbsoluteUrl(pathname: string) {
  const base = 'https://wowgutters.co.uk';
  if (!pathname) return base;
  const joined = `${base}${pathname.startsWith('/') ? '' : '/'}${pathname}`;

  // This site is exported with `trailingSlash: true`, so canonical URLs should
  // match the final URL shape (avoid unnecessary redirects + duplicates).
  try {
    const u = new URL(joined);
    const isFileLike = /\.[a-zA-Z0-9]{1,6}$/.test(u.pathname);
    if (!isFileLike && !u.pathname.endsWith('/')) {
      u.pathname = `${u.pathname}/`;
      return u.toString().replace(/\/$/, '/') // keep single trailing slash
        .replace(/\/\?/, '/?');
    }
    return u.toString();
  } catch {
    return joined;
  }
}

export function buildMetadata(input: BuildMetadataInput): Metadata {
  const ogImage = resolveOgImage(input.ogImagePath);
  const canonical = input.canonicalPath ? toAbsoluteUrl(canonicalOverride(input.canonicalPath)) : undefined;

  const titleForTags = seoTitle(input.absoluteTitle ?? input.title ?? 'WOW Gutters Ltd');
  const titleField: Metadata['title'] = { absolute: titleForTags };
  const description = seoDescription(input.description);

  // Determine robots configuration: custom robots > noindex > undefined
  let robotsConfig: Metadata['robots'] = undefined;
  if (input.robots) {
    robotsConfig = input.robots;
  } else if (input.noindex) {
    robotsConfig = {
      index: false,
      follow: false,
    };
  }

  return {
    title: titleField,
    description,
    alternates: canonical ? { canonical } : undefined,
    robots: robotsConfig,
    openGraph: {
      title: titleForTags,
      description,
      url: canonical,
      siteName: 'WOW Gutters Ltd',
      type: 'website',
      locale: 'en_GB',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'WOW Gutters Ltd - Professional Gutter Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleForTags,
      description,
      images: [ogImage],
    },
  };
}


/** Apply seoTitle/seoDescription to a static `export const metadata` object. */
export function normalizeMetadata(m: Metadata): Metadata {
  const out: Metadata = { ...m };
  const rawTitle =
    typeof m.title === 'string' ? m.title : m.title && 'absolute' in m.title ? m.title.absolute : undefined;
  if (rawTitle) out.title = { absolute: seoTitle(rawTitle) };
  if (typeof m.description === 'string') out.description = seoDescription(m.description);
  if (m.openGraph) {
    out.openGraph = { ...m.openGraph };
    if (typeof m.openGraph.title === 'string') out.openGraph.title = seoTitle(m.openGraph.title);
    if (typeof m.openGraph.description === 'string') out.openGraph.description = seoDescription(m.openGraph.description);
  }
  if (m.twitter) {
    out.twitter = { ...m.twitter };
    if (typeof m.twitter.title === 'string') out.twitter.title = seoTitle(m.twitter.title);
    if (typeof m.twitter.description === 'string') out.twitter.description = seoDescription(m.twitter.description);
  }
  if (m.alternates?.canonical && typeof m.alternates.canonical === 'string') {
    const c = m.alternates.canonical.replace(/^https:\/\/wowgutters\.co\.uk/, '');
    const o = canonicalOverride(c);
    if (o !== c) out.alternates = { ...m.alternates, canonical: `https://wowgutters.co.uk${o}` };
  }
  return out;
}
