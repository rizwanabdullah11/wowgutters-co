import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Star, Award, FileCheck } from 'lucide-react';
import { colors } from '@/constants/colors';
import { EEAT_TRUST_POINTS, TEAM_PROFILES, WOW_BUSINESS_FOUNDED } from '@/lib/teamProfiles';

export default function TeamEeatSection() {
  return (
    <section className="py-20 px-4 bg-white" aria-labelledby="team-eeat-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-700 mb-2">Experience you can verify</p>
          <h2 id="team-eeat-heading" className="text-4xl md:text-5xl font-black text-gray-900">
            Our <span style={{ color: colors.primary }}>Team</span> &amp; Credentials
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            WOW Gutters Ltd has served Birmingham and the West Midlands since {WOW_BUSINESS_FOUNDED}. You deal with
            trained, insured technicians — not anonymous subcontractors — on every gutter clean, repair, and hot-wash
            visit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {TEAM_PROFILES.map((member) => (
            <article
              key={member.name}
              className="rounded-2xl border border-gray-100 bg-gray-50 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-52 w-full">
                <Image src={member.image} alt={member.imageAlt} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm font-semibold mt-1" style={{ color: colors.primary }}>
                  {member.role}
                </p>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{member.experience}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {EEAT_TRUST_POINTS.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" aria-hidden />
                <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <Link
            href="/reviews/"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-white"
            style={{ background: colors.primaryGradient }}
          >
            <Star className="w-5 h-5" aria-hidden />
            Read customer reviews
          </Link>
          <Link
            href="/the-gutter-gallery/"
            className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 px-6 py-3 font-bold text-slate-800 hover:border-emerald-400"
          >
            <Award className="w-5 h-5 text-emerald-600" aria-hidden />
            Before &amp; after gallery
          </Link>
          <Link
            href="/citations/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 underline underline-offset-2"
          >
            <FileCheck className="w-4 h-4" aria-hidden />
            Business citations &amp; NAP
          </Link>
        </div>
      </div>
    </section>
  );
}
