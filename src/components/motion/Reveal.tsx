import { motion, useReducedMotion } from 'framer-motion';
import { easeOutEditorial, transition } from '../../motion/constants';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Viewport margin for earlier trigger */
  margin?: string;
};

export function Reveal({ children, className = '', delay = 0, y = 36, margin = '-80px 0px 0px 0px' }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin }}
      transition={
        reduce
          ? { duration: 0.2, delay }
          : { duration: transition.reveal.duration, ease: easeOutEditorial, delay }
      }
    >
      {children}
    </motion.div>
  );
}
