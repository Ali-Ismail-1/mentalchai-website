// src/components/home/Hero.tsx
import Link from "next/link";

export default function Hero() {
  const stages = [
    { icon: "🌿", label: "Anchor" },
    { icon: "🧠", label: "Clarify" },
    { icon: "⚡", label: "Systemize" },
    { icon: "💡", label: "Activate" },
    { icon: "🌍", label: "Reflect" },
  ];

  return (
    <section className="border-b border-calm-grayblue bg-calm-base">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl text-center mx-auto">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-calm-charcoal">
            Root Yourself in Self-Mastery
          </h1>

          {/* Subheadline */}
          <p className="mt-4 text-lg text-calm-grayblue">
            Practical systems and timeless wisdom to  <br />
            stay anchored, grow with clarity, 
            and return to balance as life unfolds.
          </p>

          {/* Icons Row */}
          <div className="mt-6 flex justify-center gap-6">
            {stages.map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-2xl">{icon}</span>
                <span className="mt-1 text-xs font-medium text-calm-grayblue">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center rounded-md bg-vibrant-amber text-calm-charcoal px-5 py-3 font-medium shadow hover:bg-vibrant-teal transition-colors"
            >
              Join the Newsletter
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center justify-center rounded-md border border-calm-grayblue bg-white/70 text-calm-grayblue px-5 py-3 font-medium hover:bg-white transition-colors"
            >
              Explore Guides
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
