'use client';

import Section from '@/components/Section';
import { professionalBackground } from '@/lib/constants';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProfessionalBackgroundSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    /* ✅ DIFFERENT BACKGROUND + TOP SPACE */
    <Section
      bgColor="transparent"
      id="background"
      className="bg-[#F3EFE8] py-20 mt-32"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading (unchanged content) */}
        <h2 className="font-heading text-3xl md:text-4xl font-medium text-text text-center mb-12">
          My Professional Background
        </h2>

        {/* Accordion */}
        <div className="border-t border-text/40">
          {professionalBackground.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className="border-b border-text/40 py-6"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-xl md:text-2xl font-medium text-text">
                    {item.title}
                  </span>

                  <span
                    className={`text-3xl font-light transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: 'easeInOut',
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-text/70 leading-relaxed max-w-2xl">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default ProfessionalBackgroundSection;
