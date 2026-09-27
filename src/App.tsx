/**
 * ABSU Trusted Trades – Main Application
 * ========================================
 * A verified marketplace for students at Abia State University (ABSU).
 * Lists trusted student sellers for textbooks, food, and services.
 * 
 * Architecture:
 * - ThemeContext.tsx  → Dark/Light mode state management
 * - Header.tsx       → Sticky navigation with logo, links, and theme toggle
 * - Hero.tsx         → Landing section with headline and CTAs
 * - HowItWorks.tsx   → 3-step explanation of the process
 * - Directory.tsx    → Grid of verified seller cards with category filter
 * - ApplySection.tsx → Call-to-action for new sellers
 * - Footer.tsx       → Branding, copyright, and social links
 */

import { ThemeProvider } from './ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Directory from './components/Directory';
import ApplySection from './components/ApplySection';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0a1525] font-['Inter',sans-serif] transition-colors duration-300">
        {/* Sticky Navigation Header */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section - Landing area */}
          <Hero />

          {/* How It Works - 3 steps explanation */}
          <HowItWorks />

          {/* Directory - Core feature with seller cards */}
          <Directory />

          {/* Apply Section - For sellers to join */}
          <ApplySection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
