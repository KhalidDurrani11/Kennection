import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-brand-dark/70 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-gold hover:scale-95 transition-transform cursor-pointer"
          >
            <Menu size={24} />
          </button>
          <Link to="/" className="text-xl md:text-2xl font-serif tracking-tighter text-white uppercase">
            Konnection Studio
          </Link>
        </div>

        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] tracking-[0.2em] font-sans uppercase transition-all duration-500 ${
                location.pathname === link.path
                  ? 'text-white border-b-2 border-brand-gold pb-1'
                  : 'text-brand-muted hover:text-brand-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button className="text-brand-muted hover:text-white cursor-pointer">
            <Search size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-brand-dark flex flex-col items-center justify-center p-8"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-brand-gold"
            >
              <Menu size={32} className="rotate-45" />
            </button>
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-serif text-white hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-6 md:px-12 flex flex-col items-center justify-center text-center bg-brand-black">
        <span className="text-3xl md:text-4xl font-serif text-white mb-8 block uppercase tracking-tighter">
          Konnection Studio
        </span>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
          <a href="#" className="text-[10px] tracking-[0.2em] font-sans uppercase text-brand-muted hover:text-brand-gold transition-all duration-300 hover:underline decoration-brand-gold underline-offset-8">
            INSTAGRAM
          </a>
          <a href="#" className="text-[10px] tracking-[0.2em] font-sans uppercase text-brand-muted hover:text-brand-gold transition-all duration-300 hover:underline decoration-brand-gold underline-offset-8">
            BEHANCE
          </a>
          <a href="#" className="text-[10px] tracking-[0.2em] font-sans uppercase text-brand-muted hover:text-brand-gold transition-all duration-300 hover:underline decoration-brand-gold underline-offset-8">
            LINKEDIN
          </a>
          <button 
            onClick={scrollToTop}
            className="text-[10px] tracking-[0.2em] font-sans uppercase text-brand-muted hover:text-brand-gold transition-all duration-300 hover:underline decoration-brand-gold underline-offset-8 flex items-center gap-2"
          >
            BACK TO TOP <ArrowUp size={12} />
          </button>
        </div>
        
        <div className="w-full max-w-4xl h-[1px] bg-white/5 mb-12"></div>
        
        <p className="text-[10px] tracking-[0.2em] font-sans uppercase text-brand-muted">
          © {new Date().getFullYear()} KONNECTION STUDIO. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
