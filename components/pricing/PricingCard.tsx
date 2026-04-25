interface PricingCardProps {
  title: string;
  price: string;
  priceSubtext?: string;
  features: string[];
  popular?: boolean;
  color?: 'blue' | 'green' | 'purple' | 'orange';
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function PricingCard({
  title,
  price,
  priceSubtext,
  features,
  popular = false,
  color = 'blue',
  buttonText = 'Get Quote',
  onButtonClick
}: PricingCardProps) {
  const colorClasses = {
    blue: {
      border: 'border-blue-500',
      text: 'text-blue-600',
      badge: 'bg-blue-500',
      button: 'bg-blue-600 hover:bg-blue-700'
    },
    green: {
      border: 'border-green-500',
      text: 'text-green-600',
      badge: 'bg-green-500',
      button: 'bg-green-600 hover:bg-green-700'
    },
    purple: {
      border: 'border-purple-500',
      text: 'text-purple-600',
      badge: 'bg-purple-500',
      button: 'bg-purple-600 hover:bg-purple-700'
    },
    orange: {
      border: 'border-orange-500',
      text: 'text-orange-600',
      badge: 'bg-orange-500',
      button: 'bg-orange-600 hover:bg-orange-700'
    }
  };

  const colors = colorClasses[color];

  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-8 border-t-4 ${colors.border} ${
        popular ? 'transform lg:scale-105 relative' : ''
      } transition-all hover:shadow-2xl`}
    >
      {popular && (
        <div className={`${colors.badge} text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4 absolute -top-3 left-1/2 transform -translate-x-1/2`}>
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <div className={`text-5xl font-bold ${colors.text} mb-2`}>
          {price}
        </div>
        {priceSubtext && (
          <p className="text-gray-500 text-sm">{priceSubtext}</p>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onButtonClick}
        className={`w-full ${colors.button} text-white py-3 rounded-lg font-semibold transition-colors`}
      >
        {buttonText}
      </button>
    </div>
  );
}
