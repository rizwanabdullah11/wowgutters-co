'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactUsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/contact/');
  }, [router]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>Redirecting to contact page...</p>
    </div>
  );
}
