import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold">The Manifesto</p>
          <h1 className="text-6xl md:text-9xl font-serif italic leading-none">AJOVA</h1>
          <div className="w-20 h-[1px] bg-white/20 mx-auto" />
        </motion.div>
      </section>

      {/* Story */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-20 px-6 max-w-7xl mx-auto items-center mb-40">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="aspect-[4/5] overflow-hidden bg-white/5"
        >
          <img 
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800" 
            alt="Brand Story" 
            className="h-full w-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-serif italic leading-tight">Born in the shadows, <br /> designed for the light.</h2>
          <div className="space-y-6 text-white/60 font-light leading-relaxed">
            <p>
              AJOVA was founded in 2024 as a response to the fleeting nature of fast fashion. We believe that streetwear should be architectural, permanent, and deeply personal.
            </p>
            <p>
              Our aesthetic is rooted in dark luxury—a fusion of high-end tailoring and urban utility. Every piece is crafted with obsessive attention to detail, from the weight of the fabric to the precision of the tonal embroidery.
            </p>
            <p>
              We don't follow trends. We define a vantage point from which you can view the world and be viewed by it.
            </p>
          </div>
          <div className="pt-8">
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold">Est. 2024 — London / Tokyo</div>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="bg-white text-black py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif italic">Quality</h3>
            <p className="text-sm font-light text-black/60 leading-relaxed">We source only the finest materials from heritage mills in Italy and Japan.</p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-serif italic">Exclusivity</h3>
            <p className="text-sm font-light text-black/60 leading-relaxed">Limited drops ensure that your identity remains unique in a crowded world.</p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-serif italic">Sustainability</h3>
            <p className="text-sm font-light text-black/60 leading-relaxed">Slow production cycles and durable construction for a lifetime of wear.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
