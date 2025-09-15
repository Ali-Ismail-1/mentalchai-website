// src/components/home/FeaturedGuide.tsx
import Link from "next/link";

export default function FeaturedGuide() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-[#E7E2DA] bg-white shadow-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-[#333333]">The Resilience Toolkit</h2>
              <p className="mt-2 text-[#4B5D67]">
                Anchors, reset rituals, and boundaries to protect your clarity and recover fast when life derails you.
              </p>
            </div>
            <div>
              <Link
                href="/guides/resilience-toolkit"
                className="inline-flex items-center justify-center rounded-md bg-[#FFC857] text-[#333333] px-5 py-3 font-medium shadow hover:bg-[#ffda79] transition-colors"
              >
                Download Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
