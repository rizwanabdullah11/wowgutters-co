import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Redirecting...',
};

export default function BirminghamPage() {
  redirect('/gutter-cleaning-birmingham/');
}

