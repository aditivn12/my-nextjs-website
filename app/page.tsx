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
        className={`min-h-screen flex items-center justify-center bg-[#fde2cf] transition-opacity duration-1000 ${
          fadeSplash ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative w-24 h-24 animate-spin-slow">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="absolute w-4 h-4 rounded-full"
              style={{
                backgroundColor: [
                  "#FF5F56", 
                  "#FFBD2E", 
                  "#28C840", 
                  "#007AFF", 
                  "#5856D6",
                  "#FF2D55", 
                ][i],
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 60}deg) translateX(2.5rem)`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf1ef] via-[#fde9dc] to-[#fdf6d5] text-gray-800 flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#D87355] drop-shadow-sm">
        {typedText}
        {showCursor && (
          <span className="inline-block w-[1ch] animate-blink text-[#D87355]">
            |
          </span>
        )}
      </h1>

      <p className="text-gray-700 mt-6 max-w-xl text-lg font-light">
      Computer Science student at UNC Chapel Hill with minors in Data Science and Risk Management — passionate about using technology and data-driven strategy to support consulting efforts in the environmental and healthcare sectors, where innovation can directly improve lives and systems.
      </p>
    </div>
  );
}
