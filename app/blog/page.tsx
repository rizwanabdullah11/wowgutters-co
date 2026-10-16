import BlogIndexClient from '@/components/blog/BlogIndexClient';
import { getAllBlogSummaries } from '@/lib/blogSummaries';

export default function BlogPage() {
  return <BlogIndexClient blogPosts={getAllBlogSummaries()} />;
}
