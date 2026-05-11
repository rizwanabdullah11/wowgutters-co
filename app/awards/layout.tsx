import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Awards & Recognition',
  description: 'WOW Gutters awards & recognition. 4.9★ rated, 2,696+ reviews. Trusted Birmingham & West Midlands gutter cleaning service.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/awards/',
  },
  openGraph: {
    url: 'https://wowgutters.co.uk/awards/',
  },
};

export default function AwardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
