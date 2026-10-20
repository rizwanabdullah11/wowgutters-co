import LatestNewsClient, { type NewsArticle } from './LatestNewsClient';
import { getAllBlogSummaries } from '@/lib/blogSummaries';

/** Server wrapper: lists the 12 newest blog posts (was 3 hard-coded cards — thin page). */
export default function LatestNewsPage() {
  const articles: NewsArticle[] = getAllBlogSummaries()
    .filter((p) => p.id && p.title)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
    .slice(0, 12)
    .map((p) => ({
      slug: p.id,
      title: p.title,
      excerpt: p.excerpt,
      date: p.date,
      category: p.category || 'Gutter Advice',
    }));
  return <LatestNewsClient newsArticles={articles} />;
}
