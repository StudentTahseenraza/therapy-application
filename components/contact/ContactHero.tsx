'use client';

import Section from '@/components/Section';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
      <Section
        bgColor="slate"
        padding="large"
        fullWidth
      >
      <div className="max-w-[1400px] mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            <h1 className="font-heading text-7xl font-semibold text-black">
              Let&apos;s Connect
            </h1>

            <div className="space-y-4 text-lg text-black max-w-md">
              <p>Starting therapy is courageous.</p>
              <p>
                Get in touch for questions, or to book a free 15-minute consultation.
              </p>
            </div>

            {/* IMAGE GROUP */}
            <div className="relative mt-12">
              {/* Main arched image */}
              <div
                className="relative w-[360px] h-[520px] overflow-hidden"
                style={{
                  borderTopLeftRadius: '999px',
                  borderTopRightRadius: '999px',
                  borderBottomLeftRadius: '24px',
                  borderBottomRightRadius: '24px',
                }}
              >
                <Image
                  src="/images/contact3.png"
                  alt="Contact"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping circular image */}
              <div className="absolute -bottom-8 -right-6 w-44 h-44 rounded-full overflow-hidden">
                <Image
                  src="/images/contact.png"
                  alt="Detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT NOTE BOX */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-[#8db7d2] text-white p-10 max-w-lg"
          >
            <p className="leading-relaxed text-lg">
              <strong>PLEASE NOTE:</strong> If you opt to use a “Form Block” on your
              contact page this is not HIPAA-compliant. Squarespace stores data that
              is input into forms in the Marketing tab under Profiles.
            </p>

            <p className="leading-relaxed text-lg mt-6">
              Instead, you can embed a HIPAA-compliant form, a link to your client
              portal, or simply put your email address.
            </p>
          </motion.div>

        </div>
      </div>
    </Section>
  );
};

export default ContactHero;
