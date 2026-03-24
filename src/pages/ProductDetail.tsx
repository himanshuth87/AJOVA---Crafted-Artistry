import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ShoppingBag, MessageCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { PRODUCTS } from '../data';
import { cn } from '../lib/utils';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-6">
        <h1 className="text-3xl font-serif italic">Product Not Found</h1>
        <Link to="/shop" className="text-xs uppercase tracking-widest font-bold border-b border-gold pb-1 text-gold">
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(`Hi AJOVA, I want to order the ${product.name} (Size: ${selectedSize || 'Not Selected'}). Price: $${product.price}`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-white transition-colors mb-12"
      >
        <ArrowLeft size={14} className="mr-2" />
        Back to Collection
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-[3/4] overflow-hidden bg-white/5 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImageIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={product.images[activeImageIdx]}
                alt={product.name}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            {/* Image Navigation */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={() => setActiveImageIdx(prev => (prev === 0 ? product.images.length - 1 : prev - 1))}
                className="glass p-2 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setActiveImageIdx(prev => (prev === product.images.length - 1 ? 0 : prev + 1))}
                className="glass p-2 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={cn(
                  "relative w-24 aspect-[3/4] overflow-hidden flex-shrink-0 border-2 transition-all",
                  activeImageIdx === idx ? "border-gold" : "border-transparent opacity-50 hover:opacity-100"
                )}
              >
                <img src={img} alt={`${product.name} ${idx}`} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">{product.category}</p>
            <h1 className="text-5xl md:text-7xl font-serif italic leading-none">{product.name}</h1>
            <p className="text-2xl font-light tracking-widest text-white/80">${product.price}.00</p>
          </div>

          <div className="space-y-6">
            <p className="text-sm text-white/60 leading-relaxed font-light">
              {product.description}
            </p>
            <div className="w-12 h-[1px] bg-white/20" />
          </div>

          {/* Size Selection */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold">Select Size</h3>
              <button className="text-[10px] uppercase tracking-widest text-white/30 border-b border-white/10 hover:text-gold transition-colors">Size Guide</button>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "w-12 h-12 flex items-center justify-center text-xs font-bold transition-all duration-300 border",
                    selectedSize === size 
                      ? "bg-white text-black border-white" 
                      : "bg-transparent text-white border-white/10 hover:border-gold"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col space-y-4 pt-8">
            <button className="w-full py-5 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold hover:text-white transition-all flex items-center justify-center">
              <ShoppingBag size={16} className="mr-2" />
              Add to Cart
            </button>
            <button 
              onClick={handleWhatsAppOrder}
              className="w-full py-5 glass text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-white/10 transition-all flex items-center justify-center border-white/20"
            >
              <MessageCircle size={16} className="mr-2" />
              Order via WhatsApp
            </button>
          </div>

          {/* Details Accordion (Simplified) */}
          <div className="pt-12 border-t border-white/10 space-y-8">
            <div className="space-y-2">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Composition</h4>
              <p className="text-xs font-light">100% Premium Heavyweight Cotton. Made in Italy.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Shipping</h4>
              <p className="text-xs font-light">Express worldwide shipping. Delivered in 3-5 business days.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
