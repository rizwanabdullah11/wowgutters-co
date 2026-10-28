import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gutter Cleaning Prices Birmingham',
  description: 'Gutter cleaning from £100 (2-bed) and £110 (3-bed). Conservatory gutters £50, fascia & soffit £90, roof cleaning from £500. Birmingham & West Midlands.',
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
