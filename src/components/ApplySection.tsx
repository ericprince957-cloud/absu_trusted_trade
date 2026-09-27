/**
 * Apply Section Component
 * Allows sellers to apply to be listed on the platform.
 */
export default function ApplySection() {
  const adminWhatsApp = '2347084547988';
  const adminTelegram = 'https://t.me/Vectorcodes';

  const whatsappMessage = encodeURIComponent(
    'Hi Vector Codes! 👋\n\nI want to apply to be a verified seller on ABSU Trusted Trades.\n\nMy details:\n• Name: \n• What I sell: \n• Department/Level: \n\nLooking forward to joining! 🙏'
  );

  const telegramMessage = encodeURIComponent(
    'Hi Vector Codes! 👋\n\nI want to apply to be a verified seller on ABSU Trusted Trades.\n\nMy details:\n• Name: \n• What I sell: \n• Department/Level: \n\nLooking forward to joining! 🙏'
  );

  const whatsappLink = `https://wa.me/${adminWhatsApp}?text=${whatsappMessage}`;
  const telegramLink = `${adminTelegram}?text=${telegramMessage}`;

  return (
    <section id="apply" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#0f1b2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f2b4a] via-[#1a3f6b] to-[#0f2b4a] dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#0f3460]">
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}></div>
          </div>

          <div className="relative px-6 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Are you a trusted seller?
            </h2>

            {/* Description */}
            <p className="text-blue-100/80 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Join our exclusive list of verified vendors. Get more customers and build trust with the ABSU student community.
            </p>

            {/* Benefits list */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 text-sm text-blue-100/70">
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free to join
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Get verified badge
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                More customers
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1da851] text-white font-bold rounded-xl shadow-lg shadow-green-500/25 transition-all duration-300 text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Apply via WhatsApp
              </a>

              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0088cc] hover:bg-[#006da3] text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Apply via Telegram
              </a>
            </div>

            {/* Custom message preview */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-left">
                <p className="text-xs text-blue-200/50 uppercase tracking-wider font-semibold mb-2">
                  📋 Pre-filled message you'll send:
                </p>
                <p className="text-sm text-blue-100/70 leading-relaxed whitespace-pre-line">
                  Hi Vector Codes! 👋{'\n\n'}I want to apply to be a verified seller on ABSU Trusted Trades.{'\n\n'}My details:{'\n'}• Name: {'\n'}• What I sell: {'\n'}• Department/Level: {'\n\n'}Looking forward to joining! 🙏
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs text-blue-200/50">
              You'll be redirected to WhatsApp or Telegram to send your application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
