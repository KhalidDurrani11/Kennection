/** Editorial easing — calm, high-end motion curves */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function pageTransition(reducedMotion: boolean | null) {
  if (reducedMotion) {
    return {
      initial: false as const,
      animate: { opacity: 1 },
      exit: { opacity: 1, transition: { duration: 0 } },
    };
  }
  return {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.28, ease: EASE_OUT } },
  };
}
