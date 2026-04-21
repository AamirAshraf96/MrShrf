/** Build-in-Amsterdam–style easing: strong ease-out */
export const easeOutEditorial: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const transition = {
  headline: { duration: 0.78, ease: easeOutEditorial },
  reveal: { duration: 0.55, ease: easeOutEditorial },
  stagger: 0.065,
} as const;
