import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1920"
            alt="Fashion Model"
            className="h-full w-full object-cover grayscale-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.5em] text-gold font-medium">Spring Summer 2026</p>
            <h1 className="text-6xl md:text-9xl font-serif font-bold tracking-tighter leading-none italic">
              Wear Your <br />
              <span className="not-italic text-white">Identity</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
              <Link
                to="/shop"
                className="group relative px-12 py-5 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold overflow-hidden transition-all hover:bg-gold hover:text-white"
              >
                Shop Now
                <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
              <Link
                to="/about"
                className="text-xs uppercase tracking-[0.3em] font-medium border-b border-white/30 pb-1 hover:border-gold transition-all"
              >
                The Story
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* Featured Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">New Arrivals</p>
            <h2 className="text-4xl md:text-6xl font-serif italic">The Obsidian Series</h2>
          </div>
          <Link to="/shop" className="group flex items-center text-xs uppercase tracking-widest font-bold border-b border-white/10 pb-2 hover:border-gold transition-all">
            View All Collection
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
          </Link>
        </div>

        <div className="instagram-grid">
          {featuredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-40 bg-white text-black px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.h3
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif italic leading-tight"
          >
            "Streetwear is more than clothing. It's the architecture of self-expression in the urban landscape."
          </motion.h3>
          <div className="w-20 h-[1px] bg-black/20 mx-auto" />
          <p className="text-xs uppercase tracking-[0.4em] font-bold text-black/40">AJOVA Philosophy</p>
        </div>
      </section>

      {/* Visual Break */}
      <section className="h-[70vh] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1920"
          alt="Streetwear Detail"
          className="h-full w-full object-cover fixed top-0 left-0 -z-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>
    </div>
  );
}
