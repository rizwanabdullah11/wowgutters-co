const STORAGE_KEY = 'wowgutters-blog-views';
const SESSION_KEY = 'wowgutters-blog-viewed-session';

function hashSlug(id: string): number {
  return [...id].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

/** Plausible starting count from publish date — avoids showing "0 views" on new posts. */
export function seedBlogViews(postId: string, publishedDate?: string): number {
  const published = publishedDate ? new Date(publishedDate) : new Date('2026-01-01');
  const days = Math.max(0, Math.floor((Date.now() - published.getTime()) / 86_400_000));
  const base = 48 + (hashSlug(postId) % 180);
  const daily = 1.1 + (hashSlug(postId) % 7) / 10;
  return base + Math.floor(days * daily);
}

function readStore(): Record<string, number> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, number>) : {};
  } catch {
    return {};
  }
}

function writeStore(store: Record<string, number>): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // ignore quota errors
  }
}

export function getBlogViews(postId: string, publishedDate?: string): number {
  const stored = readStore()[postId];
  if (typeof stored === 'number' && stored > 0) return stored;
  return seedBlogViews(postId, publishedDate);
}

/** Increment once per browser session when a post detail page is opened. */
export function incrementBlogView(postId: string, publishedDate?: string): number {
  const current = getBlogViews(postId, publishedDate);

  if (typeof window === 'undefined') return current;

  try {
    const viewed = JSON.parse(sessionStorage.getItem(SESSION_KEY) || '[]') as string[];
    if (!viewed.includes(postId)) {
      const next = current + 1;
      const store = readStore();
      store[postId] = next;
      writeStore(store);
      sessionStorage.setItem(SESSION_KEY, JSON.stringify([...viewed, postId]));
      return next;
    }
  } catch {
    return current + 1;
  }

  return current;
}

export function formatBlogViews(count: number): string {
  return count.toLocaleString('en-GB');
}
