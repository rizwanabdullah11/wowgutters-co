import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Latest News | Gutter Cleaning Updates',
  description: 'Latest gutter cleaning news & updates. Seasonal tips, maintenance advice, company news. Birmingham & West Midlands specialists.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/latest-news/',
  },
  openGraph: {
    url: 'https://wowgutters.co.uk/latest-news/',
  },
};

export default function LatestNewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
