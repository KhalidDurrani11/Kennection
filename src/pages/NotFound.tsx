import { Link } from 'react-router-dom';
import { SITE_NAME } from '../constants';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 pt-40 pb-24 text-center">
      <p className="text-[10px] tracking-[0.35em] uppercase text-brand-gold mb-6 font-bold">404</p>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white tracking-tight mb-6">
        Page not found
      </h1>
      <p className="text-brand-muted max-w-md mb-12 font-light leading-relaxed">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-10 py-4 bg-brand-gold text-brand-dark text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-white transition-colors"
      >
        Back to {SITE_NAME}
      </Link>
    </div>
  );
}
