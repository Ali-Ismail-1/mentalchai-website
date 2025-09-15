// src/app/components/Header.tsx
"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#F5F1EB]/90 backdrop-blur border-b border-[#E7E2DA] shadow-sm">
      <div className="mx-auto max-w-7xl h-14 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="text-[#333333] font-semibold tracking-tight text-lg">
          Mentalchai
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/ihsan" className="text-[#4B5D67] hover:text-[#333333] transition-colors">
            Ihsan
          </Link>
          <Link href="/wellness" className="text-[#4B5D67] hover:text-[#333333] transition-colors">
            Wellness
          </Link>
          <Link href="/guides" className="text-[#4B5D67] hover:text-[#333333] transition-colors">
            Guides
          </Link>
          <Link
            href="/newsletter"
            className="rounded-md bg-[#FFC857] text-[#333333] px-3 py-2 font-medium shadow hover:bg-[#ffda79] transition-colors"
          >
            Join the Newsletter
          </Link>
        </nav>
      </div>
    </header>
  );
}
