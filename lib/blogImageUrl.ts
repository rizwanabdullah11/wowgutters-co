/** Absolute URL for blog hero/OG images (local `/public/...` or external CDN). */
export function resolveBlogImageUrl(image: string): string {
  if (/^https?:\/\//i.test(image)) return image;
  return `https://wowgutters.co.uk${image.startsWith('/') ? image : `/${image}`}`;
}
