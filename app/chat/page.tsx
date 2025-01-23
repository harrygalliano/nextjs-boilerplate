'use client';

import React from "react";
import AIChat from "../components/ai_chat/ai-chat";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wider">
            <Link href="/" className="hover:text-gray-300">
              FutureHack
            </Link> 
          </div>
          {/* Navigation Links */}
          <ul className="flex gap-8">
            <li>
              <Link href="/" className="hover:text-gray-300 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/chat" className="hover:text-gray-300 transition duration-300">
                Chat
              </Link>
            </li>
            <li>
              <Link href="/form" className="hover:text-gray-300 transition duration-300">
                Availability
              </Link>
            </li>
            <li>
              <Link
                href="/accounts"
                className="hover:text-gray-300 transition duration-300"
              >
                <span className="absolute inset-0 w-full h-[3px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative">Accounts</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex-grow">
        <h1 className="text-3xl font-bold text-gray-800">2025 Future Hack Chat Page</h1>
        <h2 className="text-lg text-gray-600">Team 2</h2>
        <AIChat />
      </div>
    </div>
  );
}