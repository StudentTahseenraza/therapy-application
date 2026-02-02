'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';

const AppointmentSection = () => {
  return (
    <Section
      bgColor="custom"
      className="bg-[#EFE9E2] py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center space-y-16"
      >
        {/* Heading */}
        <div className="space-y-6">
          <h2 className="font-heading text-[40px] md:text-[48px] font-semibold text-[#1F3D2B]">
            Book an appointment.
          </h2>

          <p className="text-lg md:text-xl text-[#4B6657] leading-relaxed">
            Add some text here if you like, and add your scheduling widget below
            (you can get one by signing up for a scheduling account through
            Squarespace, the top-tier plan is HIPAA compliant OR you can use your
            client portal).
          </p>
        </div>

         {/* Spacer */}
          <div className="h-10" />

          {/* Widget Container */}
          <div className="flex justify-center">
            <div
              className="bg-white w-full max-w-[560px] px-8 py-10"
              style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              }}
            >
              {/* Widget Placeholder */}
              <div className="space-y-6">
                <div className="text-black font-semibold text-lg">
                  This page is not active
                </div>

                <p className="text-sm text-black/70 leading-relaxed">
                  If you're the owner, please log into your account to start a
                  free trial or subscribe.
                </p>

                <button className="border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition">
                  GO TO ACCOUNT
                </button>

                
              </div>
            </div>
          </div>

          {/* Bottom spacing */}
          <div className="h-10" />

        <p className="text-xl text-black pt-10 text-center">
  <span className="block font-normal">
    Powered by
  </span>
  <span className="block font-bold">
    acuity:scheduling
  </span>
</p>


      </motion.div>
      
    </Section>
  );
};

export default AppointmentSection;
