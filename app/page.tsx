'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/chat");
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-1/3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded text-gray-800 bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded text-gray-800 bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300"
          required
        />
        <button
          type="submit"
          className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600 transition-all duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}