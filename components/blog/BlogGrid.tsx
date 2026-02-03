'use client';

import { blogPosts } from '@/lib/constants';
import Section from '@/components/Section';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Variants } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};


const BlogGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <Section
      bgColor="none"
      className="bg-[#a49e97]"
      padding="large"
      fullWidth
    >


      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-[1400px] mx-auto px-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                {/* IMAGE */}
                <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* TEXT */}
                <div className="pt-6 space-y-3">
                  <p className="text-sm text-text/60">
                    {post.date}
                  </p>

                  <h2 className="font-heading text-2xl font-medium text-[#1F3A1E] leading-snug">
                    {post.title}
                  </h2>

                  <span className="inline-block text-sm underline underline-offset-4 text-[#1F3A1E]">
                    Read More
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default BlogGrid;
