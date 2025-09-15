// src/components/about/ClarityPath.tsx
export default function AboutClarityPath() {
    const stages = [
      { icon: "🌿", label: "Anchor", blurb: "Find stability when life feels chaotic." },
      { icon: "🧠", label: "Clarify", blurb: "See what really matters." },
      { icon: "⚡", label: "Systemize", blurb: "Turn habits into momentum." },
      { icon: "💡", label: "Activate", blurb: "Show up with presence." },
      { icon: "🌍", label: "Reflect", blurb: "Grow wiser with each cycle." },
    ];
  
    return (
      <section className="bg-white border-b border-calm-grayblue">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-calm-charcoal mb-4">
            The Self Mastery Path
          </h2>
          <p className="text-calm-grayblue mb-8">
            Self Mastery is a lifelong practice.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {stages.map(({ icon, label, blurb }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-2xl">{icon}</span>
                <h3 className="mt-2 text-sm font-medium text-calm-charcoal">{label}</h3>
                <p className="mt-1 text-xs text-calm-grayblue text-center">{blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  