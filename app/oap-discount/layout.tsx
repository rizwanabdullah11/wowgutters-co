import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OAP Gutter Cleaning Discount',
  description: 'Exclusive discount for over-65s in Birmingham & West Midlands. WOW Gutters — trusted, insured, affordable. Call 07421 433910.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/oap-discount/',
  },
  openGraph: {
    url: 'https://wowgutters.co.uk/oap-discount/',
  },
};

export default function OAPDiscountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
