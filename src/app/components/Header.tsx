// src/app/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="p-4 bg-gray-800 text-gray-200 flex justify-between items-center">
            {/* Hamburger Menu Button */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-gray-300 hover:text-white"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex text-gray-200 space-x-6">
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

            {/* Mobile Slide-in Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-3/4 bg-gray-800 text-gray-200 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="p-4 flex flex-col h-full">
                    {/* Close Button */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="self-end text-gray-300 hover:text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Navigation Links */}
                    <nav className="mt-8 space-y-4">
                        <Link href="/" className="block hover:text-white">
                            Home
                        </Link>
                        <Link href="/software-engineering" className="block hover:text-white">
                            Software Engineering
                        </Link>
                        <Link href="/productivity" className="block hover:text-white">
                            Productivity
                        </Link>
                        <Link href="/islam" className="block hover:text-white">
                            Islam
                        </Link>
                        <Link href="/wellness" className="block hover:text-white">
                            Wellness
                        </Link>
                    </nav>

                    {/* Social Icons Row */}
                    <div className="mt-6 space-y-4">
                        <div className="flex items-center space-x-4">
                            <Link
                                href="https://github.com/ali-ismail-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white text-2xl"
                            >
                                <FaGithub />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/ali-ismail-35196615/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white text-2xl"
                            >
                                <FaLinkedin />
                            </Link>
                            <Link
                                href="https://x.com/Ali_F_Ismail"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white text-2xl"
                            >
                                <FaTwitter />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}
