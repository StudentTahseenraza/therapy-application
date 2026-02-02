'use client';

import Section from '@/components/Section';
import { services } from '@/lib/constants';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

const SpecialtiesSection = () => {
  return (
    <Section bgColor="white" id="specialties">
      <div className="space-y-16">
        
        {/* Header */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text">
              My Specialties
            </h2>
            <p className="text-lg text-text/70">
              I specialize in helping adults navigate complex emotional challenges
              using evidence-based approaches tailored to individual needs.
            </p>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.id}
              direction="up"
              delay={0.2 + index * 0.1}
            >
              {/* CARD — light color ONLY here */}
<div className="h-full bg-background border-2 border-black p-6 flex flex-col">
                
                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-text mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text/80 leading-relaxed mb-10">
                  {service.description}
                </p>

                {/* Image */}
                <div className="mt-auto flex justify-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border border-text/20">
                    <Image
                      src={`/images/services/${service.id}.png`}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Footer Note */}
        {/* <AnimatedSection direction="up" delay={0.5}>
          <div className="max-w-2xl mx-auto text-center pt-6">
            <p className="text-text/70 italic">
              My approach integrates multiple therapeutic modalities, including
              Cognitive Behavioral Therapy (CBT), EMDR, and mindfulness-based
              practices, to address both immediate symptoms and underlying patterns.
            </p>
          </div>
        </AnimatedSection> */}
      </div>
    </Section>
  );
};

export default SpecialtiesSection;
