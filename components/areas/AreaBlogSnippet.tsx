import Link from 'next/link';
import { colors } from '@/constants/colors';

export default function AreaBlogSnippet() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-4xl font-black text-[#0f172a] tracking-tight">EXPERT INSIGHTS</h2>
          <Link href="/blog" className="text-gray-500 hover:text-gray-900 text-sm font-medium mt-1">[See all]</Link>
          <div className="h-px bg-gray-300 flex-1 ml-4"></div>
        </div>

        <div className="bg-[#ecedec] rounded-2xl rounded-l-none border-l-[6px] overflow-hidden flex flex-col sm:flex-row gap-6 p-6 sm:p-8 hover:shadow-md transition-shadow cursor-pointer" style={{ borderColor: colors.primary }}>
          <div className="w-full sm:w-[280px] shrink-0 rounded overflow-hidden aspect-video relative shadow-sm border border-gray-200">
            <img 
              src="/Professional-experience.png" 
              alt="Professional Gutter Cleaning Experience" 
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-xl sm:text-[22px] font-normal text-gray-800 mb-3 leading-snug tracking-tight">
              The Hidden Dangers of Neglected Gutters: <br className="hidden sm:block"/> A Crucial Guide for Homeowners
            </h3>
            <p className="text-[#6b7280] leading-relaxed text-[15px]">
              Consistent exterior maintenance is far more critical than most assume. An astonishing number of property owners disregard their drainage systems until a catastrophic blockage appears. Obstructed pipework frequently triggers damp penetration, structural deterioration, and inflated repair bills. Our dedicated technicians rely on proven techniques to maintain unimpeded water flow, securing your home's foundation against [...]
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
