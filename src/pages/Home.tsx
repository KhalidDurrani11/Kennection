import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Camera, Video, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/monolith-hero/1920/1080?grayscale" 
            alt="Hero"
            className="w-full h-full object-cover brightness-50 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/20 to-brand-dark"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6"
        >
          <span className="block text-[12px] tracking-[0.5em] uppercase text-brand-gold mb-8 font-medium">
            ESTABLISHED MMXXIV
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold text-white tracking-tighter mb-12 leading-[0.9] text-glow">
            WE CRAFT <br /> VISUAL <br /> NARRATIVES
          </h1>
          <Link 
            to="/portfolio"
            className="inline-block px-12 py-5 bg-brand-gold text-brand-dark font-bold text-[12px] tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
          >
            View Portfolio
          </Link>
        </motion.div>

        <div className="absolute bottom-12 left-12 hidden lg:block">
          <div className="flex flex-col gap-4">
            <div className="w-[1px] h-20 bg-brand-gold/30 relative">
              <motion.div 
                animate={{ height: ["0%", "100%", "0%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full bg-brand-gold absolute top-0"
              />
            </div>
            <span className="text-[10px] tracking-widest text-brand-muted rotate-90 origin-left mt-8">SCROLL</span>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-40 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Selected Stories</h2>
            <div className="w-24 h-1 bg-brand-gold"></div>
          </div>
          <p className="max-w-xs text-brand-muted text-sm font-light leading-relaxed">
            A curation of our most challenging and evocative visual journeys across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-8 group relative overflow-hidden bg-brand-black aspect-video cursor-pointer"
          >
            <img 
              src="https://picsum.photos/seed/arch/1200/800?grayscale" 
              alt="Architecture"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-75"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
              <span className="text-[10px] tracking-[0.3em] uppercase text-brand-gold font-bold">The Obsidian House | Architecture</span>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-4 group relative overflow-hidden bg-brand-black aspect-square md:aspect-auto cursor-pointer"
          >
            <img 
              src="https://picsum.photos/seed/mountain/800/1200?grayscale" 
              alt="Nature"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-75"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
              <span className="text-[10px] tracking-[0.3em] uppercase text-brand-gold font-bold">Summit Voids | Nature</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Quick View */}
      <section className="bg-brand-black py-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="flex flex-col items-start gap-8">
            <Camera className="text-brand-gold" size={40} strokeWidth={1} />
            <h3 className="text-3xl font-serif text-white tracking-tight">Photography</h3>
            <p className="text-brand-muted leading-relaxed font-light">
              Capturing the essence of form and shadow. We specialize in high-end editorial, architectural, and lifestyle imagery.
            </p>
            <Link to="/services" className="text-brand-gold text-[10px] tracking-[0.2em] uppercase font-bold group flex items-center gap-2">
              Explore Medium <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="flex flex-col items-start gap-8">
            <Video className="text-brand-gold" size={40} strokeWidth={1} />
            <h3 className="text-3xl font-serif text-white tracking-tight">Videography</h3>
            <p className="text-brand-muted leading-relaxed font-light">
              Cinematic movement that tells a story. From commercial shorts to brand documentaries, we translate visions into motion.
            </p>
            <Link to="/services" className="text-brand-gold text-[10px] tracking-[0.2em] uppercase font-bold group flex items-center gap-2">
              Watch Reels <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-col items-start gap-8">
            <Sparkles className="text-brand-gold" size={40} strokeWidth={1} />
            <h3 className="text-3xl font-serif text-white tracking-tight">Branding</h3>
            <p className="text-brand-muted leading-relaxed font-light">
              The soul of the identity. We develop cohesive visual systems that position brands at the intersection of luxury and utility.
            </p>
            <Link to="/services" className="text-brand-gold text-[10px] tracking-[0.2em] uppercase font-bold group flex items-center gap-2">
              View Systems <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Banner */}
      <section className="w-full h-[70vh] relative overflow-hidden group">
        <img 
          src="https://picsum.photos/seed/aeon/1920/1080?grayscale" 
          alt="Featured"
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[12px] tracking-[0.5em] text-brand-gold uppercase mb-6 block font-medium">FEATURED WORK</span>
            <h3 className="text-4xl md:text-8xl font-serif text-white tracking-tighter mb-8">THE AEON PROJECT</h3>
            <Link 
              to="/portfolio"
              className="inline-block px-10 py-4 bg-transparent border border-brand-gold/30 text-brand-gold text-[10px] tracking-[0.2em] uppercase hover:bg-brand-gold hover:text-brand-dark transition-all duration-500"
            >
              Case Study
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
