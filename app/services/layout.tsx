import type { Metadata } from 'next';

/** Title/description only — do not set canonical here or child routes inherit /services/. */
export const metadata: Metadata = {
  title: 'Our Services | WOW Gutters Ltd',
  description:
    'Gutter cleaning, repairs, roof cleaning, uPVC and fascia care, inspections, and commercial maintenance across Birmingham and the West Midlands. Browse all WOW Gutters Ltd services.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
