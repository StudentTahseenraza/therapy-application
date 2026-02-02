'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SocialSection = () => {
  const socials = [
    {
      name: 'Instagram',
      image: '/images/social1.png',
      link: '#',
    },
    {
      name: 'Facebook',
      image: '/images/social2.png',
      link: '#',
    },
    {
      name: 'Pinterest',
      image: '/images/social3.png',
      link: '#',
    },
    {
      name: 'Twitter',
      image: '/images/social4.png',
      link: '#',
    },
  ];

  return (
    <Section bgColor="background" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto space-y-14"
      >
        {/* Title */}
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
          Find me on social.
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {socials.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group space-y-4"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Platform name */}
              <p className="text-lg font-medium text-primary">
                {item.name}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default SocialSection;
