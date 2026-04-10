import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { SITE_NAME } from '../constants';
import { EASE_OUT } from '../lib/motion';

export default function NotFound() {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 pt-40 pb-24 text-center">
      <motion.p
        className="text-[10px] tracking-[0.35em] uppercase text-brand-gold mb-6 font-semibold"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        404
      </motion.p>
      <motion.h1
        className="text-4xl sm:text-5xl md:text-7xl font-serif text-white tracking-tight mb-6"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.05, ease: EASE_OUT }}
      >
        Page not found
      </motion.h1>
      <motion.p
        className="text-brand-muted max-w-md mb-12 font-light leading-relaxed"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        The page you are looking for does not exist or has been moved.
      </motion.p>
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: EASE_OUT }}
      >
        <Link
          to="/"
          className="inline-block px-10 py-4 bg-brand-gold text-brand-dark text-[10px] tracking-[0.28em] uppercase font-semibold hover:bg-white hover:shadow-[0_0_36px_-8px_rgba(255,255,255,0.4)] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Back to {SITE_NAME}
        </Link>
      </motion.div>
    </div>
  );
}
