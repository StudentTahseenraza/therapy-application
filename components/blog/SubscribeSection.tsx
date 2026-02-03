'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError(true);
      return;
    }
    setError(false);
    setEmail('');
  };

  return (
    <Section 
    bgColor="none"
    className='bg-[#314026]'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6"
      >
        {/* OUTER BORDER BOX */}
        <div className="border border-white px-10 py-16 text-center">
          {/* TITLE */}
          <h2 className="font-heading text-4xl font-semibold text-white mb-4">
            Subscribe
          </h2>

          {/* DESCRIPTION */}
          <p className="text-white/90 mb-10">
            Sign up with your email address to receive news and updates.
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <div className="w-full md:w-80">
              {error && (
                <div className="mb-2 text-sm text-red-700 bg-[#F8DADA] px-3 py-1">
                  Email Address is required.
                </div>
              )}

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full px-4 py-3 text-sm outline-none border border-white bg-white text-black"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 border border-white text-white text-sm hover:bg-white hover:text-[#8A8650] transition-colors"
            >
              SIGN UP
            </button>
          </form>

          {/* PRIVACY NOTE */}
          <p className="text-white/80 text-sm mt-10">
            We respect your privacy.
          </p>
        </div>
      </motion.div>
    </Section>
  );
};

export default SubscribeSection;
