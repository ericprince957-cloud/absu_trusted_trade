/**
 * Hero Section Component
 * Main landing area with headline, sub-headline, and CTA buttons.
 */
export default function Hero() {
  return (
    <section id="home" className="hero-pattern relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust indicator */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm text-white/80 font-medium">
              🛒 Shop Now, Pay via WhatsApp
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Stop Getting Scammed.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              Shop from Verified
            </span>{' '}
            ABSU Students.
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            The only curated marketplace for textbooks, fashion, beauty, and services at Abia State University. Add to cart and checkout via WhatsApp!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#directory"
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300 text-base"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              Start Shopping
            </a>

            <a
              href="#apply"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl transition-all duration-300 text-base"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Become a Verified Seller
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">8+</div>
              <div className="text-xs text-blue-200/60">Products</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white">5</div>
              <div className="text-xs text-blue-200/60">Verified Sellers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">Free</div>
              <div className="text-xs text-blue-200/60">Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" className="fill-white dark:fill-gray-50" />
        </svg>
      </div>
    </section>
  );
}
