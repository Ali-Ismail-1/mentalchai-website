// src/app/page.tsx
import Link from "next/link";
import { leadMagnets } from "@/lib/leadMagnets";

export default function Home() {
  const featured = leadMagnets.find((m) => m.featured) || leadMagnets[0];

  return (
    <div className="bg-[#F5F1EB] min-h-screen">
      {/* Hero */}
      <section className="border-b border-[#E7E2DA] bg-[#F5F1EB]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#333333]">
              Clarity, Resilience, and Holistic Growth —
              <br className="hidden md:block" />
              like sipping tea for the soul.
            </h1>
            <p className="mt-4 text-lg text-[#4B5D67]">
              Calm, grounded, and practical. Tools and guidance to design a life of balance,
              presence, and sustainable mastery.
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

            {/* Clarity Path */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Stability", "Clarity", "Energy", "Mastery", "Perspective"].map((stage) => (
                <span
                  key={stage}
                  className="inline-flex items-center rounded-full border border-[#E7E2DA] bg-white/70 px-3 py-1 text-sm text-[#4B5D67]"
                >
                  {stage}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guide */}
      {featured && (
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-[#E7E2DA] bg-white shadow-sm p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-semibold text-[#333333]">{featured.title}</h2>
                  <p className="mt-2 text-[#4B5D67]">{featured.description}</p>
                </div>
                <div>
                  <Link
                    href={featured.url}
                    className="inline-flex items-center justify-center rounded-md bg-[#FFC857] text-[#333333] px-5 py-3 font-medium shadow hover:bg-[#ffda79] transition-colors"
                  >
                    {featured.ctaLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Topics */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#333333] mb-6">Explore Topics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/ihsan"
              className="rounded-lg border border-[#E7E2DA] bg-white p-6 shadow-sm hover:shadow transition"
            >
              <div className="text-3xl mb-2">🌿</div>
              <h4 className="text-lg font-semibold text-[#333333]">Ihsan — Inner Growth</h4>
              <p className="text-sm text-[#4B5D67] mt-1">
                Grounded wisdom and timeless principles for living with excellence.
              </p>
            </Link>

            <Link
              href="/wellness"
              className="rounded-lg border border-[#E7E2DA] bg-white p-6 shadow-sm hover:shadow transition"
            >
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="text-lg font-semibold text-[#333333]">Wellness — Lifestyle & Energy</h4>
              <p className="text-sm text-[#4B5D67] mt-1">
                Sustainable rhythms for energy, habits, and a calmer pace of life.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
