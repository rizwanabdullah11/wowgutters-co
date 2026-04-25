import Head from 'next/head';

export default function SEOMeta({
  title,
  description,
  canonicalUrl,
  ogImageUrl = 'https://wowgutters.pro/assets/wow-gutter-logo2.png',
  ogType = 'website',
  noindex = false,
}: {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImageUrl?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Head>
  );
}

