import Link from 'next/link';
import { colors } from '@/constants/colors';
import { blogPosts, type BlogPost } from '@/constants/blogData';

type AreaBlogSnippetProps = {
  locality?: string;
};

function findLocalBlogPosts(locality?: string, max = 2): BlogPost[] {
  if (!locality) return [];
  const slug = locality.toLowerCase().replace(/\s+/g, '-');
  const matches = blogPosts.filter(
    (p) => p.id.startsWith('gutter-cleaning-') && p.id.includes(slug)
  );
  if (matches.length <= max) return matches;

  const exact = matches.filter((p) => new RegExp(`gutter-cleaning-${slug}(-|$)`).test(p.id));
  if (exact.length >= max) return exact.slice(0, max);
  return matches.slice(0, max);
}

export default function AreaBlogSnippet({ locality }: AreaBlogSnippetProps) {
  const localPosts = findLocalBlogPosts(locality);

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

        <div className="space-y-6">
          {localPosts.length > 0 ? (
            localPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}/`}
                className="bg-[#ecedec] rounded-2xl rounded-l-none border-l-[6px] overflow-hidden flex flex-col sm:flex-row gap-6 p-6 sm:p-8 hover:shadow-md transition-shadow cursor-pointer block"
                style={{ borderColor: colors.primary }}
              >
                <div className="w-full sm:w-[280px] shrink-0 rounded overflow-hidden aspect-video relative shadow-sm border border-gray-200">
                  <img
                    src={post.image ?? '/professional-gutter-clean.png'}
                    alt={post.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-[22px] font-normal text-gray-800 mb-3 leading-snug tracking-tight">
                    {post.title}
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed text-[15px]">{post.excerpt}</p>
                  <p className="text-sm font-semibold mt-4" style={{ color: colors.primary }}>
                    Read the full {locality ?? 'local'} guide →
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <Link
              href="/blog/"
              className="bg-[#ecedec] rounded-2xl rounded-l-none border-l-[6px] overflow-hidden flex flex-col sm:flex-row gap-6 p-6 sm:p-8 hover:shadow-md transition-shadow cursor-pointer block"
              style={{ borderColor: colors.primary }}
            >
              <div className="w-full sm:w-[280px] shrink-0 rounded overflow-hidden aspect-video relative shadow-sm border border-gray-200">
                <img
                  src="/professional-gutter-clean.png"
                  alt="Professional Gutter Cleaning"
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl sm:text-[22px] font-normal text-gray-800 mb-3 leading-snug tracking-tight">
                  {locality
                    ? `The Hidden Dangers of Neglected Gutters: A Practical Guide for Homeowners in ${locality}`
                    : 'The Hidden Dangers of Neglected Gutters: A Practical Guide for Homeowners'}
                </h3>
                <p className="text-[#6b7280] leading-relaxed text-[15px]">
                  {locality
                    ? `In ${locality}, gutters block quickly when leaves and moss meet frequent rain. If water spills over the edge, it often tracks down brickwork and can reach soffits before you notice. We clear runs and downpipes from the ground, send photo proof, and flag anything that needs a repair — so you are not guessing what is going on up there.`
                    : 'Gutters are easy to forget until water starts staining walls or dripping past the fascia. Regular clearing keeps rainwater going where it should — away from your brickwork and foundations.'}
                </p>
                <p className="text-sm font-semibold mt-4" style={{ color: colors.primary }}>
                  Read the full {locality ?? 'local'} guide →
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
