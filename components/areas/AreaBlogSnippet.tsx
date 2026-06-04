import Link from 'next/link';
import { colors } from '@/constants/colors';
import { blogPosts } from '@/constants/blogData';

type AreaBlogSnippetProps = {
  /** When set, excerpt references this place (e.g. Birmingham) for local relevance */
  locality?: string;
};

function findLocalBlogPost(locality?: string) {
  if (!locality) return undefined;
  const slug = locality.toLowerCase().replace(/\s+/g, '-');
  const matches = blogPosts.filter(
    (p) => p.id.startsWith('gutter-cleaning-') && p.id.includes(slug)
  );
  if (matches.length === 1) return matches[0];
  return matches.find((p) => new RegExp(`gutter-cleaning-${slug}(-|$)`).test(p.id));
}

export default function AreaBlogSnippet({ locality }: AreaBlogSnippetProps) {
  const localPost = findLocalBlogPost(locality);
  const href = localPost ? `/blog/${localPost.id}/` : '/blog/';

  const excerpt = localPost
    ? localPost.excerpt
    : locality
      ? `In ${locality}, gutters block quickly when leaves and moss meet frequent rain. If water spills over the edge, it often tracks down brickwork and can reach soffits before you notice. We clear runs and downpipes from the ground, send photo proof, and flag anything that needs a repair - so you are not guessing what is going on up there.`
      : `Gutters are easy to forget until water starts staining walls or dripping past the fascia. Regular clearing keeps rainwater going where it should - away from your brickwork and foundations. Our engineers work from the ground with high-reach vacuums and show you before-and-after photos so you can see the difference.`;

  const title = localPost
    ? localPost.title
    : `The Hidden Dangers of Neglected Gutters: A Practical Guide for Homeowners${locality ? ` in ${locality}` : ''}`;

  const image = localPost?.image ?? '/Professional-experience.png';
  const imageAlt = localPost?.title ?? 'Professional Gutter Cleaning Experience';

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-4xl font-black text-[#0f172a] tracking-tight">EXPERT INSIGHTS</h2>
          <Link href="/blog" className="text-gray-500 hover:text-gray-900 text-sm font-medium mt-1">
            [See all]
          </Link>
          <div className="h-px bg-gray-300 flex-1 ml-4" />
        </div>

        <Link
          href={href}
          className="bg-[#ecedec] rounded-2xl rounded-l-none border-l-[6px] overflow-hidden flex flex-col sm:flex-row gap-6 p-6 sm:p-8 hover:shadow-md transition-shadow cursor-pointer block"
          style={{ borderColor: colors.primary }}
        >
          <div className="w-full sm:w-[280px] shrink-0 rounded overflow-hidden aspect-video relative shadow-sm border border-gray-200">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-xl sm:text-[22px] font-normal text-gray-800 mb-3 leading-snug tracking-tight">
              {title}
            </h3>
            <p className="text-[#6b7280] leading-relaxed text-[15px]">{excerpt}</p>
            {localPost && (
              <p className="text-sm font-semibold mt-4" style={{ color: colors.primary }}>
                Read the full {locality ?? 'local'} guide →
              </p>
            )}
          </div>
        </Link>
      </div>
    </section>
  );
}
