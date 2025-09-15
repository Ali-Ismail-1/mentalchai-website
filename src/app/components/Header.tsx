// src/app/components/Header.tsx
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { navigation } from '@/lib/site';

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = href === '/'
    ? pathname === '/'
    : pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={`transition-colors ${active ? 'text-[#333333]' : 'text-[#4B5D67] hover:text-[#333333]'}`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#F5F1EB]/90 backdrop-blur border-b border-[#E7E2DA] shadow-sm">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 bg-[#FFC857] text-[#333333] px-3 py-1 rounded">
        Skip to content
      </a>
      <div className="mx-auto max-w-7xl h-14 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="text-[#333333] font-semibold tracking-tight text-lg">
          Mentalchai
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.primary.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
          <Link
            href={navigation.cta.href}
            className="rounded-md bg-[#FFC857] text-[#333333] px-3 py-2 font-medium shadow hover:bg-[#ffda79] transition-colors"
          >
            {navigation.cta.label}
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
            {navigation.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[#4B5D67] hover:text-[#333333]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={navigation.cta.href}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-[#FFC857] text-[#333333] px-3 py-2 font-medium shadow hover:bg-[#ffda79]"
            >
              {navigation.cta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
