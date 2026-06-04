import { CONTENT_LAST_UPDATED } from '@/lib/contentFreshness';

type Props = {
  className?: string;
};

/** Visible freshness signal for service pages (audit 14.03). */
export default function ContentUpdatedNotice({ className = '' }: Props) {
  return (
    <p className={`text-sm text-slate-500 ${className}`.trim()}>
      Page last updated: <time dateTime="2026-06-02">{CONTENT_LAST_UPDATED}</time> — pricing and seasonal
      guidance reviewed for West Midlands properties.
    </p>
  );
}
