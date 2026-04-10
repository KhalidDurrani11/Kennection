import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { SOCIAL } from '../constants';

type FormStatus = 'idle' | 'missing' | 'sent';

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState<FormStatus>('idle');
  const [newsletterStatus, setNewsletterStatus] = React.useState<'idle' | 'sent'>('idle');

  const socialLinks = [
    { label: 'Instagram', href: SOCIAL.instagram },
    ...(SOCIAL.behance ? [{ label: 'Behance', href: SOCIAL.behance }] : []),
    ...(SOCIAL.linkedin ? [{ label: 'LinkedIn', href: SOCIAL.linkedin }] : []),
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();
    if (!name || !email || !message) {
      setFormStatus('missing');
      return;
    }
    setFormStatus('sent');
    e.currentTarget.reset();
  };

  const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get('newsletter-email') ?? '').trim();
    if (!email) return;
    setNewsletterStatus('sent');
    e.currentTarget.reset();
  };

  return (
    <div className="pt-28 sm:pt-32 md:pt-40">
      <section className="px-4 sm:px-6 md:px-24 mb-20 md:mb-32">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] tracking-[0.4em] text-brand-gold uppercase block mb-6 md:mb-8 font-bold">
            Initiate dialogue
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter text-white mb-10 md:mb-16">
            Let&apos;s create
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
            <div className="md:col-span-7">
              <p className="text-brand-muted text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                We collaborate with brands and creators to build visual work that lasts. Reach out to start the conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-24 pb-24 md:pb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7 bg-white/5 p-6 sm:p-8 md:p-12">
            <form className="space-y-12 md:space-y-16" onSubmit={handleSubmit} noValidate>
              {formStatus === 'missing' ? (
                <p className="text-sm text-red-400/90" role="alert">
                  Please fill in your name, email, and message.
                </p>
              ) : null}
              {formStatus === 'sent' ? (
                <div className="space-y-4" role="status">
                  <p className="text-sm text-brand-gold leading-relaxed">
                    Thanks — your message is ready to send. Connect this form to your email provider (Formspree, Resend,
                    etc.) before launch, or use the links on the right.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormStatus('idle')}
                    className="text-xs tracking-widest uppercase text-brand-muted hover:text-white underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : null}
              <div className="group relative">
                <label
                  htmlFor="contact-name"
                  className="block text-[10px] tracking-[0.2em] text-brand-gold uppercase mb-4 opacity-60 group-focus-within:opacity-100 transition-opacity font-bold"
                >
                  Full name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full bg-transparent border-0 border-b border-white/20 py-4 px-0 text-white focus:outline-none focus:border-brand-gold placeholder:text-brand-muted/30 text-base sm:text-lg transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="group relative">
                <label
                  htmlFor="contact-email"
                  className="block text-[10px] tracking-[0.2em] text-brand-gold uppercase mb-4 opacity-60 group-focus-within:opacity-100 transition-opacity font-bold"
                >
                  Email address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  className="w-full bg-transparent border-0 border-b border-white/20 py-4 px-0 text-white focus:outline-none focus:border-brand-gold placeholder:text-brand-muted/30 text-base sm:text-lg transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div className="group relative">
                <label
                  htmlFor="contact-message"
                  className="block text-[10px] tracking-[0.2em] text-brand-gold uppercase mb-4 opacity-60 group-focus-within:opacity-100 transition-opacity font-bold"
                >
                  Inquiry details
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  className="w-full bg-transparent border-0 border-b border-white/20 py-4 px-0 text-white focus:outline-none focus:border-brand-gold placeholder:text-brand-muted/30 text-base sm:text-lg transition-all resize-y min-h-[120px]"
                  placeholder="Describe your vision..."
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-brand-gold text-brand-dark px-10 sm:px-12 py-4 sm:py-5 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Send message
              </button>
            </form>
          </div>

          <div className="md:col-span-5 space-y-10 md:space-y-12">
            <div className="relative aspect-square max-h-[min(100vw-2rem,28rem)] mx-auto md:max-h-none overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                <img
                  src="https://picsum.photos/seed/map/800/800?grayscale"
                  alt=""
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 right-6">
                <span className="text-[10px] tracking-[0.2em] text-brand-gold uppercase block mb-2 font-bold">
                  Studio
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white leading-tight">
                  Remote &amp; on location
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-10 md:gap-12">
              <div className="space-y-6">
                <span className="text-[10px] tracking-[0.2em] text-brand-gold uppercase block font-bold">Connect</span>
                <div className="flex flex-col">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-4 border-b border-white/10 gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
                    >
                      <span className="text-[11px] tracking-[0.2em] text-white uppercase group-hover:text-brand-gold transition-colors font-bold">
                        {social.label}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-brand-muted shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        aria-hidden
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-6 sm:p-8">
                <span className="text-[10px] tracking-[0.2em] text-brand-gold uppercase block mb-4 font-bold">
                  Direct contact
                </span>
                <a
                  href="mailto:hello@kennection.studio"
                  className="text-lg sm:text-xl font-serif text-white hover:text-brand-gold transition-colors flex items-start gap-3 break-all"
                >
                  <Mail className="text-brand-gold shrink-0 mt-1" size={20} strokeWidth={1.25} aria-hidden />
                  hello@kennection.studio
                </a>
                <p className="mt-6 pt-4 border-t border-white/10 text-sm text-brand-muted font-light leading-relaxed">
                  Prefer socials? Send a DM on{' '}
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold hover:underline underline-offset-4"
                  >
                    Instagram
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-24 text-center">
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-6 md:mb-8">Weekly perspectives</h2>
          <p className="text-brand-muted max-w-xl mx-auto mb-10 md:mb-12 font-light text-sm sm:text-base leading-relaxed px-2">
            Notes on visual craft and process. Wire this block to your newsletter tool when you are ready.
          </p>
          <form
            onSubmit={handleNewsletter}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 items-stretch sm:items-end"
          >
            {newsletterStatus === 'sent' ? (
              <p className="text-sm text-brand-gold col-span-full" role="status">
                Thanks — add your provider to start collecting addresses.
              </p>
            ) : (
              <>
                <div className="flex-1 text-left">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email for newsletter
                  </label>
                  <input
                    id="newsletter-email"
                    name="newsletter-email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    className="w-full bg-transparent border-0 border-b border-white/20 py-4 px-0 text-white focus:outline-none focus:border-brand-gold placeholder:text-brand-muted/30 text-sm"
                    placeholder="Your email"
                  />
                </div>
                <button
                  type="submit"
                  className="text-brand-gold text-[10px] tracking-[0.2em] uppercase border-b-2 border-brand-gold py-4 sm:py-0 sm:pb-4 font-bold hover:text-white hover:border-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                >
                  Subscribe
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
