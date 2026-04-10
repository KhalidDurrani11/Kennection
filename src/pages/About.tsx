import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Quote, ArrowRight } from 'lucide-react';

export default function About() {
  const team = [
    { name: "Julian Thorne", role: "Creative Lead", title: "FOUNDER / DIRECTOR", img: "man1" },
    { name: "Elena Vane", role: "Visual Strategist", title: "HEAD OF PHOTOGRAPHY", img: "woman1" },
    { name: "Marcus Chen", role: "Technical Director", title: "PRODUCTION DESIGNER", img: "man2" },
  ];

  return (
    <div className="pt-28 md:pt-32">
      {/* Hero */}
      <section className="relative min-h-[min(100dvh,900px)] md:min-h-screen flex items-center px-6 md:px-20 overflow-hidden py-16 md:py-0">
        <div className="relative z-10 max-w-4xl">
          <p className="text-[12px] tracking-[0.3em] uppercase text-brand-gold mb-6 font-medium">Established MMXXIV</p>
          <h1 className="text-4xl sm:text-6xl md:text-9xl font-serif font-bold tracking-tighter leading-none mb-8 md:mb-12 text-white">
            Beyond the <br /><span className="italic text-brand-gold/60">Lens</span>
          </h1>
          <div className="h-[1px] w-24 bg-brand-gold mb-12"></div>
          <p className="text-xl md:text-2xl text-brand-muted max-w-2xl leading-relaxed font-light">
            A creative collective dedicated to the pursuit of visual permanence in an ephemeral digital age.
          </p>
        </div>
        <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full opacity-40 grayscale pointer-events-none">
          <img 
            src="https://picsum.photos/seed/studio-bg/1000/1500?grayscale" 
            alt="Studio"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Narrative */}
      <section className="py-40 px-6 md:px-20 bg-brand-black">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 order-2 md:order-1">
            <img 
              src="https://picsum.photos/seed/lens/800/1000?grayscale" 
              alt="Lens"
              className="w-full aspect-[4/5] object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-7 order-1 md:order-2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-12 tracking-tight">Our Narrative</h2>
            <div className="space-y-8 text-brand-muted text-lg leading-relaxed max-w-xl font-light">
              <p>
                Kennection Studio began from a singular obsession: to strip away the noise and focus on the fundamental geometry of light and shadow. We don't just capture images; we construct visual monoliths.
              </p>
              <p>
                Over the past decade, we have transitioned from a boutique photography house into a full-scale cinematic studio. Our mission remains unchanged: to provide our clients with a visual language that transcends trends and speaks to the core of human experience.
              </p>
              <div className="pt-8">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center text-brand-gold group gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
                >
                  <span className="text-sm tracking-widest uppercase font-bold">The Archive</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-60 px-6 flex flex-col items-center text-center">
        <Quote className="text-brand-gold mb-12" size={48} fill="currentColor" />
        <blockquote className="text-3xl md:text-6xl font-serif text-white max-w-5xl leading-tight italic font-light">
          "True luxury is found in the stillness of a frame. We believe that by slowing down the gaze, we rediscover the soul of the subject."
        </blockquote>
        <cite className="mt-12 text-sm tracking-[0.4em] uppercase text-brand-muted not-italic">— Kennection manifesto</cite>
      </section>

      {/* Team */}
      <section className="py-40 px-6 md:px-20">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-8 mb-16 md:mb-24">
          <div>
            <p className="text-xs tracking-widest text-brand-gold mb-4 uppercase font-bold">THE ARCHITECTS</p>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">Core Collective</h2>
          </div>
          <div className="hidden md:block">
            <p className="max-w-xs text-brand-muted text-sm font-light leading-relaxed">
              A curated team of visionaries specializing in cinematography, art direction, and digital alchemy.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="relative overflow-hidden mb-8 aspect-[3/4]">
                <img 
                  src={`https://picsum.photos/seed/${member.img}/600/800?grayscale`} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-white text-[10px] tracking-widest uppercase font-bold">{member.title}</span>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">{member.name}</h3>
              <p className="text-[10px] tracking-widest text-brand-muted uppercase font-bold">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
