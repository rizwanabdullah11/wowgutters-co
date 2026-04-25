import HotWashPage from '@/components/services/HotWashPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hot Wash Cleaning | WOW Gutters',
  description: 'Industrial Hot Wash systems for tough dirt, grease, and biological growth.',
};

export default function Page() {
  return <HotWashPage />;
}
