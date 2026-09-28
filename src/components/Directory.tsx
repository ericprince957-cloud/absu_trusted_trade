import { useState } from 'react';
import { useCart } from '../CartContext';
import ProductModal from './ProductModal';

/**
 * Directory Section Component
 * Marketplace grid with products, prices, and Add to Cart functionality.
 */

// Product data type with pricing
interface Product {
  id: number;
  name: string;
  seller: string;
  category: 'Textbooks' | 'Web Development' | 'Fashion' | 'Beauty' | 'Food' | 'Services';
  description: string;
  price: number;
  whatsapp: string;
  verified: boolean;
  image?: string;
}

// Product listings with prices
const products: Product[] = [
  {
    id: 1,
    name: "100-Level Engineering Books Bundle",
    seller: "Chinedu Books",
    category: 'Textbooks',
    description: 'Complete set of 100-level Engineering textbooks including GST, MTH, and PHY. All books in excellent condition with minimal highlighting.',
    price: 8500,
    whatsapp: '2348011112222',
    verified: true,
  },
  {
    id: 2,
    name: "Professional Website Development",
    seller: "Vector Codes",
    category: 'Web Development',
    description: 'Full-stack website development service. Responsive design, modern UI/UX, and deployment included. Perfect for student businesses and portfolios.',
    price: 25000,
    whatsapp: '2347084547988',
    verified: true,
  },
  {
    id: 3,
    name: "Premium Kaftan Set",
    seller: "Egbeike Precious Chukwuebuka",
    category: 'Fashion',
    description: 'High-quality kaftan with matching trousers. Available in multiple colors and sizes. Perfect for lectures, events, and casual wear.',
    price: 12000,
    whatsapp: '2349047587912',
    verified: true,
  },
  {
    id: 4,
    name: "Luxury Oil Perfume (10ml)",
    seller: "Uchechukwu Divine Chidiamara",
    category: 'Beauty',
    description: 'Long-lasting oil perfume in elegant bottle. Multiple scents available. Perfect for students who want to smell amazing all day.',
    price: 3500,
    whatsapp: '2347013519900',
    verified: true,
  },
  {
    id: 5,
    name: "Women's Elegant Dress",
    seller: "Udo Favour Chinoyeremu",
    category: 'Fashion',
    description: 'Stylish women\'s dress perfect for lectures, parties, and events. Available in various sizes and colors. Quality fabric with excellent finishing.',
    price: 8000,
    whatsapp: '2347064580909',
    verified: true,
  },
  {
    id: 6,
    name: "Professional Nail Art Service",
    seller: "Uchechukwu Divine Chidiamara",
    category: 'Beauty',
    description: 'Professional nail tech service including manicure, pedicure, and nail art. Various designs available. Book your appointment today!',
    price: 5000,
    whatsapp: '2347013519900',
    verified: true,
  },
  {
    id: 7,
    name: "Men's Casual Shoes",
    seller: "Udo Favour Chinoyeremu",
    category: 'Fashion',
    description: 'Comfortable and stylish men\'s casual shoes. Perfect for daily wear on campus. Durable material with modern design.',
    price: 15000,
    whatsapp: '2347064580909',
    verified: true,
  },
  {
    id: 8,
    name: "Arts & Social Sciences Books",
    seller: "Chinedu Books",
    category: 'Textbooks',
    description: 'Collection of 200-level Arts and Social Sciences textbooks. Well-maintained with clear print. Great for English, Political Science, and Sociology students.',
    price: 6500,
    whatsapp: '2348011112222',
    verified: true,
  },
];

const allCategories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

function getBadgeClass(category: string): string {
  switch (category) {
    case 'Textbooks': return 'badge-books';
    case 'Food': return 'badge-food';
    case 'Services': return 'badge-services';
    case 'Web Development': return 'badge-webdev';
    case 'Fashion': return 'badge-fashion';
    case 'Beauty': return 'badge-beauty';
    default: return 'bg-gray-100 text-gray-700';
  }
}

function getCategoryIcon(category: string) {
  switch (category) {
    case 'Textbooks':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'Web Development':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case 'Fashion':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      );
    case 'Beauty':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
    default: return null;
  }
}

function getFilterIcon(category: string) {
  if (category === 'All') {
    return (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    );
  }
  return getCategoryIcon(category);
}

function formatPrice(price: number): string {
  return `₦${price.toLocaleString()}`;
}

export default function Directory() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  const filteredProducts = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      seller: product.seller,
      price: product.price,
      description: product.description,
      category: product.category,
      whatsapp: product.whatsapp,
    });
  };

  return (
    <section id="directory" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-[#0a1525]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">
            Marketplace
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f2b4a] dark:text-white mb-4">
            Current Verified Sellers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Browse our handpicked list of trusted student sellers. Every vendor has been personally verified.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {allCategories.map((category) => {
            const isActive = activeCategory === category;
            const count = category === 'All' ? products.length : products.filter(p => p.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold
                  transition-all duration-200 border
                  ${isActive
                    ? 'bg-[#0f2b4a] dark:bg-orange-500 text-white border-[#0f2b4a] dark:border-orange-500 shadow-md'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-[#0f2b4a]/30 dark:hover:border-orange-500/30 hover:text-[#0f2b4a] dark:hover:text-orange-400'
                  }
                `}
              >
                {getFilterIcon(category)}
                <span>{category}</span>
                <span className={`
                  ml-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded-full
                  ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}
                `}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing <span className="font-semibold text-[#0f2b4a] dark:text-white">{filteredProducts.length}</span>{' '}
            {filteredProducts.length === 1 ? 'product' : 'products'}
            {activeCategory !== 'All' && (
              <span> in <span className="font-semibold text-[#0f2b4a] dark:text-white">{activeCategory}</span></span>
            )}
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="seller-card bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm dark:shadow-none flex flex-col"
            >
              {/* Card Header with gradient accent */}
              <div className="h-2 bg-gradient-to-r from-[#0f2b4a] to-blue-600 dark:from-orange-500 dark:to-orange-400"></div>

              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                {/* Top row: Category badge + Verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${getBadgeClass(product.category)}`}>
                    {getCategoryIcon(product.category)}
                    {product.category}
                  </span>

                  {product.verified && (
                    <div className="verified-badge flex items-center gap-1 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-full px-2.5 py-1">
                      <svg className="w-3.5 h-3.5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[10px] font-bold text-green-700 dark:text-green-400 uppercase">Verified</span>
                    </div>
                  )}
                </div>

                {/* Product Name */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0f2b4a] dark:text-white mb-2 break-words">
                  {product.name}
                </h3>

                {/* Seller Name */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  by <span className="font-semibold text-[#0f2b4a] dark:text-orange-400">{product.seller}</span>
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {product.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-orange-500 dark:text-orange-400">
                    {formatPrice(product.price)}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-xl text-sm transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Details
                  </button>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl text-sm transition-colors shadow-md shadow-orange-500/20"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">No products in this category yet.</p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">Check back soon or try another category.</p>
          </div>
        )}

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <span className="inline-flex items-center gap-1">
              <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              More products are being added. Check back soon!
            </span>
          </p>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
}
