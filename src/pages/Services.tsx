import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { Camera, Video, Sparkles, Share2, Layout as LayoutIcon, ArrowRight } from 'lucide-react';
import { EASE_OUT } from '../lib/motion';

export default function Services() {
  const reduce = useReducedMotion();

  const services = [
    {
      id: '01',
      title: 'Photography',
      icon: <Camera size={38} strokeWidth={1} />,
      desc: 'Still moments with cinematic depth. From high-fashion editorials to architectural documentation, we shape narrative through light, shadow, and composition.',
      tags: ['Editorial', 'Commercial', 'Architecture'],
      img: 'fashion',
      layout: 'normal' as const,
    },
    {
      id: '02',
      title: 'Videography',
      icon: <Video size={38} strokeWidth={1} />,
      desc: 'Motion that holds attention — short-form social, brand films, and full commercial productions, directed and graded to a single visual standard.',
      tags: ['Narrative', 'Directing', 'Post-production'],
      img: 'set',
      layout: 'reverse' as const,
    },
  ];

  return (
    <div className="pt-36 md:pt-44 pb-24 md:pb-32">
      <section className="px-6 md:px-24 mb-28 md:mb-40 max-w-[1400px] mx-auto">
        <motion.div
          className="max-w-4xl"
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE_OUT }}
        >
          <span className="text-brand-gold font-medium text-[10px] tracking-[0.38em] uppercase block mb-7">
            Capabilities
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl tracking-tight leading-[0.95] text-white mb-10 md:mb-14">
            Our expertise
          </h1>
          <div className="h-px w-24 bg-gradient-to-r from-brand-gold to-transparent mb-10" />
          <p className="text-brand-muted text-lg md:text-xl leading-[1.85] max-w-2xl font-light">
            We translate strategy into imagery — cinematic, disciplined, and ready for every channel your brand inhabits.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 space-y-28 md:space-y-52 max-w-[1600px] mx-auto">
        {services.map((s) => (
          <div key={s.id} className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            <motion.div
              initial={reduce ? false : { opacity: 0, x: s.layout === 'reverse' ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: EASE_OUT }}
              className={`md:col-span-7 overflow-hidden group border border-white/[0.06] ${s.layout === 'reverse' ? 'order-1 md:order-2' : ''}`}
            >
              <img
                src={`https://picsum.photos/seed/${s.img}/1200/1500?grayscale`}
                alt={s.title}
                className="w-full aspect-[4/5] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03] brightness-[0.88]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, delay: 0.08, ease: EASE_OUT }}
              className={`md:col-span-5 ${s.layout === 'reverse' ? 'md:pr-8 order-2 md:order-1' : 'md:pl-8'}`}
            >
              <span className="text-brand-muted font-serif text-5xl opacity-[0.12] block mb-2 leading-none">{s.id}</span>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-brand-gold">{s.icon}</span>
                <h2 className="font-serif text-4xl md:text-[2.75rem] text-white tracking-tight">{s.title}</h2>
              </div>
              <p className="text-brand-muted text-base leading-[1.9] mb-10 font-light">{s.desc}</p>
              <div className="flex flex-wrap gap-3">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 border border-white/[0.08] bg-white/[0.03] text-[10px] tracking-[0.22em] text-brand-light uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {[
            {
              icon: <LayoutIcon className="text-brand-gold mb-8" size={46} strokeWidth={1} />,
              title: 'Branding',
              body: 'Identity systems that balance heritage and restraint — typography, colour, and art direction as a single language.',
              img: 'brand',
              alt: 'Branding',
              offset: false,
            },
            {
              icon: <Sparkles className="text-brand-gold mb-8" size={46} strokeWidth={1} />,
              title: 'Creative direction',
              body: 'End-to-end creative leadership — from treatment to final delivery — so every touchpoint feels authored.',
              img: 'creative',
              alt: 'Creative direction',
              offset: true,
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={reduce ? false : { opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: reduce ? 0 : i * 0.1, ease: EASE_OUT }}
              className={`bg-white/[0.03] border border-white/[0.06] p-10 md:p-14 flex flex-col justify-between group overflow-hidden relative aspect-square ${
                card.offset ? 'md:mt-20' : ''
              }`}
            >
              <div className="relative z-10">
                {card.icon}
                <h3 className="font-serif text-3xl text-white mb-5 tracking-tight">{card.title}</h3>
                <p className="text-brand-muted font-light leading-[1.8]">{card.body}</p>
              </div>
              <img
                src={`https://picsum.photos/seed/${card.img}/800/800?grayscale`}
                className="absolute bottom-0 right-0 w-2/3 h-1/2 object-cover opacity-[0.15] grayscale transition-all duration-[1s] ease-out group-hover:opacity-25 group-hover:grayscale-0"
                alt=""
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 md:gap-0 md:border md:border-white/[0.06] overflow-hidden"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
        >
          <div className="md:col-span-2 bg-white/[0.03] p-10 sm:p-14 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/[0.06]">
            <div className="max-w-md">
              <Share2 className="text-brand-gold mb-7" size={38} strokeWidth={1} />
              <h2 className="font-serif text-4xl text-white mb-5 tracking-tight">Social & digital</h2>
              <p className="text-brand-muted font-light leading-[1.85] mb-10">
                Content systems for feeds and campaigns — crafted to read as premium, not loud.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-brand-gold text-[10px] tracking-[0.28em] font-semibold uppercase group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
              >
                Start a project
                <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-1 overflow-hidden min-h-[320px] md:min-h-[400px]">
            <img
              src="https://picsum.photos/seed/social/800/1200?grayscale"
              className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-105 brightness-[0.85]"
              alt=""
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            className="bg-brand-black border border-white/[0.06] grid md:grid-cols-2 group overflow-hidden"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: EASE_OUT }}
          >
            <div className="p-10 sm:p-14 md:p-16 flex flex-col justify-center order-2 md:order-1">
              <h3 className="font-serif text-3xl text-white mb-5 tracking-tight">Event coverage</h3>
              <p className="text-brand-muted font-light leading-[1.85] mb-10">
                High-profile gatherings with editorial discipline — stills and motion, delivered overnight when the moment
                demands it.
              </p>
              <div className="h-px w-14 bg-gradient-to-r from-brand-gold to-transparent" />
            </div>
            <div className="overflow-hidden order-1 md:order-2 min-h-[280px] md:min-h-0">
              <img
                src="https://picsum.photos/seed/event/1200/600?grayscale"
                className="w-full h-full min-h-[280px] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04] brightness-[0.85]"
                alt=""
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          <motion.div
            className="bg-brand-black border border-white/[0.06] grid md:grid-cols-2 group overflow-hidden"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.06, ease: EASE_OUT }}
          >
            <div className="overflow-hidden min-h-[280px] md:min-h-0">
              <img
                src="https://picsum.photos/seed/commercial/1200/600?grayscale"
                className="w-full h-full min-h-[280px] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04] brightness-[0.85]"
                alt=""
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-10 sm:p-14 md:p-16 flex flex-col justify-center">
              <h3 className="font-serif text-3xl text-white mb-5 tracking-tight">Commercial production</h3>
              <p className="text-brand-muted font-light leading-[1.85] mb-10">
                Scale without compromise — treatments, production, and post under one roof, aligned to your brand
                guidelines.
              </p>
              <div className="h-px w-14 bg-gradient-to-r from-brand-gold to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="py-32 md:py-44 px-6 text-center bg-brand-black border-t border-white/[0.06] mt-24 md:mt-32"
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE_OUT }}
      >
        <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl text-white mb-10 md:mb-14 tracking-tight px-2">
          Ready to begin?
        </h2>
        <Link
          to="/contact"
          className="group relative inline-block overflow-hidden border border-brand-gold/50 px-11 sm:px-14 py-4 sm:py-5 text-brand-gold font-semibold text-[10px] tracking-[0.38em] uppercase transition-all duration-500 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold hover:shadow-[0_0_48px_-12px_rgba(201,174,134,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Initiate project
        </Link>
      </motion.section>
    </div>
  );
}
