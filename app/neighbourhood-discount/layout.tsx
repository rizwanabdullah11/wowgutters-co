import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neighbourhood Discount | Group Gutter Cleaning',
  description: 'Group gutter cleaning discount. Get neighbours together & save. Birmingham & West Midlands. Everyone pays less. Call 07421 433910.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/neighbourhood-discount/',
  },
  openGraph: {
    url: 'https://wowgutters.co.uk/neighbourhood-discount/',
  },
};

export default function NeighbourhoodDiscountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
