/**
 * Directory Section Component
 * The core feature – displays verified seller cards in a responsive grid.
 * Each card shows seller info, category, description, and WhatsApp contact.
 */

// ========================================
// ADMIN / SELLER WHATSAPP CONFIG
// Replace these numbers with actual seller WhatsApp numbers
// Format: Country code + number (no + or spaces)
// Nigerian format: 07084547988 → 2347084547988
// ========================================

// Seller data type
interface Seller {
  id: number;
  name: string;
  category: 'Books' | 'Food' | 'Services';
  description: string;
  whatsapp: string; // WhatsApp number with country code
  verified: boolean;
}

// Placeholder seller data – REPLACE WITH REAL DATA
const sellers: Seller[] = [
  {
    id: 1,
    name: "Chinedu's Textbooks",
    category: 'Books',
    description: 'Selling 100-level Engineering books in good condition. GST, MTH, and PHY textbooks available at affordable prices.',
    whatsapp: '2347084547988', // REPLACE THIS WITH SELLER'S ACTUAL WHATSAPP NUMBER
    verified: true,
  },
  {
    id: 2,
    name: "Mama Nkechi's Kitchen",
    category: 'Food',
    description: 'Delicious home-cooked meals delivered to your hostel. Jollof rice, fried rice, and swallow available daily.',
    whatsapp: '2347084547988', // REPLACE THIS WITH SELLER'S ACTUAL WHATSAPP NUMBER
    verified: true,
  },
  {
    id: 3,
    name: "TechFix by Emeka",
    category: 'Services',
    description: 'Phone and laptop repairs at student-friendly prices. Screen replacement, software fixes, and data recovery.',
    whatsapp: '2347084547988', // REPLACE THIS WITH SELLER'S ACTUAL WHATSAPP NUMBER
    verified: true,
  },
];

// Get badge class based on category
function getBadgeClass(category: string): string {
  switch (category) {
    case 'Books':
      return 'badge-books';
    case 'Food':
      return 'badge-food';
    case 'Services':
      return 'badge-services';
    default:
      return 'bg-gray-100 text-gray-700';
  }
}

// Get category icon
function getCategoryIcon(category: string) {
  switch (category) {
    case 'Books':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'Food':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
      );
    case 'Services':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Directory() {
  return (
    <section id="directory" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">
            Marketplace
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f2b4a] mb-4">
            Current Verified Sellers
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Browse our handpicked list of trusted student sellers. Every vendor has been personally verified.
          </p>
        </div>

        {/* Seller Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sellers.map((seller) => (
            <article
              key={seller.id}
              className="seller-card bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              {/* Card Header with gradient accent */}
              <div className="h-2 bg-gradient-to-r from-[#0f2b4a] to-blue-600"></div>

              <div className="p-5 sm:p-6">
                {/* Top row: Category badge + Verified badge */}
                <div className="flex items-center justify-between mb-4">
                  {/* Category Badge */}
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${getBadgeClass(seller.category)}`}>
                    {getCategoryIcon(seller.category)}
                    {seller.category}
                  </span>

                  {/* Verified Badge */}
                  {seller.verified && (
                    <div className="verified-badge flex items-center gap-1 bg-green-50 border border-green-200 rounded-full px-2.5 py-1">
                      <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[10px] font-bold text-green-700 uppercase">Verified</span>
                    </div>
                  )}
                </div>

                {/* Seller Name */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0f2b4a] mb-2">
                  {seller.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {seller.description}
                </p>

                {/* WhatsApp Contact Button with custom message */}
                <a
                  href={`https://wa.me/${seller.whatsapp}?text=${encodeURIComponent(`Hi! 👋 I found your listing on ABSU Trusted Trades.\n\nI'm interested in "${seller.name}".\n\nCan you tell me more about what you have available? 🙏`)}` }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-white font-semibold rounded-xl text-sm"
                >
                  {/* WhatsApp Icon */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Contact via WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            <span className="inline-flex items-center gap-1">
              <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              More sellers are being verified. Check back soon!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
