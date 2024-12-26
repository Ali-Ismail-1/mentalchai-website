// src/app/page.tsx
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Home.module.css";
import '@/styles/markdown-styles.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* About Me Section */}
      <section className={styles.section}>
        <h1 className={styles.headingPrimary}>MentalChai</h1>
        <p className="text-left text-lg text-gray-700 max-w-xl">
          Welcome to MentalChai: My knowledge hub on
        </p>
        <ol className="list-disc list-inside text-left text-lg text-gray-700 max-w-xl mb-4">

          <li>Software Engineering</li>
          <li>Productivity</li>
          <li>Islamic Resources</li>
          <li>Wellness</li>
        </ol>
        <p className="text-center text-lg text-gray-700 max-w-xl">
          I&apos;m passionate about building cool projects, exploring meaningful ideas, and helping others
          along the way. Let&apos;s grow together!
        </p>
      </section>

      {/* Quick Links Section */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-6 text-blue-500">Quick Links</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/islam"
            className={`${styles.quickLink} bg-blue-500`}
          >
            Islam
          </Link>
          <Link
            href="https://mentalchai.newzenler.com/"
            className={`${styles.quickLink} bg-green-500`}
          >
            Learn
          </Link>
          <Link
            href="https://aliismail.beehiiv.com/"
            className={`${styles.quickLink} bg-yellow-500`}
          >
            Blog
          </Link>
          <Link
            href="https://github.com/ali-ismail-1"
            className={`${styles.quickLink} bg-purple-500`}
          >
            Portfolio
          </Link>
        </div>
      </section>

      <section className="text-center py-8">
        <iframe src="https://embeds.beehiiv.com/4165d527-b030-4e9d-821e-3b76f6ba9374" data-test-id="beehiiv-embed" width="480" height="320" frameBorder="0" scrolling="no" style={{
          borderRadius: "4px",
          border: "2px solid #e5e7eb",
          margin: "0",
          backgroundColor: "transparent",
        }}></iframe>
      </section>
      {/* Social Media Section */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-6 text-blue-500">Social Links</h2>
        <div className="flex justify-center space-x-6">
          <Link
            href="https://github.com/ali-ismail-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black text-2xl"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ali-ismail-35196615/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 text-2xl"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://x.com/Ali_F_Ismail"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 text-2xl"
          >
            <FaTwitter />
          </Link>
        </div>
      </section>

    </div >
  );
}
