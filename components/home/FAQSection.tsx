import Section from '@/components/Section';
import Accordion from '@/components/According';
import { faqs } from '@/lib/constants';
import Image from 'next/image';

const FAQSection = () => {
  return (
    <Section bgColor="secondary" id="faqs">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Image */}
        <div className="flex justify-center">
          <div className="w-[420px] overflow-hidden">
            <div className="h-[560px] rounded-t-full overflow-hidden">
              <Image
                src="/images/FAQ.png"
                alt="FAQ"
                width={320}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="h-[220px] overflow-hidden">
              <Image
                src="/images/FAQ.png"
                alt="FAQ"
                width={320}
                height={600}
                className="object-cover w-full h-full -mt-[260px]"
              />
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="font-heading text-4xl font-semibold text-text mb-10">
            FAQs
          </h2>

          {/* ✅ PASS items */}
          <Accordion items={faqs} />
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;
