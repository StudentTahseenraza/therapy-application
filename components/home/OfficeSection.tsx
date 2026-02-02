'use client';

import Section from '@/components/Section';
import { therapistInfo } from '@/lib/constants';
import { MapPin, Sun, Trees, Shield } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const OfficeSection = () => {
  const officeFeatures = [
    {
      icon: <Sun className="w-6 h-6" />,
      title: 'Natural Light',
      description: 'Sun-filled spaces designed to promote calm and clarity',
    },
    {
      icon: <Trees className="w-6 h-6" />,
      title: 'Calming Environment',
      description: 'Quiet, uncluttered space with comfortable seating',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Complete Privacy',
      description: 'Confidential setting with soundproofing for your comfort',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Santa Monica Location',
      description: 'Conveniently located with parking and easy access',
    },
  ];

  return (
    <Section bgColor="bg-gray-200" id="office" fullWidth>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]"
      >

        {/* LEFT — BIG IMAGE (FULL RECTANGLE HALF) */}
        <motion.div variants={item} className="relative w-full h-[400px] lg:h-auto">
          <Image
            src="/images/image_3.jpeg"
            alt="Therapy office interior"
            fill
            priority
            className="object-cover"
          />

          {/* SMALL CIRCULAR IMAGE — DECORATIVE */}
          <div className="absolute bottom-8 right-8 w-80 h-80 rounded-full overflow-hidden border-4 border-white">
            <Image
              src="/images/image_2.jpeg"
              alt="Office detail"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT — CONTENT */}
        <motion.div
          variants={container}
          className="px-6 sm:px-12 lg:px-20 py-16 flex flex-col justify-center space-y-10"
        >
          <motion.div variants={item}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text">
              A Calm Space for Healing
            </h2>
            <p className="text-lg text-text/70 mt-4">
              My Santa Monica office is designed to be a sanctuary—a place where
              you can feel safe, grounded, and free to explore your thoughts and emotions.
            </p>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <p className="text-lg text-text/80 leading-relaxed">
              {therapistInfo.officeDescription}
            </p>
            <p className="text-text/80 leading-relaxed">
              Located in Santa Monica, my office provides a quiet retreat from
              the busyness of daily life.
            </p>
          </motion.div>

          {/* FEATURES */}
          <motion.div variants={container} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {officeFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex items-start space-x-4"
              >
                <div className="text-primary">{feature.icon}</div>
                <div>
                  <h4 className="font-heading font-bold text-text">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item} className="text-text/80">
            <p className="font-medium">{therapistInfo.address}</p>
            <p className="mt-2">
              <strong>In-Person:</strong> Mon–Fri, 10am–6pm<br />
              <strong>Telehealth:</strong> Available in California
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default OfficeSection;
