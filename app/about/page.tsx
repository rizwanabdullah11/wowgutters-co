import type { Metadata } from 'next';
import ServiceRedirect from '@/components/services/ServiceRedirect';

const TARGET = '/about-us/';

export const metadata: Metadata = {
  title: 'About Us | WOW Gutters',
  description: 'About WOW Gutters — professional gutter cleaning across Birmingham and the West Midlands.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/about-us/',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AboutRedirectPage() {
  return <ServiceRedirect target={TARGET} label="about us page" />;
}
