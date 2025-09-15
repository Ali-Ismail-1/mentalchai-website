// src/components/home/NewsletterInvite.tsx
import Link from "next/link";

export default function NewsletterInvite() {
  return (
    <section className="py-16 border-t border-[#E7E2DA] bg-[#F5F1EB]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-[#333333]">
          Weekly clarity, built to last.
        </h3>
        <p className="text-[#4B5D67] mt-2">
          Systems, practices, and timeless principles you can return to for decades.
        </p>
        <div className="mt-6">
          <Link
            href="/newsletter"
            className="inline-flex rounded-md bg-[#FFC857] text-[#333333] px-5 py-3 font-medium shadow hover:bg-[#ffda79] transition-colors"
          >
            Join the Newsletter
          </Link>
        </div>
      </div>
    </section>
  );
}
