import type { Metadata } from 'next';
import { lowValuePageRobots } from '@/lib/lowValuePageSeo';

export const metadata: Metadata = {
  title: 'Our Work | Gutter Cleaning Projects',
  description: 'Recent gutter cleaning & repair projects in Birmingham. Before/after photos. Commercial & residential work. See our results.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/work/',
  },
  openGraph: {
    url: 'https://wowgutters.co.uk/work/',
  },
  robots: lowValuePageRobots,
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
