'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HotWashRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/services/hot-wash-cleaning/');
  }, [router]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>Redirecting to hot wash cleaning service...</p>
    </div>
  );
}
