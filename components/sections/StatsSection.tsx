import { colors } from '@/constants/colors';

export default function StatsSection() {
  const stats = [
    { value: '2+', label: 'Years of Experience', accent: '#3B82F6' },
    { value: '450+', label: 'Customer Reviews', accent: '#19C58B' },
    { value: '450+', label: 'Happy Clients', accent: '#F97316' },
    { value: '12mo', label: 'Repair Guarantee', accent: '#8B5CF6' },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: colors.primary }}>
            By The Numbers
          </span>
          <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              style={{ borderTop: `3px solid ${stat.accent}` }}
            >
              <h3 className="text-4xl md:text-5xl font-black mb-2" style={{ color: stat.accent }}>
                {stat.value}
              </h3>
              <p className="text-sm font-semibold" style={{ color: colors.textLight }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
