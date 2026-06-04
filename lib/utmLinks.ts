/** Canonical site origin for UTM-tagged marketing links (GA4 attribution). */
export const SITE_ORIGIN = 'https://wowgutters.co.uk';

export type UtmParams = {
  source: string;
  medium: string;
  campaign?: string;
  content?: string;
  term?: string;
};

/** Append standard UTM parameters to an on-site path or absolute wowgutters.co.uk URL. */
export function withUtm(path: string, utm: UtmParams): string {
  const normalized = path.startsWith('http')
    ? path
    : `${SITE_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`;
  const url = new URL(normalized);
  url.searchParams.set('utm_source', utm.source);
  url.searchParams.set('utm_medium', utm.medium);
  if (utm.campaign) url.searchParams.set('utm_campaign', utm.campaign);
  if (utm.content) url.searchParams.set('utm_content', utm.content);
  if (utm.term) url.searchParams.set('utm_term', utm.term);
  return url.toString();
}

/** Copy-paste destination URLs for paid/social/GBP (audit 13.06). */
export const MARKETING_DESTINATION_URLS = {
  quoteGbpPost: withUtm('/quote/', {
    source: 'google',
    medium: 'organic',
    campaign: 'gbp_post',
    content: 'cta_quote',
  }),
  quoteMetaAds: withUtm('/quote/', {
    source: 'facebook',
    medium: 'paid',
    campaign: 'meta_ads',
    content: 'lead_form',
  }),
  quoteFacebookOrganic: withUtm('/quote/', {
    source: 'facebook',
    medium: 'social',
    campaign: 'organic_post',
  }),
  quoteInstagram: withUtm('/quote/', {
    source: 'instagram',
    medium: 'social',
    campaign: 'organic_post',
  }),
  homeGbpPost: withUtm('/', {
    source: 'google',
    medium: 'organic',
    campaign: 'gbp_post',
    content: 'brand',
  }),
  contactGbp: withUtm('/contact/', {
    source: 'google',
    medium: 'organic',
    campaign: 'gbp_post',
    content: 'contact',
  }),
} as const;
