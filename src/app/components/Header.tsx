// src/app/components/Header.tsx
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#F5F1EB]/90 backdrop-blur border-b border-[#E7E2DA] shadow-sm">
      <div className="mx-auto max-w-7xl h-14 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="text-[#333333] font-semibold tracking-tight text-lg">
          Mentalchai
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/ihsan" className="text-[#4B5D67] hover:text-[#333333] transition-colors">Ihsan</Link>
          <Link href="/wellness" className="text-[#4B5D67] hover:text-[#333333] transition-colors">Wellness</Link>
          <Link href="/guides" className="text-[#4B5D67] hover:text-[#333333] transition-colors">Guides</Link>
          <Link
            href="/newsletter"
            className="rounded-md bg-[#FFC857] text-[#333333] px-3 py-2 font-medium shadow hover:bg-[#ffda79] transition-colors"
          >
            Join the Newsletter
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#4B5D67] hover:text-[#333333] hover:bg-[#E7E2DA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC857]"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-[#E7E2DA] bg-[#F5F1EB]/95">
          <div className="px-4 py-4 flex flex-col gap-3">
            <Link href="/ihsan" onClick={() => setOpen(false)} className="text-[#4B5D67] hover:text-[#333333]">Ihsan</Link>
            <Link href="/wellness" onClick={() => setOpen(false)} className="text-[#4B5D67] hover:text-[#333333]">Wellness</Link>
            <Link href="/guides" onClick={() => setOpen(false)} className="text-[#4B5D67] hover:text-[#333333]">Guides</Link>
            <Link
              href="/newsletter"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-[#FFC857] text-[#333333] px-3 py-2 font-medium shadow hover:bg-[#ffda79]"
            >
              Join the Newsletter
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
