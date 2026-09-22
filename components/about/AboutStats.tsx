import { colors } from '@/constants/colors';

export default function AboutStats() {
  const stats = [
    { value: '40ft', label: 'Ground Vacuum Reach' },
    { value: '100%', label: 'Photo Proof Provided' },
    { value: '1-Year', label: 'Service Guarantee' },
  ];

  return (
    <div className="rounded-lg p-6 sm:p-8 lg:p-12" style={{ backgroundColor: colors.dark }}>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: colors.primary }}>
              {stat.value}
            </div>
            <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
