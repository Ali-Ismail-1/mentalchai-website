// src/app/layout.tsx
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
        <header className="p-4 bg-blue-500 text-white">
          <nav className="flex justify-center space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/islam" className="hover:underline">
              Islam
            </Link>
            <Link href="/tech" className="hover:underline">
              Tech
            </Link>
            <Link href="/mindset" className="hover:underline">
              Mindset
            </Link>
            <Link href="/wellness" className="hover:underline">
              Wellness
            </Link>
            <Link href="https://mentalchai.newzenler.com/" className="hover:underline">
              Learn
            </Link>
            <Link href="https://aliismail.beehiiv.com/" className="hover:underline">
              Blog
            </Link>
            <Link href="https://github.com/ali-ismail-1" className="hover:underline">
              Portfolio
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>

        {/* Footer */}
        <footer className="p-4 text-center text-gray-600 bg-gray-100">
          © {new Date().getFullYear()} Mentalchai. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
