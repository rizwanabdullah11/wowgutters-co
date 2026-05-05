import type { Metadata } from 'next';

type BuildMetadataInput = {
  /** Plain title; root layout appends ` | WOW Gutters` unless `absoluteTitle` is set. */
  title?: string;
  /** Full `<title>` — skips the layout template (avoids duplicate suffix like `| WOW Gutters | WOW Gutters`). */
  absoluteTitle?: string;
  description: string;
  canonicalPath?: string; // e.g. "/services/gutter-cleaning"
  ogImagePath?: string; // default: "/assets/wow-gutter-logo2.png"
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
  const ogImage = input.ogImagePath ?? '/og/default.jpg';
  const canonical = input.canonicalPath ? toAbsoluteUrl(input.canonicalPath) : undefined;

  const titleForTags = input.absoluteTitle ?? input.title ?? 'WOW Gutters';
  const titleField: Metadata['title'] = input.absoluteTitle
    ? { absolute: input.absoluteTitle }
    : input.title ?? 'WOW Gutters';

  return {
    title: titleField,
    description: input.description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: titleForTags,
      description: input.description,
      url: canonical,
      siteName: 'WOW Gutters',
      type: 'website',
      locale: 'en_GB',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'WOW Gutters - Professional Gutter Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleForTags,
      description: input.description,
      images: [ogImage],
    },
  };
}

