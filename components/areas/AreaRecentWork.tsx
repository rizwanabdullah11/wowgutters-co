import { REAL_GUTTER_JOBS, type RealGutterJob } from '@/constants/realGutterJobs';

type Props = {
  /** Jobs to show. Nothing renders without jobs (the old block was placeholder stock photos). */
  jobs?: RealGutterJob[];
  heading?: string;
  intro?: string;
};

/**
 * "Recent work" — real before & after photos from WOW Gutters jobs.
 * Pass `jobs` explicitly per page so every page doesn't repeat the same block
 * (identical blocks on many pages count as duplicate content).
 */
export default function AreaRecentWork({ jobs, heading, intro }: Props) {
  if (!jobs || jobs.length === 0) return null;

  return (
    <section className="py-16 md:py-20 px-4 bg-white border-t border-slate-100" aria-labelledby="recent-work-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="recent-work-heading" className="text-3xl md:text-4xl font-black text-slate-900 mb-3 text-center">
          {heading ?? 'Real Gutter Cleaning Jobs – Before & After'}
        </h2>
        <p className="text-slate-600 text-base md:text-lg text-center max-w-3xl mx-auto mb-10">
          {intro ??
            'Unedited photos from our own jobs. Every clean comes with before & after photos like these, so you can see exactly what was in your gutters.'}
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {jobs.map((job) => (
            <article key={job.id} className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm">
              <div className={`grid gap-1 ${job.photos.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {job.photos.map((photo) => (
                  <figure key={photo.src} className="relative m-0">
                    <img
                      src={photo.src}
                      alt={job.area ? `${photo.alt} in ${job.area}` : photo.alt}
                      className="w-full aspect-[3/4] object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption
                      className={`absolute top-2 left-2 rounded-full px-3 py-1 text-xs font-bold text-white ${
                        photo.label === 'After' ? 'bg-emerald-600' : photo.label === 'Before' ? 'bg-red-600' : 'bg-slate-800'
                      }`}
                    >
                      {photo.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black text-slate-900 mb-2">{job.title}</h3>
                {(job.area || job.date) && (
                  <p className="text-sm font-semibold text-emerald-700 mb-2">
                    {[job.area, job.date].filter(Boolean).join(' · ')}
                  </p>
                )}
                <p className="text-slate-600 text-sm leading-relaxed">{job.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { REAL_GUTTER_JOBS };
