import { useState } from 'react';
import { motion } from 'motion/react';
import { Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data';
import { Category } from '../types';
import { cn } from '../lib/utils';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const categories: (Category | 'All')[] = ['All', 'T-Shirts', 'Shirts', 'Dresses'];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-5xl font-serif italic">The Collection</h1>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium">Curated Streetwear Essentials</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <div className="flex items-center text-white/30 mr-4">
            <Filter size={14} className="mr-2" />
            <span className="text-[10px] uppercase tracking-widest font-bold">Filter By</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "text-xs uppercase tracking-[0.2em] font-bold pb-1 border-b-2 transition-all duration-300",
                activeCategory === cat ? "text-gold border-gold" : "text-white/40 border-transparent hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="instagram-grid">
        {filteredProducts.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="py-40 text-center space-y-6">
          <p className="text-white/30 font-serif italic text-2xl">No items found in this category.</p>
          <button 
            onClick={() => setActiveCategory('All')}
            className="text-xs uppercase tracking-widest font-bold border-b border-gold pb-1 text-gold"
          >
            View All Products
          </button>
        </div>
      )}
    </div>
  );
}
