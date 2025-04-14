"use client";

import { useEffect, useState } from "react";

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

      // 💥 Start with empty text to prevent missed first char
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
        className={`min-h-screen flex items-center justify-center bg-black text-white transition-opacity duration-1000 ${
          fadeSplash ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-7xl font-extrabold animate-spin-slow">A</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-zinc-900 text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        {typedText}
        {showCursor && <span className="inline-block w-[1ch] animate-blink">|</span>}
      </h1>

      <p className="text-zinc-300 mt-6 max-w-xl text-lg">
        Computer Science and Data Science major at UNC Chapel Hill — passionate about technology consulting and building impactful solutions.
      </p>
    </div>
  );
}
