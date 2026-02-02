"use client";

import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bgColor?: 'background' | 'secondary' | 'white' | 'olive' | 'black' | 'slate';
  padding?: 'normal' | 'large';
  id?: string;
  fullWidth?: boolean;
}

const Section = ({
  children,
  className = '',
  bgColor = 'white',
  padding = 'normal',
  id,
  fullWidth = false,
}: SectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const bgColors = {
  white: 'bg-white',
  secondary: 'bg-secondary',
  background: 'bg-background',
  olive: 'bg-[#8A8650]',      
  black: 'bg-black',          
  slate: 'bg-[#C6C6C6]',      
};


  const paddings = {
    normal: 'py-16 md:py-20',
    large: 'py-20 md:py-28',
  };

  return (
    <section
      ref={ref}
      id={id}
      className={`${bgColors[bgColor]} ${paddings[padding]} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={
          fullWidth
            ? ''
            : 'max-width-content section-padding'
        }
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
