'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const isContact = pathname === '/contact';
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        ${isContact ? 'bg-[#476f95]' : 'bg-white'}
      `}
    >
      {/* Top bar */}
      <div
        className="
          w-full
          flex items-center justify-between
          h-16 md:h-[88px]
          px-0 md:px-8
          max-w-none md:max-w-7xl
          md:mx-auto
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-lg md:text-2xl font-heading font-semibold text-primary pl-4 md:pl-0"
          onClick={() => setOpen(false)}
        >
          Dr. Maya Reynolds
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/blog"
            className={
              pathname === '/blog'
                ? 'border-b border-black text-black'
                : 'text-muted'
            }
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className={
              pathname === '/contact'
                ? 'border-b border-black text-black'
                : 'text-muted'
            }
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden pr-4 text-text"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden w-full bg-white border-t">
          <nav className="flex flex-col items-center py-6 space-y-6 text-lg font-medium">
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="text-text"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-text"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
