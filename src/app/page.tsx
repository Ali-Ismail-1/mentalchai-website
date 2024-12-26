// src/app/page.tsx
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Home.module.css";
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
          <Link
            href="/software-engineering"
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl border border-gray-200 transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              Software Engineering
            </h3>
            <p className="text-gray-600">
              Discover project ideas, tutorials, and resources to level up your engineering skills.
            </p>
          </Link>
          <Link
            href="/productivity"
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl border border-gray-200 transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Productivity
            </h3>
            <p className="text-gray-600">
              Master your time with Notion templates, agile planning, and deep work strategies.
            </p>
          </Link>
          <Link
            href="/islam"
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl border border-gray-200 transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-700">
              Islamic Resources
            </h3>
            <p className="text-gray-600">
              Explore Bayt ul-Mal, Quran quotes, and resources for Umrah.
            </p>
          </Link>
          <Link
            href="/wellness"
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl border border-gray-200 transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-red-700">
              Wellness
            </h3>
            <p className="text-gray-600">
              Learn about cooking, detoxing, acupressure, and building a healthy lifestyle.
            </p>
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
