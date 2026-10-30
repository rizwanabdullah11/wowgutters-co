/**
 * Canonical business entity for structured data. Use BUSINESS_ID / businessEntityNode() everywhere
 * instead of declaring a new LocalBusiness per page (Oct 2026 audit: ~580 differently named
 * "WOW Gutters Ltd — <town>" entities fragmented the business in Google's eyes).
 */
import entity from '@/lib/business-entity.json';
import { SOCIAL_PROFILES } from '@/lib/businessDetails';

export const BUSINESS_ID = 'https://wowgutters.co.uk/#business';
export const SITE_URL = 'https://wowgutters.co.uk';

export function businessEntityNode(extra: Record<string, unknown> = {}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _comment, ...node } = entity as Record<string, unknown>;
  return {
    ...node,
    sameAs: SOCIAL_PROFILES.map((p) => p.url),
    ...extra,
  };
}

/** Lightweight reference for provider / publisher / about fields. */
export const businessRef = { '@id': BUSINESS_ID } as const;
