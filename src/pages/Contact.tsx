import { motion } from 'motion/react';
import { Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 space-y-4">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold">Connect With Us</p>
        <h1 className="text-5xl md:text-7xl font-serif italic">Get In Touch</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact Info */}
        <div className="space-y-16">
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="glass p-4 rounded-full text-gold">
                <MessageCircle size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest font-bold">WhatsApp</h3>
                <p className="text-white/50 text-sm font-light">+1 (234) 567-890</p>
                <a href="https://wa.me/1234567890" className="inline-block text-[10px] uppercase tracking-widest text-gold border-b border-gold/30 pb-1 hover:border-gold transition-all">Start Chat</a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="glass p-4 rounded-full text-gold">
                <Instagram size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest font-bold">Instagram</h3>
                <p className="text-white/50 text-sm font-light">@vantage_streetwear</p>
                <a href="#" className="inline-block text-[10px] uppercase tracking-widest text-gold border-b border-gold/30 pb-1 hover:border-gold transition-all">Follow Us</a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="glass p-4 rounded-full text-gold">
                <Mail size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest font-bold">Email</h3>
                <p className="text-white/50 text-sm font-light">studio@vantage.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="glass p-4 rounded-full text-gold">
                <MapPin size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest font-bold">Showroom</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  124 Shoreditch High St<br />
                  London, E1 6JE<br />
                  United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-8 md:p-12 space-y-8"
        >
          <h2 className="text-2xl font-serif italic">Send a Message</h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Full Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-gold transition-all" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-gold transition-all" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Message</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-gold transition-all resize-none" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full py-5 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold hover:text-white transition-all">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
