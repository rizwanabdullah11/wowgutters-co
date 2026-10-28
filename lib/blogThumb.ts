import THUMBS from '@/lib/blogThumbs.json';

const HAS_THUMB = new Set<string>(THUMBS as string[]);

/**
 * Small (480px) version of a blog image for cards and related-post lists.
 * Full-size heroes are 1200px+ and were the biggest "oversized image" cost on blog pages.
 * Falls back to the original when no thumbnail exists.
 */
export function blogThumb(src: string | undefined): string {
  if (!src) return '';
  return HAS_THUMB.has(src) ? src.replace(/\.(webp|jpe?g|png)$/i, '-thumb.webp') : src;
}
