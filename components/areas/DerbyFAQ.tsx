'use client';

import CollapsibleAreaFAQ from '@/components/areas/CollapsibleAreaFAQ';
import { DERBY_AREA_FAQS } from '@/constants/derbyFaqs';

export default function DerbyFAQ() {
  return (
    <CollapsibleAreaFAQ
      city="Derby"
      faqs={DERBY_AREA_FAQS}
      heading="Gutter Cleaning Derby - Questions Answered"
    />
  );
}