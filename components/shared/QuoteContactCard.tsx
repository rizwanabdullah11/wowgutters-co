import Link from 'next/link';
import { colors } from '@/constants/colors';

type QuoteContactCardProps = {
  buttonLabel?: string;
  helperText?: string;
  phoneNumber?: string;
  className?: string;
};

export default function QuoteContactCard({
  buttonLabel = 'Book Now',
  helperText = 'Want to speak to someone?',
  phoneNumber = '07421 433910',
  className = '',
}: QuoteContactCardProps) {
  return (
    <div
      className={`w-full max-w-[350px] bg-[#f5f7f8] rounded-[18px] p-6 md:p-7 shadow-[0_10px_26px_rgba(2,6,23,0.14)] border border-[rgba(15,23,42,0.06)] ${className}`}
    >
      <Link
        href="/quote"
        className="w-full min-h-[72px] md:min-h-[94px] rounded-xl text-white text-[1.9rem] md:text-[2.1rem] font-black tracking-[0.2px] bg-[length:100%_100%] shadow-[0_8px_18px_rgba(25,197,139,0.28)] hover:translate-y-[-1px] hover:shadow-[0_10px_24px_rgba(25,197,139,0.35)] transition-all inline-flex items-center justify-center gap-3"
        style={{ background: colors.primaryGradient }}
      >
        <span className="text-[2.2rem] md:text-[2.75rem] leading-none font-normal">›</span>
        <span>{buttonLabel}</span>
      </Link>

      <p className="mt-5 md:mt-6 mb-2 text-slate-500 font-semibold text-[15px] md:text-lg">{helperText}</p>

      <a
        href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
        className="inline-block whitespace-nowrap text-[2.35rem] sm:text-[2.6rem] md:text-[3rem] leading-none font-black tracking-[1px]"
        style={{ color: colors.primary }}
      >
        {phoneNumber}
      </a>
    </div>
  );
}

