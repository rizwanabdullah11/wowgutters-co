import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gutter Cleaning Blog | Tips & Guides | WOW Gutters',
  description: 'Expert advice on gutter cleaning, maintenance, and repairs. Read our blog for tips on keeping your gutters in top condition.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/blog/',
  },
};

export default function BlogLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
