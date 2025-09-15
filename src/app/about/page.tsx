// src/app/about/page.tsx
import AboutHero from "@/app/components/about/Hero";
import CoreValues from "@/app/components/about/CoreValues";
import AboutClarityPath from "@/app/components/about/ClarityPath";
import AboutCTA from "@/app/components/about/CTA";
import Mission from "@/app/components/about/Mission";

export const metadata = {
  title: "About – MentalChai",
  description:
    "Why MentalChai exists: calm, grounded, and practical systems for clarity, resilience, and holistic growth.",
};

export default function AboutPage() {
  return (
    <div className="bg-calm-base">
      <AboutHero />
      <Mission />
      <CoreValues />      
      <AboutClarityPath />
      <AboutCTA />
    </div>
  );
}
