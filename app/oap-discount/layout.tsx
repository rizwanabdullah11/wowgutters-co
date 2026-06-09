import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'OAP Discount — Senior Citizen Gutter Cleaning | WOW Gutters Ltd',
  description:
    'Special discounts for over-65s on professional gutter cleaning in Birmingham and the West Midlands. Trusted, insured service from WOW Gutters Ltd.',
  canonicalPath: '/oap-discount/',
});

export default function OAPDiscountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
