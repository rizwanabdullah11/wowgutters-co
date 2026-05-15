'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CommercialRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/services/commercial/');
  }, [router]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>Redirecting to commercial services...</p>
    </div>
  );
}
