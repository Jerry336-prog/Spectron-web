import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedSection({
  children,
  className = '',
  variants,
  delay = 0,
  threshold = 0.2,
  once = true,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });

  const defaultVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants || defaultVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}
