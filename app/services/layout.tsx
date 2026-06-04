import type { Metadata } from 'next';

/** Title/description only — do not set canonical here or child routes inherit /services/. */
export const metadata: Metadata = {
  title: 'Gutter Cleaning Services',
  description:
    'Professional gutter cleaning, repairs, UPVC cleaning, roof cleaning, drain clearing and inspections across Birmingham and the West Midlands. View all WOW Gutters services.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
