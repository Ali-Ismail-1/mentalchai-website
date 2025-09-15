// src/components/about/CTA.tsx
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-calm-base">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-calm-charcoal">
          Clarity, weekly. Straight to your inbox.
        </h2>
        <p className="text-calm-grayblue mt-2">
          Calm, grounded, and practical notes you can use right away.
        </p>
        <div className="mt-6">
          <Link
            href="/newsletter"
            className="inline-flex rounded-md bg-vibrant-amber text-calm-charcoal px-5 py-3 font-medium shadow hover:bg-vibrant-amber/90"
          >
            Join the Newsletter
          </Link>
        </div>
      </div>
    </section>
  );
}
