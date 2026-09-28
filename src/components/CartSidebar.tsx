import { useState } from 'react';
import { useCart } from '../CartContext';

/**
 * Cart Sidebar Component
 * Slide-out sidebar showing cart items, total, and checkout options.
 */

function formatPrice(price: number): string {
  return `₦${price.toLocaleString()}`;
}

export default function CartSidebar() {
  const { cart, cartCount, cartTotal, removeFromCart, updateQuantity, clearCart, isCartOpen, setIsCartOpen } = useCart();
  const [userName, setUserName] = useState('');
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const handleCheckout = () => {
    if (!userName.trim()) {
      alert('Please enter your name to proceed with checkout.');
      return;
    }

    // Group items by seller
    const itemsBySeller = cart.reduce((acc, item) => {
      if (!acc[item.seller]) {
        acc[item.seller] = [];
      }
      acc[item.seller].push(item);
      return acc;
    }, {} as Record<string, typeof cart>);

    // For prototype, send all items to admin (Vector Codes)
    // In production, you'd send separate messages to each seller
    const adminWhatsApp = '2347084547988'; // Vector Codes number

    const itemList = cart.map(item => 
      `• ${item.name} (x${item.quantity}) - ${formatPrice(item.price * item.quantity)}`
    ).join('\n');

    const message = encodeURIComponent(
      `Hi Vector Codes! 👋\n\nI want to place an order from ABSU Trusted Trades:\n\n${itemList}\n\nTotal: ${formatPrice(cartTotal)}\n\nMy name is ${userName}.\n\nPlease coordinate with the sellers for me. Thank you! 🙏`
    );

    window.open(`https://wa.me/${adminWhatsApp}?text=${message}`, '_blank');
    
    // Clear cart after checkout
    clearCart();
    setIsCartOpen(false);
    setShowCheckoutForm(false);
    setUserName('');
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-[#0f2b4a] to-blue-600 dark:from-orange-500 dark:to-orange-400">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <h2 className="text-xl font-bold text-white">
              Shopping Cart ({cartCount})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg className="w-20 h-20 text-gray-300 dark:text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <p className="text-gray-500 dark:text-gray-400 text-lg font-medium mb-2">
                Your cart is empty
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                Add some products to get started!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0f2b4a] dark:text-white text-sm mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        by {item.seller}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-500 flex items-center justify-center text-gray-700 dark:text-gray-200 font-bold transition-colors"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-semibold text-[#0f2b4a] dark:text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-500 flex items-center justify-center text-gray-700 dark:text-gray-200 font-bold transition-colors"
                      >
                        +
                      </button>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {formatPrice(item.price)} each
                      </div>
                      <div className="text-lg font-bold text-orange-500 dark:text-orange-400">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Total and Checkout */}
        {cart.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/50">
            {/* Total */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Total:
              </span>
              <span className="text-2xl font-bold text-orange-500 dark:text-orange-400">
                {formatPrice(cartTotal)}
              </span>
            </div>

            {/* Checkout Form */}
            {showCheckoutForm && (
              <div className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Name (for order coordination):
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-2">
              {!showCheckoutForm ? (
                <button
                  onClick={() => setShowCheckoutForm(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#1da851] text-white font-bold rounded-xl text-base transition-colors shadow-lg shadow-green-500/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Checkout via WhatsApp
                </button>
              ) : (
                <button
                  onClick={handleCheckout}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#1da851] text-white font-bold rounded-xl text-base transition-colors shadow-lg shadow-green-500/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send Order to Admin
                </button>
              )}

              <button
                onClick={clearCart}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-xl text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear Cart
              </button>
            </div>

            {/* Info text */}
            <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
              Orders are coordinated by the admin for smooth delivery
            </p>
          </div>
        )}
      </div>
    </>
  );
}
