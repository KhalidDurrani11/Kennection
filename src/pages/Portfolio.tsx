import React from 'react';
import { motion } from 'motion/react';

export default function Portfolio() {
  const works = [
    { id: 1, title: "The Concrete Silence", category: "Architectural Photography", size: "md:col-span-8 aspect-[16/10]", img: "arch" },
    { id: 2, title: "Nocturnal Identity", category: "Branding & Direction", size: "md:col-span-4 aspect-[3/4]", img: "portrait" },
    { id: 3, title: "Amber Essence", category: "Product Design", size: "md:col-span-4 aspect-square", img: "product" },
    { id: 4, title: "Nordic Flux", category: "Videography", size: "md:col-span-4 aspect-square", img: "ocean" },
    { id: 5, title: "Precision Drive", category: "Commercial", size: "md:col-span-4 aspect-square", img: "car" },
    { id: 6, title: "The Void Between", category: "Experimental Film", size: "md:col-span-12 aspect-[21/9]", img: "mountain" },
    { id: 7, title: "Chronos & Craft", category: "Branding", size: "md:col-span-6 aspect-video", img: "watch" },
    { id: 8, title: "The Living Canvas", category: "Exhibition Design", size: "md:col-span-6 aspect-video", img: "gallery" },
  ];

  return (
    <div className="pt-40 pb-32 px-6 md:px-12 max-w-[1800px] mx-auto">
      {/* Header */}
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="max-w-3xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-brand-gold mb-6 font-medium">Archive 01 — 24</p>
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight text-white leading-[0.9]">Selected Works</h1>
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-4 border-b border-white/10 pb-4">
          <button className="text-[10px] tracking-[0.2em] uppercase text-white border-b border-brand-gold">All</button>
          <button className="text-[10px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-gold transition-colors">Photography</button>
          <button className="text-[10px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-gold transition-colors">Videography</button>
          <button className="text-[10px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-gold transition-colors">Branding</button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4">
        {works.map((work) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${work.size} group relative overflow-hidden bg-brand-black cursor-pointer`}
          >
            <img 
              src={`https://picsum.photos/seed/${work.img}/1200/800?grayscale`}
              alt={work.title}
              className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
              <p className="text-[10px] tracking-[0.2em] uppercase text-brand-gold mb-2">{work.category}</p>
              <h3 className="text-2xl md:text-4xl font-serif text-white">{work.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-32 flex justify-center">
        <button className="group relative px-12 py-5 bg-brand-gold text-brand-dark font-bold text-xs tracking-[0.3em] uppercase transition-all duration-300 active:scale-95">
          Explore More Archive
          <div className="absolute inset-0 border border-brand-gold translate-x-2 translate-y-2 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
        </button>
      </div>
    </div>
  );
}
