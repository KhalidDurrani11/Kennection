import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { Quote, ArrowRight } from 'lucide-react';
import { EASE_OUT } from '../lib/motion';

export default function About() {
  const reduce = useReducedMotion();

  const team = [
    { name: 'Julian Thorne', role: 'Creative Lead', title: 'Founder / Director', img: 'man1' },
    { name: 'Elena Vane', role: 'Visual Strategist', title: 'Head of Photography', img: 'woman1' },
    { name: 'Marcus Chen', role: 'Technical Director', title: 'Production Designer', img: 'man2' },
  ];

  return (
    <div className="pt-28 md:pt-36">
      <section className="relative min-h-[min(100dvh,900px)] md:min-h-screen flex items-center px-6 md:px-20 overflow-hidden py-20 md:py-0">
        <div className="relative z-10 max-w-4xl">
          <motion.p
            className="text-[11px] tracking-[0.35em] uppercase text-brand-gold mb-8 font-medium"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
          >
            Established MMXXIV
          </motion.p>
          <h1 className="text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-serif font-medium tracking-tight leading-[0.95] mb-10 md:mb-14 text-white">
            <motion.span
              className="block"
              initial={reduce ? false : { opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: EASE_OUT }}
            >
              Beyond the
            </motion.span>
            <motion.span
              className="block italic text-brand-gold/75"
              initial={reduce ? false : { opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE_OUT }}
            >
              lens
            </motion.span>
          </h1>
          <motion.div
            className="h-px w-24 bg-gradient-to-r from-brand-gold to-transparent mb-12"
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: EASE_OUT }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.p
            className="text-lg md:text-2xl text-brand-muted max-w-2xl leading-relaxed font-light"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.45, ease: EASE_OUT }}
          >
            A creative studio devoted to visual permanence — where restraint, light, and narrative carry more weight
            than noise.
          </motion.p>
        </div>
        <motion.div
          className="hidden md:block absolute right-0 top-0 w-1/2 h-full opacity-35 grayscale pointer-events-none"
          initial={reduce ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 0.35, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: EASE_OUT }}
        >
          <img
            src="https://picsum.photos/seed/studio-bg/1000/1500?grayscale"
            alt=""
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      <section className="py-32 md:py-44 px-6 md:px-20 bg-brand-black border-y border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 items-start max-w-[1400px] mx-auto">
          <motion.div
            className="md:col-span-5 order-2 md:order-1"
            initial={reduce ? false : { opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
          >
            <div className="overflow-hidden border border-white/[0.06]">
              <img
                src="https://picsum.photos/seed/lens/800/1000?grayscale"
                alt="Studio process"
                className="w-full aspect-[4/5] object-cover grayscale brightness-[0.8] hover:grayscale-0 transition-all duration-[1.2s] ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          <motion.div
            className="md:col-span-7 order-1 md:order-2 flex flex-col justify-center"
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
          >
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-gold mb-6 font-medium">Philosophy</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-12 tracking-tight">Our narrative</h2>
            <div className="space-y-8 text-brand-muted text-lg leading-[1.85] max-w-xl font-light">
              <p>
                Kennection Studio began from a singular obsession: to strip away noise and focus on the geometry of light
                and shadow. We do not only capture images — we construct visual objects that hold attention.
              </p>
              <p>
                From boutique commissions to global campaigns, our process stays the same: research, restraint, and a
                relentless edit. The result is work that feels considered long after the first glance.
              </p>
              <div className="pt-6">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center text-brand-gold group gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
                >
                  <span className="text-xs tracking-[0.25em] uppercase font-semibold">The archive</span>
                  <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-28 md:py-40 px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: EASE_OUT }}
        >
          <Quote className="text-brand-gold/90 mb-10 mx-auto" size={44} fill="currentColor" aria-hidden />
        </motion.div>
        <motion.blockquote
          className="text-3xl sm:text-4xl md:text-6xl font-serif text-white max-w-5xl leading-[1.15] font-light"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: EASE_OUT }}
        >
          <span className="italic text-white/95">
            &ldquo;True luxury is stillness in a frame. We slow the gaze until the subject reveals itself.&rdquo;
          </span>
        </motion.blockquote>
        <motion.cite
          className="mt-12 text-xs tracking-[0.35em] uppercase text-brand-muted not-italic font-medium"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          — Kennection manifesto
        </motion.cite>
      </section>

      <section className="py-32 md:py-44 px-6 md:px-20 border-t border-white/[0.06]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-8 mb-16 md:mb-24 max-w-[1400px] mx-auto">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
          >
            <p className="text-[10px] tracking-[0.35em] text-brand-gold mb-4 uppercase font-semibold">The architects</p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight">Core collective</h2>
          </motion.div>
          <motion.p
            className="hidden md:block max-w-xs text-brand-muted text-sm font-light leading-relaxed"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Cinematographers, art directors, and producers — unified under one visual standard.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-12 max-w-[1400px] mx-auto">
          {team.map((member, i) => (
            <motion.article
              key={member.name}
              className="group"
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: reduce ? 0 : i * 0.1, ease: EASE_OUT }}
            >
              <div className="relative overflow-hidden mb-8 aspect-[3/4] border border-white/[0.06]">
                <img
                  src={`https://picsum.photos/seed/${member.img}/600/800?grayscale`}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-all duration-[1.1s] ease-out group-hover:scale-[1.03] group-hover:grayscale-0 brightness-[0.82]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-7">
                  <span className="text-white text-[10px] tracking-[0.28em] uppercase font-semibold">{member.title}</span>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2 tracking-tight">{member.name}</h3>
              <p className="text-[10px] tracking-[0.28em] text-brand-muted uppercase font-semibold">{member.role}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
