import { Link } from 'react-router-dom';
import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-serif tracking-widest font-bold">AJOVA</h3>
            <p className="text-[9px] uppercase tracking-[0.35em] text-gold/80 font-medium">Crafted Artistry</p>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Premium dark luxury streetwear. Wear your identity with confidence.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white/70 hover:text-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-gold transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-bold mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><Link to="/shop" className="hover:text-gold transition-colors">All Products</Link></li>
            <li><Link to="/shop" className="hover:text-gold transition-colors">T-Shirts</Link></li>
            <li><Link to="/shop" className="hover:text-gold transition-colors">Shirts</Link></li>
            <li><Link to="/shop" className="hover:text-gold transition-colors">Dresses</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Shipping Policy</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Returns & Exchanges</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Size Guide</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-white/50 mb-4">Join the inner circle for exclusive drops.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-gold w-full"
            />
            <button className="bg-white text-black px-4 py-2 text-xs uppercase tracking-widest font-bold hover:bg-gold transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/30">
        <p>© 2026 AJOVA – CRAFTED ARTISTRY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
