import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* TOP FOOTER — PURE WHITE */}
      <div className="bg-white text-[#1F2A1E] py-28">
        <div className="max-w-[1400px] mx-auto px-20 flex flex-col md:flex-row justify-between">

          {/* LEFT — ADDRESS */}
          <div className="space-y-6 max-w-sm">
            <h3 className="font-heading text-2xl font-semibold">
              Dr. Maya Reynolds, PsyD
            </h3>

            <div className="space-y-1 text-lg font-medium">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
            </div>

            <div className="space-y-1 text-lg font-medium">
              <a
                href="mailto:contact@drmayareynolds.com"
                className="underline"
              >
                contact@drmayareynolds.com
              </a>
              <br />
              <a
                href="tel:5555555555"
                className="underline"
              >
                (555) 555-5555
              </a>
            </div>
          </div>

          {/* RIGHT — HOURS + FIND */}
          <div className="flex gap-40 mt-16 md:mt-0">

            {/* HOURS */}
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold">
                Hours
              </h3>
              <div className="text-lg font-medium">
                <p>Monday – Friday</p>
                <p>10am – 6pm</p>
              </div>
            </div>

            {/* FIND */}
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold">
                Find
              </h3>
              <div className="flex flex-col space-y-2 text-lg font-medium">
                <Link href="/" className="underline">Home</Link>
                <Link href="/contact" className="underline">Contact</Link>
                <Link href="/blog" className="underline">Blog</Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER — TEMPLATE COLOR */}
      <div className="bg-[#EFEAE3] py-12">
        <div className="max-w-[1400px] mx-auto px-20 text-center space-y-5 text-base font-medium text-[#1F2A1E]">

          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/privacy" className="underline">
              Privacy & Cookies Policy
            </Link>
            <Link href="/good-faith-estimate" className="underline">
              Good Faith Estimate
            </Link>
            <Link href="/terms" className="underline">
              Website Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="underline">
              Disclaimer
            </Link>
          </div>

          <p>
            Website Template Credits:{' '}
            <a
              href="https://www.gobloomcreative.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Go Bloom Creative
            </a>
          </p>

          <p>
            All Rights Reserved © {currentYear} Dr. Maya Reynolds, PsyD
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
