import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | Gutter Cleaning Projects',
  description: 'Recent gutter cleaning & repair projects in Birmingham. Before/after photos. Commercial & residential work. See our results.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/work/',
  },
  openGraph: {
    url: 'https://wowgutters.co.uk/work/',
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
