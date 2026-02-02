import Section from '@/components/Section';
import Button from '@/components/Button';
import { therapistInfo } from '@/lib/constants';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <Section bgColor="secondary" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT — CONTENT (NO EXTRA BACKGROUND) */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text">
              Hi, I'm Dr. Maya Reynolds
            </h2>
            <p className="text-xl text-primary font-medium">
              Licensed Clinical Psychologist
            </p>
          </div>

          <p className="text-lg text-text/80 leading-relaxed">
            {therapistInfo.description}
          </p>

          <div className="space-y-4">
            <p className="text-lg text-text/80 leading-relaxed">
              My work often focuses on anxiety, panic, trauma, and burnout. 
              Clients frequently come to me feeling "functional" on the outside 
              while quietly struggling with constant worry, tension in their body, 
              difficulty sleeping, or a sense that they're always bracing for something to go wrong.
            </p>

            <p className="text-lg text-text/80 leading-relaxed">
              I take a warm, collaborative, and grounded approach to therapy. 
              Sessions are structured enough to feel supportive, while still leaving 
              space for reflection and depth. I integrate evidence-based methods 
              such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based 
              practices, and body-oriented techniques to help clients understand 
              both the emotional and physiological sides of what they're experiencing.
            </p>
          </div>

          {/* CENTERED RECTANGULAR BUTTON */}
          {/* CENTERED RECTANGULAR BUTTON */}
<div className="pt-8 flex justify-center">
  <Button
    href="/contact"
    withArrow
    className="
      rounded-none
      text-sm
      px-8 py-3

      bg-secondary
      text-black
      border
      border-black

      hover:bg-primary
      hover:text-white
      hover:border-primary

      transition-colors
      duration-300
    "
  >
    LET&apos;S CHAT
  </Button>
</div>


        </div>

        {/* RIGHT — IMAGE AREA (SAME BACKGROUND) */}
        <div className="relative flex justify-center lg:justify-end">

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
              src="/images/image_1.png"
              alt="About Dr. Maya Reynolds"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlapping circular image */}
          <div className="absolute -bottom-10 -right-8 w-44 h-44 rounded-full overflow-hidden border-4 border-secondary">
            <Image
              src="/images/about.png"
              alt="Calm detail"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
