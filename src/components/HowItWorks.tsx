/**
 * How It Works Section Component
 * Displays 3 steps explaining the verification process.
 */
export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'We Vet Sellers',
      description: 'Every seller is manually verified by our team. We check their identity, student status, and reputation before listing them.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      number: '02',
      title: 'Browse Trusted Listings',
      description: 'Find textbooks, food, and services you actually need. All listings are organized by category for easy browsing.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      number: '03',
      title: 'Connect Safely',
      description: 'Contact sellers directly via WhatsApp with confidence. Every seller on our platform has been personally verified.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">
            Simple Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f2b4a] mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Three simple steps to buy safely from trusted ABSU students.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-200 to-gray-100"></div>
              )}

              <div className="text-center">
                {/* Icon Circle */}
                <div className={`step-icon inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${step.bgColor} mb-6`}>
                  <div className={`text-transparent bg-clip-text bg-gradient-to-br ${step.color}`}>
                    <div className={`bg-gradient-to-br ${step.color} p-3 rounded-xl text-white`}>
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Step Number */}
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Step {step.number}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0f2b4a] mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
