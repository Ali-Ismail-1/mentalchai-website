// src/app/page.tsx
import Hero from "@/app/components/home/Hero";
import ClarityPath from "@/app/components/home/ClarityPath";
import FeaturedGuide from "@/app/components/home/FeaturedGuide";
import NewsletterInvite from "@/app/components/home/NewsletterInvite";

export const metadata = {
  title: "MentalChai — Anchored Clarity for Self-Mastery",
  description:
    "Calm, grounded, and practical systems to design a life of balance, presence, and sustainable mastery.",
};

export default function Home() {
  return (
    <div className="bg-[#F5F1EB] min-h-screen">
      <Hero />
      <ClarityPath />
      <FeaturedGuide />
      <NewsletterInvite />
    </div>
  );
}
