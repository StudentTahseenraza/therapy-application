import Section from '@/components/Section';
import Button from '@/components/Button';
import { therapistInfo } from '@/lib/constants';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <Section
      bgColor="background"
      padding="large"
      className="relative overflow-hidden pt-16 lg:pt-20"
    >
      <div className="max-width-content">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center lg:justify-start">
            <div
              className="relative w-full max-w-md aspect-[4/5] overflow-hidden bg-white shadow-2xl"
              style={{
                borderTopLeftRadius: '999px',
                borderTopRightRadius: '999px',
                borderBottomLeftRadius: '24px',
                borderBottomRightRadius: '24px',
              }}
            >
              <Image
                src="/images/image_1.png"   // <-- your image
                alt="Therapy session"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text leading-tight">
                Live your life
                <br />
                <span className="text-primary">in full bloom</span>
              </h1>

              <p className="text-xl lg:text-2xl text-muted">
                Therapy for Adults in {therapistInfo.location}
              </p>
            </div>

            <p className="text-lg lg:text-xl text-text/80 leading-relaxed max-w-2xl">
              Find calm amidst life's demands with personalized therapy for anxiety,
              trauma recovery, and professional burnout.
            </p>

            <Button
              href="/contact"
              variant="outline"
              withArrow
              className="
                w-xs
                py-4
                rounded-none
                flex
                justify-center
                text-lg
              "
            >
              CONNECT WITH ME
            </Button>


          </div>

        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
