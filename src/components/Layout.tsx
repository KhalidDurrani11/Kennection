import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SITE_NAME, SOCIAL } from '../constants';

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
      className="text-[10px] tracking-[0.2em] font-sans uppercase text-brand-muted hover:text-brand-gold transition-all duration-300 hover:underline decoration-brand-gold underline-offset-8"
    >
      {label}
    </a>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

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

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="fixed left-4 top-0 z-[100] -translate-y-full px-4 py-2 bg-brand-gold text-brand-dark text-xs font-bold uppercase tracking-widest transition-transform focus:translate-y-[max(1rem,env(safe-area-inset-top))] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Skip to content
      </a>

      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 sm:py-6 bg-brand-dark/80 backdrop-blur-xl border-b border-white/[0.06] pt-[max(1rem,env(safe-area-inset-top))]">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-gold hover:scale-95 transition-transform cursor-pointer shrink-0 p-1 -m-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
          </button>
          <Link
            to="/"
            className="text-lg sm:text-xl md:text-2xl font-serif tracking-tighter text-white uppercase truncate"
          >
            {SITE_NAME}
          </Link>
        </div>

        <nav className="hidden md:flex gap-8 lg:gap-10 items-center" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] tracking-[0.2em] font-sans uppercase transition-all duration-500 whitespace-nowrap ${
                location.pathname === link.path
                  ? 'text-white border-b-2 border-brand-gold pb-1'
                  : 'text-brand-muted hover:text-brand-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <a
          href={SOCIAL.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center shrink-0 p-2 text-brand-muted hover:text-brand-gold transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          aria-label="Kennection Studio on Instagram"
        >
          <Instagram size={22} aria-hidden />
        </a>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-brand-dark flex flex-col items-center justify-center p-8 pt-[max(4rem,env(safe-area-inset-top))]"
          >
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-[max(2rem,env(safe-area-inset-top))] right-6 sm:right-8 text-brand-gold p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              aria-label="Close menu"
            >
              <X size={32} aria-hidden />
            </button>
            <nav className="flex flex-col gap-6 sm:gap-8 text-center" aria-label="Mobile primary">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl sm:text-3xl font-serif text-white hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="absolute bottom-[max(2rem,env(safe-area-inset-bottom))] flex gap-6">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-muted hover:text-brand-gold transition-colors p-2"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              {SOCIAL.linkedin ? (
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-muted hover:text-brand-gold transition-colors p-2"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main-content" className="grow" tabIndex={-1}>
        {children}
      </main>

      <footer className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center text-center bg-brand-black pb-[max(4rem,env(safe-area-inset-bottom))]">
        <span className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-6 sm:mb-8 block uppercase tracking-tighter">
          {SITE_NAME}
        </span>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-10 sm:gap-y-4 mb-12 sm:mb-16 max-w-lg">
          <SocialFooterLink href={SOCIAL.instagram} label="Instagram" />
          {SOCIAL.behance ? <SocialFooterLink href={SOCIAL.behance} label="Behance" /> : null}
          {SOCIAL.linkedin ? <SocialFooterLink href={SOCIAL.linkedin} label="LinkedIn" /> : null}
          <button
            type="button"
            onClick={scrollToTop}
            className="text-[10px] tracking-[0.2em] font-sans uppercase text-brand-muted hover:text-brand-gold transition-all duration-300 hover:underline decoration-brand-gold underline-offset-8"
          >
            Back to top
          </button>
        </div>

        <div className="w-full max-w-4xl h-px bg-white/5 mb-10 sm:mb-12" />

        <p className="text-[10px] tracking-[0.2em] font-sans uppercase text-brand-muted px-2">
          © {new Date().getFullYear()} {SITE_NAME.toUpperCase()}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
