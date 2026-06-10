import Link from 'next/link';
import { businessMapEmbedSrc, businessMapExternalUrl } from '@/lib/mapsEmbed';

type GoogleMapsEmbedProps = {
  title?: string;
  className?: string;
  heightClass?: string;
  showOpenLink?: boolean;
};

export default function GoogleMapsEmbed({
  title = 'WOW Gutters Ltd — Birmingham & West Midlands service area',
  className = '',
  heightClass = 'h-[360px] sm:h-[420px]',
  showOpenLink = true,
}: GoogleMapsEmbedProps) {
  const mapUrl = businessMapExternalUrl();

  return (
    <div className={className}>
      <div className={`overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm ${heightClass}`}>
        <iframe
          title={title}
          src={businessMapEmbedSrc()}
          className="h-full w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {showOpenLink ? (
        <p className="mt-3 text-center text-sm text-slate-600">
          <Link
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
          >
            Open in Google Maps
          </Link>
          <span className="text-slate-500"> — directions, reviews, and our Google Business Profile</span>
        </p>
      ) : null}
    </div>
  );
}
