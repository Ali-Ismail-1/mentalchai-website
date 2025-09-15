// src/components/home/ClarityPath.tsx

export default function ClarityPath() {
  const stages = [
    {
      icon: "🌿",
      label: "Anchor",
      bigIdea: "Before you grow, you need stability.",
      pain: "Life feels chaotic, and it’s easy to keep getting derailed.",
      goal: "Root yourself in grounding habits and values.",
      benefit: "You stop drifting and feel anchored, even when life hits hard.",
    },
    {
      icon: "🧠",
      label: "Clarify",
      bigIdea: "Clarity cuts through overwhelm.",
      pain: "Too many tasks and options leave you unsure what actually matters.",
      goal: "See clearly and simplify your priorities.",
      benefit: "With less noise, your focus sharpens on what truly moves you forward.",
    },
    {
      icon: "⚡",
      label: "Systemize",
      bigIdea: "Systems turn habits into momentum.",
      pain: "You restart progress every time you fall off track.",
      goal: "Build rhythms that keep running, even on low-energy days.",
      benefit: "Growth becomes sustainable, not a cycle of burnout and reset.",
    },
    {
      icon: "💡",
      label: "Activate",
      bigIdea: "Action with presence is mastery.",
      pain: "You get stuck in planning, hesitation, or endless distraction.",
      goal: "Step forward with confidence and focus.",
      benefit: "You feel momentum and flow in your work and relationships.",
    },
    {
      icon: "🌍",
      label: "Reflect",
      bigIdea: "Growth comes from reflection.",
      pain: "Without pausing to learn, you repeat the same mistakes.",
      goal: "Close the loop, adapt, and align.",
      benefit: "Wisdom compounds over time and clarity deepens with every cycle.",
    },
  ];

  return (
    <section className="py-16 border-t border-[#E7E2DA] bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-calm-charcoal mb-10">
          The Self-Mastery Path
        </h2>

        <div className="space-y-12 text-left">
          {stages.map(({ icon, label, bigIdea, pain, goal, benefit }) => (
            <div
              key={label}
              className="rounded-lg border border-[#E7E2DA] bg-white/70 shadow-sm p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{icon}</span>
                <h3 className="text-xl font-semibold text-calm-charcoal">
                  {label}
                </h3>
              </div>
              <p className="text-calm-charcoal mb-2">
                <strong>{bigIdea}</strong>
              </p>
              <p className="text-calm-grayblue mb-1">{pain}</p>
              <p className="text-calm-grayblue mb-1">{goal}</p>
              <p className="text-calm-grayblue">{benefit}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-calm-grayblue text-center">
          This is the cyclic rhythm of lifelong self-mastery.
        </p>
      </div>
    </section>
  );
}
