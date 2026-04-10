import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="px-6 md:px-24 mb-32">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] tracking-[0.4em] text-brand-gold uppercase block mb-8 font-bold">Initiate Dialogue</span>
          <h1 className="text-7xl md:text-9xl font-serif leading-[0.9] tracking-tighter text-white mb-16">
            Let's Create
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="text-brand-muted text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                We collaborate with visionaries to build digital artifacts that endure. Reach out to start the conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-24 pb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Form */}
          <div className="md:col-span-7 bg-white/5 p-8 md:p-12">
            <form className="space-y-16">
              <div className="group relative">
                <label className="block text-[10px] tracking-[0.2em] text-brand-gold uppercase mb-4 opacity-60 group-focus-within:opacity-100 transition-opacity font-bold">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-0 border-b border-white/20 py-4 px-0 text-white focus:ring-0 focus:border-brand-gold placeholder:text-brand-muted/30 text-lg transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="group relative">
                <label className="block text-[10px] tracking-[0.2em] text-brand-gold uppercase mb-4 opacity-60 group-focus-within:opacity-100 transition-opacity font-bold">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-0 border-b border-white/20 py-4 px-0 text-white focus:ring-0 focus:border-brand-gold placeholder:text-brand-muted/30 text-lg transition-all"
                  placeholder="hello@konnection.studio"
                />
              </div>
              <div className="group relative">
                <label className="block text-[10px] tracking-[0.2em] text-brand-gold uppercase mb-4 opacity-60 group-focus-within:opacity-100 transition-opacity font-bold">Inquiry Details</label>
                <textarea 
                  className="w-full bg-transparent border-0 border-b border-white/20 py-4 px-0 text-white focus:ring-0 focus:border-brand-gold placeholder:text-brand-muted/30 text-lg transition-all resize-none"
                  placeholder="Describe your vision..."
                  rows={4}
                />
              </div>
              <button 
                type="submit"
                className="bg-brand-gold text-brand-dark px-12 py-5 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white active:scale-95 transition-all"
              >
                Send Transmission
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-5 space-y-12">
            <div className="relative aspect-square overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                <img 
                  src="https://picsum.photos/seed/map/800/800?grayscale" 
                  alt="Map"
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-8 left-8">
                <span className="text-[10px] tracking-[0.2em] text-brand-gold uppercase block mb-2 font-bold">Base of Operations</span>
                <h3 className="text-3xl font-serif text-white">Stockholm, SE</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-12">
              <div className="space-y-6">
                <span className="text-[10px] tracking-[0.2em] text-brand-gold uppercase block font-bold">Connect</span>
                <div className="flex flex-col gap-4">
                  {['Instagram', 'Behance', 'LinkedIn'].map(social => (
                    <a key={social} href="#" className="group flex items-center justify-between py-4 border-b border-white/10">
                      <span className="text-[11px] tracking-[0.2em] text-white uppercase group-hover:text-brand-gold transition-colors font-bold">{social}</span>
                      <ArrowUpRight size={16} className="text-brand-muted group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-8">
                <span className="text-[10px] tracking-[0.2em] text-brand-gold uppercase block mb-4 font-bold">Direct Contact</span>
                <a href="mailto:studio@konnection.site" className="text-xl font-serif text-white hover:text-brand-gold transition-colors block mb-4">
                  studio@konnection.site
                </a>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[10px] tracking-[0.2em] text-brand-muted uppercase font-bold">+46 (0) 8 123 45 67</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-brand-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-24 text-center">
          <h2 className="text-5xl font-serif text-white mb-8">Weekly Perspectives</h2>
          <p className="text-brand-muted max-w-xl mx-auto mb-12 font-light">
            Deep dives into the intersection of technology, design, and brutalist aesthetics delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              className="flex-1 bg-transparent border-0 border-b border-white/20 py-4 px-0 text-white focus:ring-0 focus:border-brand-gold placeholder:text-brand-muted/30 text-sm"
              placeholder="YOUR EMAIL"
            />
            <button className="text-brand-gold text-[10px] tracking-[0.2em] uppercase border-b-2 border-brand-gold hover:pb-1 transition-all font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
