import type { Metadata } from 'next';

type BuildMetadataInput = {
  title: string;
  description: string;
  canonicalPath?: string; // e.g. "/services/gutter-cleaning"
  keywords?: string[];
  ogImagePath?: string; // default: "/assets/wow-gutter-logo2.png"
};

function toAbsoluteUrl(pathname: string) {
  const base = 'https://wowgutters.co.uk';
  if (!pathname) return base;
  return `${base}${pathname.startsWith('/') ? '' : '/'}${pathname}`;
}

export function buildMetadata(input: BuildMetadataInput): Metadata {
  const ogImage = input.ogImagePath ?? '/assets/wow-gutter-logo2.png';
  const canonical = input.canonicalPath ? toAbsoluteUrl(input.canonicalPath) : undefined;

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: input.title,
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
      title: input.title,
      description: input.description,
      images: [ogImage],
      creator: '@wowgutters',
    },
  };
}

