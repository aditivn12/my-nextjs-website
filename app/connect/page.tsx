"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Connect() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#151515] text-[#f2f2ee]">

      {/* =========================
          NAVIGATION
      ========================== */}
      <header className="flex items-center justify-between border-b border-white/10 px-6 py-6 md:px-12 lg:px-16">

        {/* LOGO */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-[-0.04em] transition-opacity hover:opacity-60"
        >
          AN.
        </Link>

        {/* NAV LINKS */}
        <nav className="flex gap-5 md:gap-8">

          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.18em] text-white/50 transition hover:text-white"
          >
            Home
          </Link>

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

        </nav>
      </header>


      {/* =========================
          CONTACT
      ========================== */}
      <section
        className={`grid min-h-[calc(100vh-77px)] grid-cols-1 gap-12 px-6 py-20 transition-all duration-1000 md:px-12 lg:grid-cols-[140px_1fr] lg:px-16 lg:py-28 ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        }`}
      >

        {/* LEFT LABEL */}
        <div className="flex gap-3 text-[10px] uppercase tracking-[0.2em] text-white/35 lg:flex-col">
          <span>03</span>
          <span>Contact</span>
        </div>


        {/* MAIN CONTENT */}
        <div className="flex max-w-6xl flex-col justify-between">

          {/* =========================
              HEADING
          ========================== */}
          <div>

            <p className="mb-7 text-[11px] uppercase tracking-[0.25em] text-white/35">
              Get in touch
            </p>

            <h1 className="max-w-5xl text-[clamp(3.5rem,7vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">

              Let&apos;s connect.

              <span className="block text-white/25">
                I&apos;m always open to interesting conversations.
              </span>

            </h1>

            <p className="mt-12 max-w-2xl text-base leading-8 text-white/45 md:text-lg">
              Whether you want to talk about software, AI, startups,
              interesting projects, opportunities, or just a really good
              café, feel free to reach out.
            </p>

          </div>


          {/* =========================
              CONTACT LINKS
          ========================== */}
          <div className="mt-24 border-t border-white/10">

          {/* EMAIL */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=msgaditi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group grid cursor-pointer gap-4 border-b border-white/10 py-7 transition-all duration-300 hover:pl-3 md:grid-cols-[140px_1fr_auto] md:items-center"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Email
              </span>

              <span className="text-lg font-medium transition-colors group-hover:text-white md:text-xl">
                msgaditi@gmail.com
              </span>

              <span className="text-white/30 transition group-hover:text-white">
                ↗
              </span>
            </a>

            {/* LINKEDIN */}
            <Link
              href="https://www.linkedin.com/in/aditi-nayak1/"
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-4 border-b border-white/10 py-7 transition-all duration-300 hover:pl-3 md:grid-cols-[140px_1fr_auto] md:items-center"
            >

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                LinkedIn
              </span>

              <span className="text-lg font-medium transition-colors group-hover:text-white md:text-xl">
                Aditi Nayak
              </span>

              <span className="text-white/30 transition group-hover:text-white">
                ↗
              </span>

            </Link>


            {/* GITHUB */}
            <Link
              href="https://github.com/aditivn12"
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-4 border-b border-white/10 py-7 transition-all duration-300 hover:pl-3 md:grid-cols-[140px_1fr_auto] md:items-center"
            >

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                GitHub
              </span>

              <span className="text-lg font-medium transition-colors group-hover:text-white md:text-xl">
                @aditivn12
              </span>

              <span className="text-white/30 transition group-hover:text-white">
                ↗
              </span>

            </Link>

          </div>


          {/* =========================
              FOOTER
          ========================== */}
          <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/25 md:flex-row md:justify-between">

            <p>
              Aditi Nayak
            </p>

            <p>
              UNC-Chapel Hill · Computer Science
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}