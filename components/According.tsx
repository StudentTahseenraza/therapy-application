'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  id: string;
  title?: string;
  content?: string;
  question?: string;
  answer?: string;
}

interface AccordionProps {
  items?: AccordionItem[];
}

const Accordion = ({ items = [] }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-text/40">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        const title = item.question ?? item.title ?? '';
        const content = item.answer ?? item.content ?? '';

        return (
          <div
            key={item.id}
            className="border-b border-text/40 py-6"
          >
            {/* Header */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center gap-6 text-left"
            >
              {/* 3D WATER PLUS */}
              <span
                className={`
                  relative
                  w-14 h-14
                  flex items-center justify-center
                  rounded-xl
                  transition-transform duration-300
                  ${isOpen ? 'rotate-45' : ''}
                `}
                style={{
                  background:
                    'linear-gradient(145deg, #cfefff, #7cc9ff)',
                  boxShadow: `
                    inset 2px 2px 6px rgba(255,255,255,0.8),
                    inset -4px -4px 8px rgba(0,90,160,0.35),
                    0 8px 18px rgba(80,160,255,0.45)
                  `,
                }}
              >
                {/* PLUS SYMBOL */}
                <span
                  className="text-4xl font-extrabold leading-none"
                  style={{
                    color: '#e9f8ff',
                    textShadow: `
                      0 2px 4px rgba(0,0,0,0.2),
                      inset 0 1px 2px rgba(255,255,255,0.6)
                    `,
                  }}
                >
                  +
                </span>
              </span>

              {/* QUESTION */}
              <span className="text-xl md:text-2xl font-medium text-text">
                {title}
              </span>
            </button>

            {/* Content */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                  }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 pl-[5rem] text-text/70 leading-relaxed max-w-xl">
                    {content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
