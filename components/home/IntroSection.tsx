'use client';

import Section from '@/components/Section';
import Button from '@/components/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const IntroSection = () => {
  return (
    <Section bgColor="background" className="py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-16"
        >
          <div className="max-w-xl space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text">
              Live a fulfilling life.
            </h2>

            <div className="space-y-4 text-lg text-text/80 leading-relaxed">
              <p>
                Life can be challenging—especially when you're trying to balance your
                personal and professional life.
              </p>
              <p>
                It's easy to feel like you're alone in facing these challenges,
                but I want you to know that I'm here to help.
              </p>
            </div>
          </div>

          {/* FULL-WIDTH CTA STRIP */}
          <div className="mt-12 border-t border-text/20">
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
              GET IN TOUCH
            </Button>
          </div>
        </motion.div>

        {/* RIGHT — BIG IMAGE (FULL RECTANGLE, HALF WIDTH) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] lg:h-auto"
        >
          <Image
            src="/images/image_2.jpeg"
            alt="Calm lifestyle flat lay"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default IntroSection;
