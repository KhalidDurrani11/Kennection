import React from 'react';
import { motion } from 'motion/react';
import { Camera, Video, Sparkles, Share2, Eye, Layout as LayoutIcon, Film, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Photography",
      icon: <Camera size={40} strokeWidth={1} />,
      desc: "Still moments captured with cinematic depth. From high-fashion editorials to architectural documentation, we define the visual narrative through light and shadow.",
      tags: ["Editorial", "Commercial", "Architecture"],
      img: "fashion",
      layout: "normal"
    },
    {
      id: "02",
      title: "Videography",
      icon: <Video size={40} strokeWidth={1} />,
      desc: "Moving images that command attention. We produce cinematic content that ranges from short-form social storytelling to full-scale commercial productions.",
      tags: ["Narrative", "Directing", "Post-Production"],
      img: "set",
      layout: "reverse"
    }
  ];

  return (
    <div className="pt-40 pb-20">
      {/* Hero */}
      <section className="px-6 md:px-24 mb-32">
        <div className="max-w-4xl">
          <span className="text-brand-gold font-medium text-[10px] tracking-[0.4em] uppercase block mb-6">Capabilities</span>
          <h1 className="font-serif text-6xl md:text-8xl tracking-tighter leading-none text-white mb-12">
            Our Expertise
          </h1>
          <p className="text-brand-muted text-lg md:text-xl leading-relaxed max-w-2xl font-light">
            We manifest vision into form. Our multidisciplinary approach combines cinematic aesthetics with strategic precision to elevate brands into the cultural vanguard.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="px-6 md:px-12 space-y-32 md:space-y-64">
        {services.map((s) => (
          <div key={s.id} className={`grid md:grid-cols-12 gap-12 items-center ${s.layout === 'reverse' ? 'md:flex-row-reverse' : ''}`}>
            <motion.div 
              initial={{ opacity: 0, x: s.layout === 'reverse' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`md:col-span-7 overflow-hidden group ${s.layout === 'reverse' ? 'order-1 md:order-2' : ''}`}
            >
              <img 
                src={`https://picsum.photos/seed/${s.img}/1200/1500?grayscale`}
                alt={s.title}
                className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`md:col-span-5 ${s.layout === 'reverse' ? 'md:pr-12 order-2 md:order-1' : 'md:pl-12'}`}
            >
              <span className="text-brand-muted font-serif text-4xl opacity-20 block mb-4">{s.id}</span>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-brand-gold">{s.icon}</span>
                <h2 className="font-serif text-4xl text-white tracking-tight">{s.title}</h2>
              </div>
              <p className="text-brand-muted text-base leading-loose mb-8 font-light">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-4">
                {s.tags.map(tag => (
                  <span key={tag} className="px-4 py-1 bg-white/5 text-[10px] tracking-widest text-brand-light uppercase">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}

        {/* Grid Services */}
        <div className="grid md:grid-cols-2 gap-24">
          <div className="bg-white/5 p-12 flex flex-col justify-between group overflow-hidden relative aspect-square">
            <div className="relative z-10">
              <LayoutIcon className="text-brand-gold mb-8" size={48} strokeWidth={1} />
              <h3 className="font-serif text-3xl text-white mb-4">Branding</h3>
              <p className="text-brand-muted font-light leading-relaxed">
                Architecture for identity. We build comprehensive brand systems that balance heritage with modern minimalism.
              </p>
            </div>
            <img 
              src="https://picsum.photos/seed/brand/800/800?grayscale" 
              className="absolute bottom-0 right-0 w-2/3 h-1/2 object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Branding"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="bg-white/5 p-12 flex flex-col justify-between group overflow-hidden relative aspect-square md:mt-24">
            <div className="relative z-10">
              <Sparkles className="text-brand-gold mb-8" size={48} strokeWidth={1} />
              <h3 className="font-serif text-3xl text-white mb-4">Creative Direction</h3>
              <p className="text-brand-muted font-light leading-relaxed">
                The master vision. We curate every touchpoint to ensure a cohesive and high-fidelity brand experience.
              </p>
            </div>
            <img 
              src="https://picsum.photos/seed/creative/800/800?grayscale" 
              className="absolute bottom-0 right-0 w-2/3 h-1/2 object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Creative Direction"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Bento Style Service */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white/5 p-16 flex flex-col justify-center">
            <div className="max-w-md">
              <Share2 className="text-brand-gold mb-6" size={40} strokeWidth={1} />
              <h2 className="font-serif text-4xl text-white mb-4">Social Media</h2>
              <p className="text-brand-muted font-light leading-relaxed mb-8">
                Strategic presence in the digital noise. We create viral-ready content that maintains the prestige of your brand while maximizing engagement.
              </p>
              <button className="inline-flex items-center gap-2 text-brand-gold text-[10px] tracking-[0.2em] font-bold group">
                VIEW STRATEGY <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
          <div className="md:col-span-1 overflow-hidden h-full min-h-[400px]">
            <img 
              src="https://picsum.photos/seed/social/800/1200?grayscale" 
              className="w-full h-full object-cover"
              alt="Social"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Final Cards */}
        <div className="space-y-12">
          <div className="bg-brand-black grid md:grid-cols-2 group">
            <div className="p-16 flex flex-col justify-center order-2 md:order-1">
              <h3 className="font-serif text-3xl text-white mb-4">Event Coverage</h3>
              <p className="text-brand-muted font-light leading-relaxed mb-8">
                High-profile gatherings documented with journalistic integrity and editorial flair. We capture the essence of the elite.
              </p>
              <div className="h-[1px] w-12 bg-brand-gold"></div>
            </div>
            <div className="overflow-hidden order-1 md:order-2">
              <img 
                src="https://picsum.photos/seed/event/1200/600?grayscale" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-1000"
                alt="Event"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="bg-brand-black grid md:grid-cols-2 group">
            <div className="overflow-hidden">
              <img 
                src="https://picsum.photos/seed/commercial/1200/600?grayscale" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-1000"
                alt="Commercial"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-16 flex flex-col justify-center">
              <h3 className="font-serif text-3xl text-white mb-4">Commercial Production</h3>
              <p className="text-brand-muted font-light leading-relaxed mb-8">
                Scale without compromise. From concept to broadcast, we deliver high-value assets for global campaigns.
              </p>
              <div className="h-[1px] w-12 bg-brand-gold"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-64 px-6 text-center bg-brand-black mt-32">
        <h2 className="font-serif text-5xl md:text-7xl text-white mb-12 tracking-tight">Ready to begin?</h2>
        <button className="border border-brand-gold px-12 py-5 text-brand-gold font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-brand-gold hover:text-brand-dark transition-all duration-500">
          INITIATE PROJECT
        </button>
      </section>
    </div>
  );
}
