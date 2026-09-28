/**
 * ABSU Trusted Trades – Main Application
 * ========================================
 * A verified marketplace for students at Abia State University (ABSU).
 * Features shopping cart, product browsing, and WhatsApp checkout.
 * 
 * Architecture:
 * - ThemeContext.tsx  → Dark/Light mode state management
 * - CartContext.tsx   → Shopping cart state management with localStorage
 * - Header.tsx       → Sticky navigation with logo, links, theme toggle, and cart icon
 * - Hero.tsx         → Landing section with headline and CTAs
 * - HowItWorks.tsx   → 3-step explanation of the process
 * - Directory.tsx    → Product grid with Add to Cart and View Details
 * - ProductModal.tsx → Product detail modal
 * - CartSidebar.tsx  → Shopping cart sidebar with checkout
 * - ApplySection.tsx → Call-to-action for new sellers
 * - Footer.tsx       → Branding, copyright, and social links
 */

import { ThemeProvider } from './ThemeContext';
import { CartProvider } from './CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Directory from './components/Directory';
import CartSidebar from './components/CartSidebar';
import ApplySection from './components/ApplySection';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen bg-white dark:bg-[#0a1525] font-['Inter',sans-serif] transition-colors duration-300">
          {/* Sticky Navigation Header */}
          <Header />

          {/* Main Content */}
          <main>
            {/* Hero Section - Landing area */}
            <Hero />

            {/* How It Works - 3 steps explanation */}
            <HowItWorks />

            {/* Directory - Product marketplace with cart functionality */}
            <Directory />

            {/* Apply Section - For sellers to join */}
            <ApplySection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Shopping Cart Sidebar */}
          <CartSidebar />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}
