import { motion, useReducedMotion } from 'framer-motion';
import { easeOutEditorial, transition } from '../../motion/constants';

const container = (reduce: boolean | null) => ({
  hidden: {},
  show: {
    transition: reduce
      ? { staggerChildren: 0 }
      : { staggerChildren: transition.stagger, delayChildren: 0.04 },
  },
});

const item = (reduce: boolean | null, y: number) => ({
  hidden: reduce ? { opacity: 0 } : { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: transition.reveal.duration, ease: easeOutEditorial },
  },
});

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  margin?: string;
};

export function Stagger({ children, className = '', margin = '-60px 0px 0px 0px' }: StaggerProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={container(reduce)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15, margin }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  y = 40,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} variants={item(reduce, y)}>
      {children}
    </motion.div>
  );
}
