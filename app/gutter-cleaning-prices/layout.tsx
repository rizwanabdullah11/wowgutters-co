import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gutter Cleaning Prices Birmingham',
  description: 'Transparent gutter cleaning prices from £50. Houses, bungalows, commercial. Birmingham & West Midlands. Free quotes.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/gutter-cleaning-prices/',
  },
  openGraph: {
    url: 'https://wowgutters.co.uk/gutter-cleaning-prices/',
  },
};

export default function PricesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
