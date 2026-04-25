import { notFound } from 'next/navigation';
import { blogPosts } from '@/constants/blogData';
import BlogDetailContent from '@/components/blog/BlogDetailContent';
import { Metadata } from 'next';

interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata(props: BlogPageProps): Promise<Metadata> {
  const params = await props.params;
  const { id } = params;
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return {
      title: 'Post Not Found | WOW Gutters',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} | WOW Gutters Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'WOW Gutter Experts'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    }
  };
}

export default async function BlogPostPage(props: BlogPageProps) {
  const params = await props.params;
  const { id } = params;
  
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    notFound();
  }

  return <BlogDetailContent post={post} />;
}
