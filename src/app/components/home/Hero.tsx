// src/components/home/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-[#E7E2DA] bg-[#F5F1EB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#333333]">
            Self-Mastery Is Not a Finish Line
          </h1>
          <p className="mt-4 text-lg text-[#4B5D67]">
            MentalChai is your training ground for clarity, resilience, and holistic growth —
            practical systems and timeless wisdom for a life of anchored confidence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center rounded-md bg-[#FFC857] text-[#333333] px-5 py-3 font-medium shadow hover:bg-[#ffda79] transition-colors"
            >
              Join the Newsletter
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center justify-center rounded-md border border-[#E7E2DA] bg-white/70 text-[#4B5D67] px-5 py-3 font-medium hover:bg-white transition-colors"
            >
              Explore Guides
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
