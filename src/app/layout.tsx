// src/app/layout.tsx
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mentalchai",
  description: "Explore Islam, learn new skills, and grow with Mentalchai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-4 bg-gray-800 text-gray-200 flex justify-between items-center">
          <nav className="flex space-x-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/software-engineering" className="hover:text-white">
              Software Engineering
            </Link>
            <Link href="/productivity" className="hover:text-white">
              Productivity
            </Link>
            <Link href="/islam" className="hover:text-white">
              Islam
            </Link>
            <Link href="/wellness" className="hover:text-white">
              Wellness
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/ali-ismail-1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ali-ismail-35196615/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://x.com/Ali_F_Ismail"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaTwitter />
            </Link>
          </div>
        </header>


        {/* Main Content */}
        <main className="flex-1 p-6 text-gray-200">{children}</main>

        {/* Footer */}
        <footer className="p-4 text-center text-gray-500 bg-gray-900">
          © {new Date().getFullYear()} Mentalchai. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
