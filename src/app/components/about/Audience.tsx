// src/components/about/Audience.tsx
export default function Audience() {
    return (
      <section className="bg-white border-b border-calm-grayblue">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-calm-charcoal mb-3">Who It’s For</h2>
            <p className="text-calm-grayblue">
              MentalChai is for anyone who’s tired of chasing hacks and wants something 
              steadier. It’s for people who want clarity without burnout, growth without 
              noise, and wisdom they can live by — not just read about.
            </p>
          </div>
          <div className="rounded-lg border border-calm-grayblue bg-calm-base p-6">
            <h3 className="text-lg font-semibold text-calm-charcoal mb-2">Tone</h3>
            <p className="text-sm text-calm-grayblue">Calm • Grounded • Empowering</p>
          </div>
        </div>
      </section>
    );
  }
  