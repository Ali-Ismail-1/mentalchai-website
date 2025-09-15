// src/components/home/ClarityPath.tsx
export default function ClarityPath() {
    const stages = [
      { icon: "🌿", label: "Anchor" },
      { icon: "🧠", label: "Clarify" },
      { icon: "⚡", label: "Systemize" },
      { icon: "💡", label: "Activate" },
      { icon: "🌍", label: "Reflect" },
    ];
  
    return (
      <section className="py-12 border-b border-[#E7E2DA] bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#333333] mb-6">The Self-Mastery Path</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {stages.map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-3xl">{icon}</span>
                <span className="mt-2 text-sm font-medium text-[#4B5D67]">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#4B5D67]">
            This is the rhythm of lifelong self-mastery — a cycle you return to again and again.
          </p>
        </div>
      </section>
    );
  }
  