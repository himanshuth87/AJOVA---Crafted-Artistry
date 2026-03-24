import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="group relative block aspect-[3/4] overflow-hidden bg-white/5">
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        src={product.images[0]}
        alt={product.name}
        className="h-full w-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
        referrerPolicy="no-referrer"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <p className="text-[10px] uppercase tracking-widest text-gold mb-1">{product.category}</p>
        <h3 className="text-lg font-serif italic mb-1">{product.name}</h3>
        <p className="text-sm font-light tracking-widest">${product.price}</p>
      </div>

      {/* Quick Preview Badge (Mobile) */}
      <div className="absolute bottom-4 right-4 md:hidden">
        <div className="glass px-3 py-1 rounded-full text-[10px] uppercase tracking-widest">
          View
        </div>
      </div>
    </Link>
  );
}
