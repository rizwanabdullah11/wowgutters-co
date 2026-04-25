import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | WOW Gutters - Expert Gutter Maintenance & Tips',
  description: 'Explore the WOW Gutters blog for professional gutter cleaning tips, maintenance guides, and industry insights to protect your UK property from water damage.',
  openGraph: {
    title: 'WOW Gutters Blog | Professional Gutter Advice',
    description: 'Expert advice and maintenance tips to help you protect your property from the elements.',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
