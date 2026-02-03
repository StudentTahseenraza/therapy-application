'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const isContact = pathname === '/contact';

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        ${isContact ? 'bg-[#476f95]' : 'bg-white'}
      `}
    >
      <div className="max-w-7xl mx-auto px-8 h-[88px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-heading font-semibold text-primary">
          Dr. Maya Reynolds
        </Link>

        {/* Navigation */}
        <nav className=" flex items-center gap-8 text-sm font-medium">
          <Link
            href="/blog"
            className={`pb-1 ${
              pathname === '/blog'
                ? 'text-2xl border-b border-black text-black'
                : 'text-muted '
            }`}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className={`pb-1 ${
              pathname === '/contact'
                ? 'text-2xl border-b border-black text-black'
                : 'text-muted'
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
