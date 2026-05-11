import type { Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Gutter Cleaning Cost Calculator',
  description: 'Calculate gutter cleaning costs for your Birmingham property instantly. Estimates by property type. From £50. Free quotes available.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/gutter-cleaning-calculator/',
  },
  openGraph: {
    url: 'https://wowgutters.co.uk/gutter-cleaning-calculator/',
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
