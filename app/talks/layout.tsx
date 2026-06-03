import type { Metadata } from 'next';
import { lowValuePageRobots } from '@/lib/lowValuePageSeo';

export const metadata: Metadata = {
  title: 'Gutter Cleaning Guides | Expert Tips',
  description: 'Expert gutter cleaning guides. Maintenance tips, seasonal advice, DIY vs professional. Birmingham & West Midlands specialists.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/talks/',
  },
  openGraph: {
    url: 'https://wowgutters.co.uk/talks/',
  },
  robots: lowValuePageRobots,
};

export default function TalksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
