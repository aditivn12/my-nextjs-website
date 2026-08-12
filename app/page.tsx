"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [scramble, setScramble] = useState("X7.");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let count = 0;

    const scrambleInterval = setInterval(() => {
      let firstCharacter;
      let secondCharacter;

      // Randomize first character, then lock into A
      if (count >= 8) {
        firstCharacter = "A";
      } else {
        firstCharacter =
          characters[Math.floor(Math.random() * characters.length)];
      }

      // Randomize second character, then lock into N
      if (count >= 12) {
        secondCharacter = "N";
      } else {
        secondCharacter =
          characters[Math.floor(Math.random() * characters.length)];
      }

      setScramble(`${firstCharacter}${secondCharacter}.`);

      count++;

      // Finish animation
      if (count >= 15) {
        clearInterval(scrambleInterval);

        // Final logo
        setScramble("AN.");

        // Hold AN. on screen
        setTimeout(() => {
          setLoading(false);

          // Small delay before fading homepage in
          setTimeout(() => {
            setVisible(true);
          }, 100);
        }, 700);
      }
    }, 130);

    return () => {
      clearInterval(scrambleInterval);
    };
  }, []);

  /* ========================================
     SCRAMBLE INTRO
  ======================================== */

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#151515] text-[#f2f2ee]">
        <div className="flex flex-col items-center">

          {/* SCRAMBLING LOGO */}
          <p className="text-[clamp(5rem,12vw,11rem)] font-medium leading-none tracking-[-0.08em]">
            {scramble}
          </p>

          {/* ANIMATED LINE */}
          <div className="mt-8 h-px w-32 overflow-hidden bg-white/10">
            <div className="h-full w-full animate-[loader_1.5s_ease-in-out_infinite] bg-white/60" />
          </div>

        </div>
      </main>
    );
  }

  /* ========================================
     HOMEPAGE
  ======================================== */

  return (
    <main
      className={`min-h-screen bg-[#151515] text-[#f2f2ee] transition-all duration-1000 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-3 opacity-0"
      }`}
    >

      {/* ========================================
          NAVIGATION
      ======================================== */}

      <header className="flex items-center justify-between border-b border-white/10 px-6 py-6 md:px-12 lg:px-16">

        {/* LOGO */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-[-0.04em] transition-opacity hover:opacity-60"
        >
          AN.
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="flex gap-5 md:gap-8">

          <Link
            href="/about"
            className="text-[11px] uppercase tracking-[0.18em] text-white/50 transition hover:text-white"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-[11px] uppercase tracking-[0.18em] text-white/50 transition hover:text-white"
          >
            Work
          </Link>

          <Link
            href="/connect"
            className="text-[11px] uppercase tracking-[0.18em] text-white/50 transition hover:text-white"
          >
            Contact
          </Link>

        </nav>

      </header>

      {/* ========================================
          HERO
      ======================================== */}

      <section className="grid min-h-[calc(100vh-77px)] grid-cols-1 px-6 py-16 md:px-12 lg:grid-cols-[140px_1fr] lg:px-16 lg:py-24">

        {/* LEFT LABEL */}
        <div className="mb-10 flex gap-3 text-[10px] uppercase tracking-[0.2em] text-white/35 lg:mb-0 lg:flex-col">
          <span>00</span>
          <span>Home</span>
        </div>

        {/* MAIN TEXT */}
        <div>
          <h1 className="max-w-6xl text-[clamp(3.5rem,8vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">

            Hi, I&apos;m Aditi.

            <span className="block text-white/25">
              I like building things that make complex ideas feel simple.
            </span>

          </h1>
        </div>

      </section>

    </main>
  );
}