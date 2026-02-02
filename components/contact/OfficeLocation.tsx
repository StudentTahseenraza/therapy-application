'use client';

import Section from '@/components/Section';

const OfficeLocation = () => {
  return (
    <Section
  bgColor="none"
  className="bg-[#8A8651] py-24"
>
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

    {/* LEFT */}
    <div className="text-white space-y-8">
      <h2 className="text-4xl font-heading font-bold">
        My Office
      </h2>

      <div>
        <p className="text-lg font-medium">123 Example Street</p>
        <p className="text-lg">Minneapolis, MN</p>
      </div>

      <div className="pt-6">
        <h3 className="text-2xl font-heading font-bold">Hours</h3>
        <p className="mt-2">Monday – Friday</p>
        <p>10am – 6pm</p>
      </div>
    </div>

    {/* RIGHT */}
    <div className="relative overflow-hidden rounded-lg h-[360px] bg-white">
      <iframe
        src="https://www.google.com/maps?q=Minneapolis&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      />
    </div>

  </div>
</Section>

  );
};

export default OfficeLocation;
