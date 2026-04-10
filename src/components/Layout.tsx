import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { SITE_NAME, SOCIAL } from '../constants';
import { pageTransition } from '../lib/motion';
import ScrollProgress from './ScrollProgress';

function SocialFooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[10px] tracking-[0.22em] font-sans uppercase text-brand-muted hover:text-brand-gold transition-colors duration-500 hover:underline decoration-brand-gold/80 underline-offset-[10px]"
    >
      {label}
    </a>
  );
}

const menuContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

const menuItem = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();
  const reduce = useReducedMotion();
  const pt = pageTransition(reduce);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  React.useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="grain" aria-hidden />

      <a
        href="#main-content"
        className="fixed left-4 top-0 z-[100] -translate-y-full px-4 py-2 bg-brand-gold text-brand-dark text-xs font-bold uppercase tracking-widest transition-transform focus:translate-y-[max(1rem,env(safe-area-inset-top))] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 sm:py-5 backdrop-blur-2xl border-b border-white/[0.07] pt-[max(1rem,env(safe-area-inset-top))] relative transition-[background-color,box-shadow] duration-500 ease-out ${
          scrolled
            ? 'bg-brand-dark/[0.94] shadow-[0_12px_48px_-16px_rgba(0,0,0,0.75)]'
            : 'bg-brand-dark/[0.72]'
        }`}
      >
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-gold hover:opacity-80 transition-opacity duration-300 cursor-pointer shrink-0 p-1.5 -m-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/80"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={22} strokeWidth={1.5} aria-hidden /> : <Menu size={22} strokeWidth={1.5} aria-hidden />}
          </button>
          <Link
            to="/"
            className="text-lg sm:text-xl md:text-2xl font-serif tracking-[0.02em] text-white uppercase truncate hover:text-brand-light transition-colors duration-500"
          >
            {SITE_NAME}
          </Link>
        </div>

        <nav className="hidden md:flex gap-10 lg:gap-12 items-center" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative py-2 text-[10px] tracking-[0.22em] font-sans uppercase transition-colors duration-500 whitespace-nowrap ${
                location.pathname === link.path ? 'text-white' : 'text-brand-muted hover:text-brand-gold'
              }`}
            >
              {link.name}
              {location.pathname === link.path ? (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-px h-px bg-brand-gold"
                  transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                />
              ) : null}
            </Link>
          ))}
        </nav>

        <a
          href={SOCIAL.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center shrink-0 p-2.5 text-brand-muted hover:text-brand-gold transition-colors duration-500 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60"
          aria-label="Kennection Studio on Instagram"
        >
          <Instagram size={21} strokeWidth={1.25} aria-hidden />
        </a>

        <ScrollProgress />
      </header>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            key="overlay"
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-brand-black/98 backdrop-blur-xl flex flex-col items-center justify-center p-8 pt-[max(4rem,env(safe-area-inset-top))]"
          >
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-[max(2rem,env(safe-area-inset-top))] right-6 sm:right-10 text-brand-gold/90 hover:text-brand-gold p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold transition-colors"
              aria-label="Close menu"
            >
              <X size={28} strokeWidth={1.5} aria-hidden />
            </button>
            <motion.nav
              className="flex flex-col gap-5 sm:gap-7 text-center"
              aria-label="Mobile primary"
              variants={reduce ? undefined : menuContainer}
              initial={reduce ? false : 'hidden'}
              animate={reduce ? { opacity: 1 } : 'show'}
            >
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={reduce ? undefined : menuItem}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[clamp(1.5rem,5vw,2.25rem)] font-serif text-white/95 hover:text-brand-gold transition-colors duration-500 tracking-tight"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
            <motion.div
              className="absolute bottom-[max(2rem,env(safe-area-inset-bottom))] flex gap-8"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.35, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-muted hover:text-brand-gold transition-colors duration-500 p-2"
                aria-label="Instagram"
              >
                <Instagram size={22} strokeWidth={1.25} />
              </a>
              {SOCIAL.linkedin ? (
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-muted hover:text-brand-gold transition-colors duration-500 p-2"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} strokeWidth={1.25} />
                </a>
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          id="main-content"
          className="grow"
          tabIndex={-1}
          {...pt}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <motion.footer
        className="w-full py-20 sm:py-24 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center text-center bg-brand-black border-t border-white/[0.06] pb-[max(4rem,env(safe-area-inset-bottom))]"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-2xl sm:text-3xl md:text-[2.75rem] font-serif text-white mb-8 sm:mb-10 block uppercase tracking-[0.06em]">
          {SITE_NAME}
        </span>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-14 sm:mb-16 max-w-lg">
          <SocialFooterLink href={SOCIAL.instagram} label="Instagram" />
          {SOCIAL.behance ? <SocialFooterLink href={SOCIAL.behance} label="Behance" /> : null}
          {SOCIAL.linkedin ? <SocialFooterLink href={SOCIAL.linkedin} label="LinkedIn" /> : null}
          <button
            type="button"
            onClick={scrollToTop}
            className="text-[10px] tracking-[0.22em] font-sans uppercase text-brand-muted hover:text-brand-gold transition-colors duration-500 hover:underline decoration-brand-gold/80 underline-offset-[10px]"
          >
            Back to top
          </button>
        </div>

        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        <p className="text-[10px] tracking-[0.22em] font-sans uppercase text-brand-muted/90 px-2">
          © {new Date().getFullYear()} {SITE_NAME.toUpperCase()}. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
}
