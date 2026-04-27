import Link from 'next/link';
import { SEO_KEYWORD_LINKS } from '@/constants/seoKeywordLinks';

type Props = {
  text: string;
  className?: string;
};

function escapeRegExp(input: string) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Turns configured SEO keywords into internal links within plain text.
 * Designed for paragraphs/headings that are plain strings.
 */
export default function SeoLinkify({ text, className }: Props) {
  const items = [...SEO_KEYWORD_LINKS].sort((a, b) => b.label.length - a.label.length);
  const pattern = new RegExp(items.map((i) => escapeRegExp(i.label)).join('|'), 'gi');

  const parts: Array<{ type: 'text' | 'link'; value: string; href?: string }> = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    const start = match.index;
    const end = start + match[0].length;
    if (start > lastIndex) {
      parts.push({ type: 'text', value: text.slice(lastIndex, start) });
    }

    const matchedText = text.slice(start, end);
    const found = items.find((i) => i.label.toLowerCase() === matchedText.toLowerCase());
    if (found) {
      parts.push({ type: 'link', value: matchedText, href: found.href });
    } else {
      parts.push({ type: 'text', value: matchedText });
    }

    lastIndex = end;
  }

  if (lastIndex < text.length) {
    parts.push({ type: 'text', value: text.slice(lastIndex) });
  }

  return (
    <span className={className}>
      {parts.map((p, idx) => {
        if (p.type === 'link' && p.href) {
          return (
            <Link key={`${p.href}-${idx}`} href={p.href}>
              {p.value}
            </Link>
          );
        }
        return <span key={`t-${idx}`}>{p.value}</span>;
      })}
    </span>
  );
}

