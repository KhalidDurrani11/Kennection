import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';

export default function ScrollProgress() {
  const [p, setP] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      setP(scrollable <= 0 ? 0 : window.scrollY / scrollable);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  if (reduce) return null;

  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden bg-white/[0.06]"
      aria-hidden
    >
      <div
        className="h-full w-full bg-brand-gold origin-left transition-[transform] duration-150 ease-out"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
}
