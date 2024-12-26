// src/app/page.tsx
import Link from "next/link";
import "@/styles/markdown-styles.css";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white text-center py-16">
        <h1 className="text-5xl font-bold mb-4">MentalChai</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Your hub for knowledge and growth in <br /> Software Engineering, Productivity,
          Islam, and Wellness.
        </p>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Explore Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Software Engineering */}
          <Link
            href="/software-engineering"
            className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-4xl">💻</div>
              <h3 className="text-xl font-semibold mb-2">Software Engineering</h3>
              <p className="text-sm">
                Discover project ideas, tutorials, and resources to level up your engineering skills.
              </p>
            </div>
          </Link>

          {/* Productivity */}
          <Link
            href="/productivity"
            className="relative bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-4xl">🕒</div>
              <h3 className="text-xl font-semibold mb-2">Productivity</h3>
              <p className="text-sm">
                Master your time with Notion templates, agile planning, and deep work strategies.
              </p>
            </div>
          </Link>

          {/* Islamic Resources */}
          <Link
            href="/islam"
            className="relative bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-4xl">🕌</div>
              <h3 className="text-xl font-semibold mb-2">Islamic Resources</h3>
              <p className="text-sm">
                Explore Bayt ul-Mal, Quran quotes, and resources for Umrah.
              </p>
            </div>
          </Link>

          {/* Wellness */}
          <Link
            href="/wellness"
            className="relative bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-4xl">🍎</div>
              <h3 className="text-xl font-semibold mb-2">Wellness</h3>
              <p className="text-sm">
                Learn about cooking, detoxing, acupressure, and building a healthy lifestyle.
              </p>
            </div>
          </Link>
        </div>
      </section>


      {/* Newsletter Section */}
      <section className="text-center py-12 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Join the Newsletter</h2>
        <p className="text-gray-700 mb-6">
          Get insights on engineering, productivity, and wellness directly in your inbox.
        </p>

        <iframe
          src="https://embeds.beehiiv.com/4165d527-b030-4e9d-821e-3b76f6ba9374?slim=true"
          data-test-id="beehiiv-embed"
          style={{
            borderRadius: "4px",
            margin: "0 auto",
            backgroundColor: "transparent",
          }}
        ></iframe>
      </section>


    </div>
  );
}
