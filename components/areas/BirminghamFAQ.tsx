'use client';

import CollapsibleAreaFAQ from '@/components/areas/CollapsibleAreaFAQ';
import { BIRMINGHAM_AREA_FAQS } from '@/constants/birminghamFaqs';

export default function BirminghamFAQ() {
  return (
    <CollapsibleAreaFAQ
      city="Birmingham"
      faqs={BIRMINGHAM_AREA_FAQS}
      heading="Gutter Cleaning Birmingham - Questions Answered"
    />
  );
}
