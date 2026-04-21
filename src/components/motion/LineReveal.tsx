import { motion, useReducedMotion } from 'framer-motion';
import { transition } from '../../motion/constants';

type LineRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Masked vertical reveal (overflow hidden + translateY), similar to editorial agency heroes.
 */
export function LineReveal({ children, className = '', delay = 0 }: LineRevealProps) {
  const reduce = useReducedMotion();

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={reduce ? { opacity: 0 } : { y: '108%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          reduce
            ? { duration: 0.2, delay }
            : { ...transition.headline, delay }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
