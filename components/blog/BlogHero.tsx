'use client';

import Section from '@/components/Section';
import Image from 'next/image';

const BlogHero = () => {
  return (
    <Section
      bgColor="background"
      padding="large"
      className="pt-20 lg:pt-28"
    >
      <div className="max-w-[1400px] mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT — IMAGE (unchanged) */}
          <div className="flex justify-center lg:justify-start">
            <div
              className="relative w-[420px] h-[560px] overflow-hidden"
              style={{
                borderTopLeftRadius: '999px',
                borderTopRightRadius: '999px',
                borderBottomLeftRadius: '24px',
                borderBottomRightRadius: '24px',
              }}
            >
              <Image
                src="/images/blogHero1.png"
                alt="Blog hero image"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT — POLISHED TEXT (LILAC STYLE) */}
          <div className="max-w-xl space-y-12">

            {/* Title */}
            <h1 className="font-heading text-5xl lg:text-6xl font-semibold text-[#1F3A1E] leading-tight">
              The Mindful Space
            </h1>

            {/* Description — broken into calm lines */}
            <div className="space-y-4 text-lg leading-relaxed text-[#1F3A1E]/90">
              <p>My tiny corner of the internet</p>
              <p>where I talk about all things</p>
              <p>healing, heart, and wholeness.</p>
            </div>

            {/* Closing line */}
            <p className="text-lg font-medium text-[#1F3A1E]">
              Glad you're here.
            </p>

          </div>
        </div>
      </div>
    </Section>
  );
};

export default BlogHero;
