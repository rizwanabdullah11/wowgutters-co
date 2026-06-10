import type { Metadata } from 'next';
import { lowValuePageRobots } from '@/lib/lowValuePageSeo';

export const metadata: Metadata = {
  title: 'Awards & Recognition',
  description: 'WOW Gutters Ltd awards & recognition. 4.9★ rated, 2,696+ reviews. Trusted Birmingham & West Midlands gutter cleaning service.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/awards/',
  },
  openGraph: {
    url: 'https://wowgutters.co.uk/awards/',
  },
  robots: lowValuePageRobots,
};

export default function AwardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
