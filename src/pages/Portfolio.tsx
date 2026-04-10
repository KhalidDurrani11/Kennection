import { motion, useReducedMotion } from 'motion/react';
import { EASE_OUT } from '../lib/motion';

export default function Portfolio() {
  const reduce = useReducedMotion();

  const works = [
    { id: 1, title: 'The Concrete Silence', category: 'Architectural Photography', size: 'md:col-span-8 aspect-[16/10]', img: 'arch' },
    { id: 2, title: 'Nocturnal Identity', category: 'Branding & Direction', size: 'md:col-span-4 aspect-[3/4]', img: 'portrait' },
    { id: 3, title: 'Amber Essence', category: 'Product Design', size: 'md:col-span-4 aspect-square', img: 'product' },
    { id: 4, title: 'Nordic Flux', category: 'Videography', size: 'md:col-span-4 aspect-square', img: 'ocean' },
    { id: 5, title: 'Precision Drive', category: 'Commercial', size: 'md:col-span-4 aspect-square', img: 'car' },
    { id: 6, title: 'The Void Between', category: 'Experimental Film', size: 'md:col-span-12 aspect-[21/9]', img: 'mountain' },
    { id: 7, title: 'Chronos & Craft', category: 'Branding', size: 'md:col-span-6 aspect-video', img: 'watch' },
    { id: 8, title: 'The Living Canvas', category: 'Exhibition Design', size: 'md:col-span-6 aspect-video', img: 'gallery' },
  ];

  return (
    <div className="pt-36 md:pt-44 pb-28 md:pb-36 px-6 md:px-12 max-w-[1800px] mx-auto">
      <div className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-12 md:gap-16">
        <motion.div
          className="max-w-3xl"
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE_OUT }}
        >
          <p className="text-[10px] tracking-[0.35em] uppercase text-brand-gold mb-6 font-medium">Archive 01 — 24</p>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[5.5rem] font-serif tracking-tight text-white leading-[0.95]">
            Selected works
          </h1>
          <div className="mt-8 h-px max-w-xs bg-gradient-to-r from-brand-gold/90 to-transparent" />
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-x-8 gap-y-3 border-b border-white/[0.08] pb-5"
          role="tablist"
          aria-label="Filter works"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: EASE_OUT }}
        >
          {(['All', 'Photography', 'Videography', 'Branding'] as const).map((label, i) => (
            <button
              key={label}
              type="button"
              className={`text-[10px] tracking-[0.22em] uppercase pb-2 transition-colors duration-500 relative ${
                i === 0 ? 'text-white' : 'text-brand-muted hover:text-brand-gold'
              }`}
            >
              {label}
              {i === 0 ? <span className="absolute bottom-0 left-0 right-0 h-px bg-brand-gold" /> : null}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-4">
        {works.map((work, index) => (
          <motion.article
            key={work.id}
            initial={reduce ? false : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, delay: reduce ? 0 : Math.min(index * 0.06, 0.36), ease: EASE_OUT }}
            whileHover={reduce ? undefined : { y: -3 }}
            className={`${work.size} group relative overflow-hidden bg-brand-black cursor-pointer border border-white/[0.06]`}
          >
            <span className="absolute top-5 left-5 z-[2] text-[9px] tracking-[0.35em] text-white/30 font-medium">
              {String(index + 1).padStart(2, '0')}
            </span>
            <img
              src={`https://picsum.photos/seed/${work.img}/1200/800?grayscale`}
              alt={work.title}
              className="w-full h-full object-cover grayscale transition-all duration-[1.1s] ease-out group-hover:scale-[1.04] group-hover:grayscale-0 brightness-[0.75] group-hover:brightness-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-700" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-11 z-[1]">
              <div className="translate-y-0 opacity-100 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
                <p className="text-[10px] tracking-[0.22em] uppercase text-brand-gold mb-2 font-semibold">{work.category}</p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white tracking-tight">{work.title}</h3>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="mt-24 md:mt-32 flex justify-center"
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE_OUT }}
      >
        <button
          type="button"
          className="group relative px-10 sm:px-14 py-4 sm:py-[1.125rem] bg-brand-gold text-brand-dark font-semibold text-[10px] sm:text-[11px] tracking-[0.3em] uppercase transition-shadow duration-500 hover:shadow-[0_0_40px_-10px_rgba(201,174,134,0.5)] active:scale-[0.98]"
        >
          Explore archive
          <span className="absolute inset-0 border border-brand-gold translate-x-2 translate-y-2 -z-10 transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
        </button>
      </motion.div>
    </div>
  );
}
