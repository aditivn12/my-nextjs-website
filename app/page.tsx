"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const fullText = "Welcome to Aditi Nayak's Website";
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
  const [fadeSplash, setFadeSplash] = useState(false);

  useEffect(() => {
    const fadeOut = setTimeout(() => setFadeSplash(true), 2000);
    const hideSplash = setTimeout(() => setShowSplash(false), 3000);
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(hideSplash);
    };
  }, []);

  useEffect(() => {
    if (!showSplash) {
      let i = 0;
      setTypedText("");
      const interval = setInterval(() => {
        if (i <= fullText.length) {
          setTypedText(fullText.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 1000);
        }
      }, 75);
      return () => clearInterval(interval);
    }
  }, [showSplash]);

  if (showSplash) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ffe4d9] via-[#ffccf9] to-[#d5f4ff] transition-opacity duration-1000 ${
          fadeSplash ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-8xl font-extrabold text-[#2A6DA9] animate-spin-slow">
          A
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe4d9] via-[#ffccf9] to-[#d5f4ff] text-gray-800 flex flex-col items-center px-6 text-center">
      <div className="w-full flex flex-wrap justify-center gap-4 md:gap-6 pt-6">
        <Link
          href="/about"
          className="text-sm md:text-md font-medium text-[#2A6DA9] bg-white px-4 py-2 rounded-xl border border-[#c9e9fa] hover:bg-[#d5f4ff] transition hover:scale-105 shadow-sm"
        >
          About Me
        </Link>
        <Link
          href="/projects"
          className="text-sm md:text-md font-medium text-[#cc6b47] bg-white px-4 py-2 rounded-xl border border-[#fbd2c4] hover:bg-[#ffe4d9] transition hover:scale-105 shadow-sm"
        >
          Projects & Internships
        </Link>
        <Link
          href="/connect"
          className="text-sm md:text-md font-medium text-[#6d5cae] bg-white px-4 py-2 rounded-xl border border-[#e3ddfa] hover:bg-[#f2edff] transition hover:scale-105 shadow-sm"
        >
          Connect With Me
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#2A6DA9] drop-shadow-sm">
          {typedText}
          {showCursor && (
            <span className="inline-block w-[1ch] animate-blink text-[#2A6DA9]">
              |
            </span>
          )}
        </h1>

        <p className="text-gray-700 mt-6 max-w-xl text-lg font-light">
          Computer Science student at UNC Chapel Hill with minors in Data Science and Risk Management — passionate about using technology and data-driven strategy to support consulting efforts in the environmental and healthcare sectors, where innovation can directly improve lives and systems.
        </p>
      </div>
    </div>
  );
}
