// src/components/about/CoreValues.tsx
export default function CoreValues() {
    const values = [
        {
          icon: "🪨",
          title: "Grounded Wisdom",
          blurb: "Rooted in timeless principles that outlast trends and help you live with balance.",
        },
        {
          icon: "🎯",
          title: "Practical Clarity",
          blurb: "Simple frameworks you can use right away to cut through the noise and focus on what matters.",
        },
        {
          icon: "🌅",
          title: "Resilient Growth",
          blurb: "Habits, rhythms, and reset practices that make progress sustainable across mind, body, and relationships.",
        },
      ];      
  
    return (
      <section className="bg-white border-b border-calm-grayblue">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-calm-charcoal mb-6">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-lg border border-calm-grayblue bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-calm-charcoal flex items-center gap-2">
                  <span>{v.icon}</span> {v.title}
                </h3>
                <p className="mt-2 text-sm text-calm-grayblue">{v.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  