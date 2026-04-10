import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowRight, Camera, Video, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EASE_OUT } from '../lib/motion';

const fadeUp = (delay: number, reduce: boolean | null) =>
  reduce
    ? { initial: false as const, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' as const } }
    : {
        initial: { opacity: 0, y: 32 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' as const },
        transition: { duration: 0.8, delay, ease: EASE_OUT },
      };

export default function Home() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const featuredRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroImgY = useTransform(heroProgress, [0, 1], reduce ? [0, 0] : [0, 140]);
  const heroImgScale = useTransform(heroProgress, [0, 1], reduce ? [1, 1] : [1, 1.12]);

  const { scrollYProgress: featProgress } = useScroll({
    target: featuredRef,
    offset: ['start end', 'end start'],
  });
  const featImgY = useTransform(featProgress, [0, 1], reduce ? [0, 0] : [-32, 32]);

  const headline = ['We craft', 'visual', 'narratives'];

  return (
    <div className="overflow-hidden">
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] min-h-screen w-full flex items-center justify-center"
      >
        <motion.div
          style={{ y: heroImgY, scale: heroImgScale }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <img
            src="https://picsum.photos/seed/monolith-hero/1920/1080?grayscale"
            alt=""
            className="w-full h-full object-cover brightness-[0.42] contrast-[1.15] scale-[1.08]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-brand-dark/30 via-transparent to-brand-dark" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_20%,rgba(8,8,8,0.85)_100%)]" />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.span
            className="block text-[11px] sm:text-[12px] tracking-[0.55em] uppercase text-brand-gold mb-8 sm:mb-10 font-medium"
            initial={reduce ? false : { opacity: 0, letterSpacing: '0.35em' }}
            animate={{ opacity: 1, letterSpacing: '0.55em' }}
            transition={{ duration: 1.1, ease: EASE_OUT }}
          >
            Established MMXXIV
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-[7rem] font-serif font-medium text-white tracking-tight mb-10 sm:mb-14 leading-[0.92] text-glow px-1">
            {headline.map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={reduce ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: 0.15 + i * 0.14, ease: EASE_OUT }}
              >
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.65, ease: EASE_OUT }}
          >
            <Link
              to="/portfolio"
              className="group relative inline-flex items-center justify-center overflow-hidden px-10 sm:px-14 py-4 sm:py-[1.125rem] bg-brand-gold text-brand-dark font-semibold text-[10px] sm:text-[11px] tracking-[0.28em] uppercase transition-shadow duration-500 hover:shadow-[0_0_48px_-8px_rgba(201,174,134,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
            >
              <span className="relative z-10">View portfolio</span>
              <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 ease-out group-hover:translate-x-0" />
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-8 lg:left-14 hidden lg:flex flex-col items-center gap-6">
          <div className="w-px h-24 bg-gradient-to-b from-brand-gold/80 via-brand-gold/25 to-transparent relative overflow-hidden">
            {!reduce ? (
              <motion.div
                className="absolute left-0 right-0 top-0 h-1/2 bg-gradient-to-b from-brand-gold to-transparent"
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            ) : null}
          </div>
          <span className="text-[9px] tracking-[0.35em] text-brand-muted uppercase [writing-mode:vertical-lr] rotate-180">
            Scroll
          </span>
        </div>
      </section>

      <section className="py-28 md:py-36 lg:py-44 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-10">
          <motion.div {...fadeUp(0, reduce)}>
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-gold/90 mb-5 font-medium">Index 01</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-5 tracking-tight">Selected stories</h2>
            <div className="h-px w-20 bg-gradient-to-r from-brand-gold to-transparent" />
          </motion.div>
          <motion.p
            className="max-w-sm text-brand-muted text-sm font-light leading-[1.75]"
            {...fadeUp(0.12, reduce)}
          >
            A curated set of commissions where light, space, and narrative converge — from editorial campaigns to
            architectural studies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-5">
          <motion.article
            className="md:col-span-8 group relative overflow-hidden bg-brand-black aspect-video cursor-pointer border border-white/[0.06]"
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: EASE_OUT }}
            whileHover={reduce ? undefined : { y: -4 }}
          >
            <div className="absolute inset-0 card-shine card-shine-hover opacity-0 group-hover:opacity-100 z-[2] pointer-events-none" />
            <img
              src="https://picsum.photos/seed/arch/1200/800?grayscale"
              alt="Architecture study"
              className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.04] brightness-[0.72] group-hover:brightness-[0.85]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-[1]">
              <div className="translate-y-0 opacity-100 md:translate-y-4 md:opacity-90 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
                <span className="text-[10px] tracking-[0.32em] uppercase text-brand-gold font-semibold block mb-3">
                  Architecture
                </span>
                <span className="text-xl md:text-2xl font-serif text-white tracking-tight">The Obsidian House</span>
              </div>
            </div>
          </motion.article>

          <motion.article
            className="md:col-span-4 group relative overflow-hidden bg-brand-black aspect-square md:aspect-auto md:min-h-[min(100%,28rem)] cursor-pointer border border-white/[0.06]"
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: EASE_OUT }}
            whileHover={reduce ? undefined : { y: -4 }}
          >
            <img
              src="https://picsum.photos/seed/mountain/800/1200?grayscale"
              alt="Landscape study"
              className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.05] brightness-[0.72] group-hover:brightness-[0.88]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-85 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-[1]">
              <div className="translate-y-0 md:translate-y-3 md:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="text-[10px] tracking-[0.32em] uppercase text-brand-gold font-semibold block mb-3">
                  Editorial
                </span>
                <span className="text-xl md:text-2xl font-serif text-white tracking-tight">Summit voids</span>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="bg-brand-black/80 border-y border-white/[0.06] py-28 md:py-36 lg:py-44">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
          {[
            {
              icon: <Camera className="text-brand-gold" size={36} strokeWidth={1} />,
              title: 'Photography',
              body: 'Editorial, architectural, and lifestyle imagery — composed with the restraint of a still frame and the tension of a story waiting to unfold.',
              to: '/services',
              label: 'Explore',
            },
            {
              icon: <Video className="text-brand-gold" size={36} strokeWidth={1} />,
              title: 'Videography',
              body: 'Commercial films, brand documentaries, and social-first motion — directed with cinematic rhythm and broadcast-grade finish.',
              to: '/services',
              label: 'Capabilities',
            },
            {
              icon: <Sparkles className="text-brand-gold" size={36} strokeWidth={1} />,
              title: 'Branding',
              body: 'Identity systems and art direction that hold up in print, on screen, and in the wild — coherent, quiet, and unmistakably yours.',
              to: '/services',
              label: 'Systems',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="flex flex-col items-start gap-7 border-t border-white/[0.08] pt-10 lg:border-t-0 lg:pt-0 lg:border-l lg:border-white/[0.08] lg:pl-12 first:lg:border-l-0 first:lg:pl-0"
              initial={reduce ? false : { opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: EASE_OUT }}
            >
              {item.icon}
              <h3 className="text-3xl md:text-[2rem] font-serif text-white tracking-tight">{item.title}</h3>
              <p className="text-brand-muted leading-[1.8] font-light text-[15px]">{item.body}</p>
              <Link
                to={item.to}
                className="text-brand-gold text-[10px] tracking-[0.28em] uppercase font-semibold group inline-flex items-center gap-2 mt-1 hover:gap-3 transition-all duration-500"
              >
                {item.label}
                <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section ref={featuredRef} className="w-full min-h-[65vh] md:min-h-[70vh] relative overflow-hidden group">
        <motion.div style={{ y: featImgY }} className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/aeon/1920/1080?grayscale"
            alt=""
            className="w-full h-full object-cover scale-110 brightness-[0.55] transition-transform duration-[2.2s] ease-out group-hover:scale-[1.14]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/50 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center p-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
            className="max-w-4xl"
          >
            <span className="text-[11px] tracking-[0.5em] text-brand-gold uppercase mb-8 block font-medium">
              Featured work
            </span>
            <h3 className="text-3xl sm:text-5xl md:text-8xl font-serif text-white tracking-tight mb-10 md:mb-12 px-2">
              The Aeon project
            </h3>
            <Link
              to="/portfolio"
              className="group relative inline-block overflow-hidden px-11 py-4 border border-brand-gold/40 text-brand-gold text-[10px] tracking-[0.28em] uppercase font-semibold transition-all duration-500 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="relative z-10">Case study</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
