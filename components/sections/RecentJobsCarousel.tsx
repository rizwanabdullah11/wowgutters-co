'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { RECENT_JOBS } from '@/constants/recentJobs';

/** Ben's Gutters-style case-study cards with arrow navigation (scroll-snap, works without JS too). */
export default function RecentJobsCarousel() {
  const track = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector('li');
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div>
      <ul
        ref={track}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 list-none p-0 m-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Recent jobs"
      >
        {RECENT_JOBS.map((job, i) => (
          <li
            key={job.id}
            className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col"
          >
            <div className="px-5 pt-4 text-xs font-bold tracking-[0.2em] uppercase text-[#047857]">
              Recent job {String(i + 1).padStart(2, '0')}
            </div>
            <div className="grid grid-cols-2 gap-1 mt-3">
              {[
                { src: job.before, label: 'Before' },
                { src: job.after, label: 'After' },
              ].map((img) => (
                <figure key={img.label} className="relative m-0">
                  <img
                    src={img.src}
                    alt={`${job.service} ${job.area} — ${img.label.toLowerCase()}`}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <figcaption
                    className={`absolute top-2 left-2 rounded px-2 py-0.5 text-[11px] font-bold text-white ${
                      img.label === 'Before' ? 'bg-slate-800/85' : 'bg-[#047857]'
                    }`}
                  >
                    {img.label}
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="p-5 flex flex-col flex-1">
              <p className="text-xs font-semibold text-slate-500">{job.service}</p>
              <h3 className="text-xl font-black text-slate-900 mt-1">{job.area}</h3>
              {job.story ? (
                <dl className="mt-3 space-y-3 text-sm">
                  {[
                    ['The issue', job.story.issue],
                    ['What we did', job.story.whatWeDid],
                    ['The result', job.story.result],
                  ].map(([t, d]) => (
                    <div key={t}>
                      <dt className="font-bold text-slate-900">{t}</dt>
                      <dd className="m-0 text-slate-600 leading-relaxed">{d}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Cleared from the ground with our high-reach vacuum. Photos taken on the day and sent to the customer.
                </p>
              )}
              <Link
                href={job.href}
                className="mt-auto pt-4 text-sm font-bold text-[#047857] hover:underline"
              >
                {job.linkLabel} →
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-3 mt-4">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous job"
          className="w-11 h-11 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:border-[#19C58B] hover:text-[#047857] transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next job"
          className="w-11 h-11 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:border-[#19C58B] hover:text-[#047857] transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
