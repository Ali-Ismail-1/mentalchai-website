// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from '@/app/components/Footer';

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
        <Header /> {/* Client Component */}


        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
