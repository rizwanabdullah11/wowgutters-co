import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Customer Reviews | WOW Gutters Ltd',
  description:
    'Read verified Google reviews for WOW Gutters Ltd — 4.9★ on Google across Birmingham and the West Midlands.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/reviews/',
  },
  robots: { index: false, follow: true },
};

/** Legacy URL — reviews are loaded dynamically on /reviews */
export default function TestimonialsPage() {
  redirect('/reviews/');
}
