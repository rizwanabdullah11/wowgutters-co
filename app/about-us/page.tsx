'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AboutUsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/about/');
  }, [router]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>Redirecting to about page...</p>
    </div>
  );
}
