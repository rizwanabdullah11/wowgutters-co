'use client';

import Link from 'next/link';
import { SEO_KEYWORD_LINKS } from '@/constants/seoKeywordLinks';

export default function SeoKeywordLinks() {
  return (
    <div className="wow-seo-keywords" aria-label="Popular searches">
      <div className="wow-seo-keywords__title">Popular searches</div>
      <div className="wow-seo-keywords__list">
        {SEO_KEYWORD_LINKS.map((item) => (
          <Link key={item.label} href={item.href} className="wow-seo-keywords__link">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

