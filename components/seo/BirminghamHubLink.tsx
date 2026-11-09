import Link from 'next/link';
import { pickVariant } from '@/lib/localVariants';
import { BIRMINGHAM_HUB_ANCHOR, BIRMINGHAM_HUB_PATH } from '@/lib/birminghamFocus';

/**
 * One contextual link to /gutter-cleaning-birmingham/ with the exact anchor
 * "gutter cleaning Birmingham" (Nov 2026 cannibalisation fix — see lib/birminghamFocus.ts).
 * Wording varies by place so the sentence is not identical on every area page.
 */
export default function BirminghamHubLink({ place, className = '' }: { place: string; className?: string }) {
  const link = (
    <Link href={BIRMINGHAM_HUB_PATH} className="font-bold text-emerald-700 underline underline-offset-2">
      {BIRMINGHAM_HUB_ANCHOR}
    </Link>
  );
  const variants = [
    <>Also need a clean in the city itself? Our {link} page lists every B postcode we cover.</>,
    <>We are based in Birmingham (B16) and cover the whole city — see our {link} page for prices and coverage.</>,
    <>Looking further afield? Our {link} page covers every district from Sutton Coldfield to Kings Norton.</>,
    <>Need a clean elsewhere in the city? Read about our {link} service, covering B1 to B98.</>,
    <>Comparing quotes? Our {link} page explains prices, what is included and how we work.</>,
    <>Booking for more than one property? Our {link} page covers landlords, flats and homes across every B postcode.</>,
  ];
  return (
    <section className={`px-4 py-6 bg-white ${className}`} aria-label="Gutter cleaning across Birmingham">
      <p className="max-w-3xl mx-auto text-center text-slate-700 text-base leading-relaxed">
        {pickVariant(place, variants)}
      </p>
    </section>
  );
}
