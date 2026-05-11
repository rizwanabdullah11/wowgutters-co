import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gutter Cleaning FAQ | West Midlands',
  description: 'Common gutter cleaning questions answered. Pricing, frequency, repairs, inspections. Birmingham & West Midlands. Call 07421 433910.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/help/',
  },
  openGraph: {
    url: 'https://wowgutters.co.uk/help/',
  },
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
