import Section from '@/components/Section';
import Button from '@/components/Button';

const CTASection = () => {
  return (
    <Section
      bgColor="none"
      className="bg-[#1c4e4f] text-white py-24"
    >

      <div className="max-w-3xl mx-auto text-center space-y-8">

        {/* Heading (same content, template weight) */}
        <h2 className="font-heading text-3xl md:text-4xl font-medium">
          Ready to start your healing journey?
        </h2>

        {/* Paragraph (unchanged content) */}
        <p className="text-base md:text-lg text-white/90 leading-relaxed">
          Taking the first step toward therapy is an act of courage and self-care.
          I'm here to provide the support, expertise, and safe space you need to
          navigate life's challenges and cultivate lasting well-being.
        </p>

        {/* Button (template style) */}
        <div className="pt-4">
          <Button
            href="/contact"
            variant="outline"
            withArrow
            className="
              border border-white
              text-white
              px-10 py-4
              text-sm
              tracking-wide
              hover:bg-black hover:text-black
              transition-colors
            "
          >
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
