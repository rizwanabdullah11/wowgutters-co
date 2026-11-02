import { blogThumb } from '@/lib/blogThumb';
import Link from 'next/link';
import { colors } from '@/constants/colors';
import { blogPosts, type BlogPost } from '@/constants/blogData';
import legacyPathRedirects from '@/scripts/legacy-path-redirects.json';
import { pickMany } from '@/lib/localVariants';

type AreaBlogSnippetProps = {
  locality?: string;
};

/** Blog posts that now 301 elsewhere — never link to them. */
const REDIRECTED_BLOG_IDS = new Set<string>([
  ...Object.keys(legacyPathRedirects as Record<string, string>)
    .filter((k) => k.startsWith('blog/'))
    .map((k) => k.slice('blog/'.length)),
  'gutter-cleaning-walsall',
  'gutter-cleaning-solihull',
]);

/**
 * Real topic guides. Each area page shows two of them, chosen from the area name, so the
 * "Expert insights" block differs from page to page (it used to show the same invented
 * "Hidden Dangers…" paragraph on 54 area pages — duplicate content).
 */
const TOPIC_POST_IDS = [
  'gutter-cleaning-cost-guide',
  'how-often-should-gutters-be-cleaned',
  'downpipe-blocked-signs-birmingham-homes',
  'gutter-cleaning-before-winter',
  'clogged-gutters-signs',
  'leaves-in-gutters',
  'overflowing-gutters-fix',
  'stop-gutters-blocking',
  'gutter-water-damage-guide',
  'damp-external-wall-gutters',
  'terraced-house-gutters',
  'bungalow-gutter-cleaning',
  'victorian-gutter-cleaning-birmingham',
  'tree-gutter-cleaning',
  'roof-moss-damage',
  'ladder-free-gutter-cleaning',
  'gutters-full-of-weeds',
  'dripping-gutter-joints',
  'autumn-leaf-buildup',
  'wind-debris-gutters',
];

const liveTopicPosts = (): BlogPost[] =>
  TOPIC_POST_IDS.map((id) => blogPosts.find((p) => p.id === id)).filter(
    (p): p is BlogPost => Boolean(p) && !REDIRECTED_BLOG_IDS.has((p as BlogPost).id),
  );

function postsFor(locality?: string, max = 2): BlogPost[] {
  if (locality) {
    const slug = locality.toLowerCase().replace(/\s+/g, '-');
    const local = blogPosts.filter(
      (p) => !REDIRECTED_BLOG_IDS.has(p.id) && p.id.includes(slug) && !p.id.startsWith('gutter-cleaning-'),
    );
    if (local.length >= max) return local.slice(0, max);
    const topics = pickMany(locality, liveTopicPosts(), max - local.length);
    return [...local, ...topics];
  }
  return liveTopicPosts().slice(0, max);
}

export default function AreaBlogSnippet({ locality }: AreaBlogSnippetProps) {
  const posts = postsFor(locality);
  if (posts.length === 0) return null;

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-4xl font-black text-[#0f172a] tracking-tight">EXPERT INSIGHTS</h2>
          <Link href="/blog/" className="text-gray-600 hover:text-gray-900 text-sm font-medium mt-1">
            [See all]
          </Link>
          <div className="h-px bg-gray-300 flex-1 ml-4" />
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}/`}
              className="bg-[#ecedec] rounded-2xl rounded-l-none border-l-[6px] overflow-hidden flex flex-col sm:flex-row gap-6 p-6 sm:p-8 hover:shadow-md transition-shadow cursor-pointer block"
              style={{ borderColor: colors.primary }}
            >
              <div className="w-full sm:w-[280px] shrink-0 rounded overflow-hidden aspect-video relative shadow-sm border border-gray-200">
                <img
                  src={blogThumb(post.image) || '/professional-gutter-clean.webp'}
                  alt={post.title}
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl sm:text-[22px] font-normal text-gray-800 mb-3 leading-snug tracking-tight">
                  {post.title}
                </h3>
                <p className="text-[#4b5563] leading-relaxed text-[15px]">{post.excerpt}</p>
                <p className="text-sm font-semibold mt-4" style={{ color: colors.primaryText }}>
                  Read the guide →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
