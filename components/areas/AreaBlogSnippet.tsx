import Link from 'next/link';
import { colors } from '@/constants/colors';

type AreaBlogSnippetProps = {
  /** When set, excerpt references this place (e.g. Birmingham) for local relevance */
  locality?: string;
};

export default function AreaBlogSnippet({ locality }: AreaBlogSnippetProps) {
  const excerpt = locality
    ? `In ${locality}, gutters block quickly when leaves and moss meet frequent rain. If water spills over the edge, it often tracks down brickwork and can reach soffits before you notice. We clear runs and downpipes from the ground, send photo proof, and flag anything that needs a repair — so you are not guessing what is going on up there.`
    : `Gutters are easy to forget until water starts staining walls or dripping past the fascia. Regular clearing keeps rainwater going where it should — away from your brickwork and foundations. Our engineers work from the ground with high-reach vacuums and show you before-and-after photos so you can see the difference.`;

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

        <div
          className="bg-[#ecedec] rounded-2xl rounded-l-none border-l-[6px] overflow-hidden flex flex-col sm:flex-row gap-6 p-6 sm:p-8 hover:shadow-md transition-shadow cursor-pointer"
          style={{ borderColor: colors.primary }}
        >
          <div className="w-full sm:w-[280px] shrink-0 rounded overflow-hidden aspect-video relative shadow-sm border border-gray-200">
            <img
              src="/Professional-experience.png"
              alt="Professional Gutter Cleaning Experience"
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-xl sm:text-[22px] font-normal text-gray-800 mb-3 leading-snug tracking-tight">
              The Hidden Dangers of Neglected Gutters: <br className="hidden sm:block" /> A Practical Guide for
              Homeowners{locality ? ` in ${locality}` : ''}
            </h3>
            <p className="text-[#6b7280] leading-relaxed text-[15px]">{excerpt}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
