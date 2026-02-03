'use client';

import Section from '@/components/Section';
import Button from '@/components/Button';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SupportSection = () => {
  const challenges = [
    'Persistent feelings of anxiety or being on edge',
    'Difficulty sleeping due to racing thoughts or worry',
    'Feeling disconnected from yourself or others',
    'Chronic exhaustion despite adequate rest',
    'Overthinking and difficulty making decisions',
    'Feeling overwhelmed by work or personal responsibilities',
    'Struggling with perfectionism or self-criticism',
    'Physical symptoms of stress (tension, headaches, digestive issues)',
  ];

  return (
    <Section bgColor="none" className="py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">

        {/* LEFT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-[#e7e1d9]"
        >
          <Image
            src="/images/support2.png"
            alt="Supportive therapy"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* RIGHT — CONTENT */}
        <div className="bg-[#d9d6e3] flex flex-col justify-between">

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="px-6 sm:px-12 lg:px-20 py-16 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text leading-snug">
                You don’t have to do this all <em className="italic font-normal">alone.</em>
              </h2>

              <p className="text-lg text-text/80">
                If you are facing any of these, there’s hope:
              </p>
            </div>

            <ul className="space-y-3">
              {challenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-text mt-1 flex-shrink-0" />
                  <span className="text-text/80 leading-relaxed">
                    {challenge}
                  </span>
                </motion.li>
              ))}
            </ul>

            <p className="text-lg text-text/80 pt-4">
              With empathy and guidance, we’ll work together to navigate the challenges
              life throws your way.
            </p>
          </motion.div>

          {/* FULL-WIDTH CTA STRIP (TEMPLATE STYLE) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            viewport={{ once: true }}
            className="
              group
              border-t border-text/30
              bg-[#d9d6e3]
              hover:bg-text
              transition-colors duration-300
            "
          >
            <Button
              href="/contact"
              variant="outline"
              withArrow
              className="
                w-full
                py-6
                rounded-none
                flex
                justify-center
                text-lg
              "
            >
              WORK WITH ME
            </Button>

          </motion.div>

        </div>
      </div>
    </Section>
  );
};

export default SupportSection;
