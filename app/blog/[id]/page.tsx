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

  // Noindex off-topic blog posts
  const OFF_TOPIC_POSTS = [
    'dome-cleaning-service-wow-gutters',
    'road-sign-cleaning-community'
  ];
  
  const isOffTopic = OFF_TOPIC_POSTS.includes(id);

  const canonicalUrl = `https://wowgutters.co.uk/blog/${id}`;

  return {
    title: `${post.title} | WOW Gutters`,
    description: post.excerpt,
    keywords: `${post.category}, gutter cleaning, gutter maintenance, blocked gutters, gutter repair, ${id.replace(/-/g, ' ')}`,
    authors: [{ name: post.author || 'WOW Gutters Technical Team' }],
    alternates: {
      canonical: canonicalUrl,
    },
    robots: isOffTopic ? {
      index: false,
      follow: true,
    } : {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{
        url: `https://wowgutters.co.uk${post.image}`,
        width: 1200,
        height: 630,
        alt: post.title
      }],
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastUpdated || post.date,
      authors: [post.author || 'WOW Gutters Technical Team'],
      url: canonicalUrl,
      siteName: 'WOW Gutters',
      locale: 'en_GB'
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`https://wowgutters.co.uk${post.image}`],
      creator: '@wowgutters',
      site: '@wowgutters'
    },
    other: {
      'article:published_time': post.date,
      'article:modified_time': post.lastUpdated || post.date,
      'article:author': post.author || 'WOW Gutters Technical Team',
      'article:section': post.category || 'Maintenance'
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
