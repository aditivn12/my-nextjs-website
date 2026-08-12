"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
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

        <Link
          href="/"
          className="text-lg font-semibold tracking-[-0.04em] transition-opacity hover:opacity-60"
        >
          AN.
        </Link>

        <nav className="flex gap-5 md:gap-8">
          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.18em] text-white/50 transition hover:text-white"
          >
            Home
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


      {/* =========================
          ABOUT
      ========================== */}
      <section
        className={`grid min-h-[calc(100vh-77px)] grid-cols-1 gap-12 px-6 py-16 transition-all duration-1000 md:px-12 lg:grid-cols-[140px_1fr] lg:px-16 lg:py-24 ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        }`}
      >

        {/* LEFT LABEL */}
        <div className="flex gap-3 text-[10px] uppercase tracking-[0.2em] text-white/35 lg:flex-col">
          <span>01</span>
          <span>About</span>
        </div>


        {/* MAIN CONTENT */}
        <div className="max-w-6xl">

          <p className="mb-7 text-[11px] uppercase tracking-[0.25em] text-white/35">
            A little bit about me
          </p>


          {/* LARGE HEADING */}
          <h1 className="max-w-5xl text-[clamp(3.3rem,6vw,6.8rem)] font-medium leading-[0.92] tracking-[-0.06em]">

            Curious by nature.

            <span className="block text-white/25">
              Always building, exploring, and moving.
            </span>

          </h1>


          {/* =========================
              BIO + PHOTOS
          ========================== */}
          <div className="mt-20 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

            {/* =========================
                BIO
            ========================== */}
            <div className="flex flex-col">

              <div className="max-w-xl space-y-7 text-base leading-8 text-white/50 md:text-lg">

                <p>
                  I&apos;m a Computer Science student at UNC-Chapel Hill,
                  and I&apos;ve always been someone who loves creating
                  things. Whether it&apos;s building a new project,
                  learning a new technology, or figuring out how something
                  works, I love taking ideas and turning them into
                  something real.
                </p>

                <p>
                  I&apos;m also a very fast-paced person. I love being busy,
                  learning quickly, meeting new people, and putting myself
                  in environments where there&apos;s constantly something
                  new happening.
                </p>

                <p>
                  Outside of tech, I love traveling and exploring new
                  places, going to the gym, trying new cafés, and spending
                  time with the people I care about. I&apos;m almost always
                  planning where I want to go or what I want to try next.
                </p>

              </div>


              {/* =========================
                  INTERESTS
              ========================== */}
              <div className="mt-14 border-t border-white/10 pt-8">

                <p className="mb-6 text-[10px] uppercase tracking-[0.22em] text-white/30">
                  Usually you&apos;ll find me
                </p>

                <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/50">

                  <span>Traveling</span>

                  <span>At the gym</span>

                  <span>Building something</span>

                  <span>Trying a new café</span>

                  <span>Exploring a new city</span>

                </div>

              </div>


              {/* =========================
                  FUN FACTS
              ========================== */}
              <div className="mt-14 border-t border-white/10 pt-8">

                <p className="mb-8 text-[10px] uppercase tracking-[0.22em] text-white/30">
                  A couple fun facts
                </p>

                <div className="grid grid-cols-2 gap-10">

                  <div>
                    <p className="text-5xl font-medium tracking-[-0.06em] md:text-6xl">
                      20+
                    </p>

                    <p className="mt-3 text-sm leading-6 text-white/35">
                      countries
                      <br />
                      visited
                    </p>
                  </div>


                  <div>
                    <p className="text-5xl font-medium tracking-[-0.06em] md:text-6xl">
                      8192
                    </p>

                    <p className="mt-3 text-sm leading-6 text-white/35">
                      highest tile
                      <br />
                      in 2048
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* =========================
                PHOTOS
            ========================== */}

            <div className="grid grid-cols-2 items-start gap-5">

              {/* =========================
                  PROFESSIONAL PHOTO

                  Zoomed + shifted upward.
                  This intentionally crops out
                  the lower blazer / V-neck area.
              ========================== */}

              <div className="relative h-[430px] overflow-hidden bg-[#202020] md:h-[480px]">

                <Image
                  src="/professional.JPEG"
                  alt="Professional portrait of Aditi"
                  fill
                  priority
                  className="
                    object-cover
                    object-[center_30%]
                    scale-[1.65]
                    transition
                    duration-700
                    ease-out
                    hover:scale-[1.68]
                  "
                />

              </div>


              {/* =========================
                  COFFEE PHOTO

                  Slightly zoomed so the framing
                  matches the professional photo.
              ========================== */}

              <div className="relative mt-10 h-[430px] overflow-hidden bg-[#202020] md:h-[480px]">

                <Image
                  src="/coffee.jpeg"
                  alt="Aditi holding coffee at a cafe"
                  fill
                  className="
                    object-cover
                    object-[center_35%]
                    scale-[1.2]
                    transition
                    duration-700
                    ease-out
                    hover:scale-[1.23]
                  "
                />

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}