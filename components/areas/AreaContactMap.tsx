import { colors } from '@/constants/colors';

/** Centre of Birmingham (PDF / geo target). */
const BIRMINGHAM_MAP_EMBED_SRC =
  'https://www.openstreetmap.org/export/embed.html?bbox=-1.995%2C52.385%2C-1.785%2C52.595&layer=mapnik&marker=52.4862%2C-1.8904';

type AreaContactMapProps = {
  /** Use Birmingham-centred map instead of generic placeholder. */
  variant?: 'default' | 'birmingham';
};

export default function AreaContactMap({ variant = 'default' }: AreaContactMapProps) {
  return (
    <section className="relative overflow-hidden w-full flex flex-col">
      <div
        className="w-full pt-16 pb-12 flex flex-col items-center justify-center text-center px-4 relative z-10"
        style={{ backgroundColor: colors.primary }}
      >
        <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="w-full h-[40px] block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,60 C480,0 960,60 1440,0 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0f172a] mb-2 uppercase tracking-tight drop-shadow-sm">
          CALL US TODAY!
        </h2>
        <p className="text-white sm:text-lg mb-6 font-medium tracking-wide">
          Please give us a call on 07421 433910.
        </p>

        <a
          href="tel:07421433910"
          className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-[15px] font-bold px-8 py-3 rounded shadow-md transition-colors"
        >
          Call Now: 07421 433910
        </a>
      </div>

      {variant === 'birmingham' ? (
        <div className="w-full h-[400px] sm:h-[420px] bg-[#e8efe8] border-t border-slate-200">
          <iframe
            title="WOW Gutters — Birmingham service area map"
            src={BIRMINGHAM_MAP_EMBED_SRC}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ) : null}
    </section>
  );
}
