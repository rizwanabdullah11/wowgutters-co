import { blogPosts } from '@/constants/blogData';
import type { BlogPost } from '@/constants/blogTypes';

/**
 * Lightweight post cards for client components (Oct 2026 performance pass).
 * Passing full posts (with HTML content) to the browser shipped ~2.8 MB of JS
 * on every blog page; cards only need these fields.
 */
export type BlogSummary = Pick<BlogPost, 'id' | 'title' | 'excerpt' | 'image' | 'date' | 'category' | 'author' | 'featured'>;

export function toSummary(p: BlogPost): BlogSummary {
  return {
    id: p.id,
    title: p.title,
    excerpt: p.excerpt,
    image: p.image,
    date: p.date,
    category: p.category,
    author: p.author,
    featured: p.featured,
  };
}

export function getAllBlogSummaries(): BlogSummary[] {
  return blogPosts.map(toSummary);
}

export function getRelatedBlogSummaries(post: Pick<BlogPost, 'id' | 'category'>, limit = 3): BlogSummary[] {
  const same = blogPosts.filter((p) => p.id !== post.id && p.category === post.category);
  const other = blogPosts.filter((p) => p.id !== post.id && p.category !== post.category);
  return [...same, ...other].slice(0, limit).map(toSummary);
}
