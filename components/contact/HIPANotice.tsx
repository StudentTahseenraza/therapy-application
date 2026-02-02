'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const HIPANotice = () => {
  return (
    <Section bgColor="white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-6">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold text-text">
                PLEASE NOTE: HIPAA Compliance
              </h3>
              <div className="space-y-2 text-text/80">
                <p>
                  If you opt to use a "Form Block" on your contact page, this is not HIPAA-compliant. 
                  Squarespace stores data that is input into forms in the Marketing tab under Profiles.
                </p>
                <p>
                  Instead, you can embed a HIPAA-compliant form, a link to your client portal, 
                  or simply put your email address for secure communication.
                </p>
                <p className="text-sm italic pt-2">
                  For this demo, please use the contact information above or the booking widget below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default HIPANotice;