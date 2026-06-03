import { formatNapAddress, WOW_GUTTERS_NAP, gbpProfileUrl } from '@/lib/businessDetails';

const DEFAULT_EMBED_KEY = 'AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8';

function embedApiKey(): string {
  return (process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY || '').trim() || DEFAULT_EMBED_KEY;
}

export function mapsPlaceEmbedSrc(query: string, zoom = 11): string {
  return `https://www.google.com/maps/embed/v1/place?key=${embedApiKey()}&q=${encodeURIComponent(query)}&zoom=${zoom}`;
}

/** HQ / GBP location map for contact and citations pages */
export function businessMapEmbedSrc(zoom = 14): string {
  const line1 = (process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE1 || '').trim();
  const city = (process.env.NEXT_PUBLIC_BUSINESS_CITY || '').trim();
  const postcode = (process.env.NEXT_PUBLIC_BUSINESS_POSTCODE || '').trim();
  const query =
    line1 && city && postcode
      ? `${WOW_GUTTERS_NAP.name}, ${[line1, city, postcode].filter(Boolean).join(', ')}, UK`
      : `${WOW_GUTTERS_NAP.name}, ${formatNapAddress()}, UK`;
  return mapsPlaceEmbedSrc(query, zoom);
}

export function businessMapExternalUrl(): string {
  return (
    gbpProfileUrl() ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${WOW_GUTTERS_NAP.name} ${formatNapAddress()}`
    )}`
  );
}
