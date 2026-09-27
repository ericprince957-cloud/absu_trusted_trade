import { useState } from 'react';

/**
 * Header Component
 * Sticky navigation with logo, tagline, and nav links.
 * Includes mobile hamburger menu.
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'List Your Business', href: '#apply' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-2">
            {/* Shield Icon (SVG) */}
            <div className="flex-shrink-0">
              <svg
                className="w-8 h-8 sm:w-9 sm:h-9 text-[#0f2b4a]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L3 7V12C3 17.55 6.84 22.74 12 24C17.16 22.74 21 17.55 21 12V7L12 2Z"
                  fill="#0f2b4a"
                  stroke="#0f2b4a"
                  strokeWidth="1"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-[#0f2b4a] leading-tight">
                ABSU Trusted Trades
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500 leading-tight hidden sm:block">
                Buy & Sell Safely on Campus
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#0f2b4a] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100 pt-3 mobile-menu-enter">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2.5 px-3 text-sm font-medium text-gray-600 hover:text-[#0f2b4a] hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
