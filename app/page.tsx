import Image from "next/image";
import React from "react";
import AIChat from "./components/ai_chat/ai-chat";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>2025 future hack</h1>
      <h2>Team 2</h2>
      <AIChat />
    </div>
  );
}
