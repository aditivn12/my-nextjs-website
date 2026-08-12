"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectsInternshipsPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const projects = [
    {
      title: "AI Academic Paper Chatbot",
      description:
        "Built a full-stack RAG chatbot for academic papers using FastAPI, OpenAI, and Pinecone. Users can upload documents, ask questions, and receive context-aware answers backed by semantic search and source citations. I handled document chunking, vector retrieval, API design, validation, and frontend integration.",
      github: "https://github.com/aditivn12/academicjournalsbackendcode",
      frontend: "https://academicjournalsfrontendcode-sxjp.vercel.app/",
    },
    {
      title: "Stock Price & News Alert System",
      description:
        "Created an automated market monitoring tool that tracks stock price movements, pulls related news using Alpha Vantage and NewsAPI, and sends SMS alerts through Twilio when meaningful changes occur. The goal was to make market monitoring lightweight, fast, and practical.",
      github: "https://github.com/aditivn12/StockPriceProject",
    },
    {
      title: "Dog Adoption Platform",
      description:
        "Developed a full-stack adoption platform with Next.js and Supabase where users can browse adoptable dogs, add listings, and manage availability. Built dynamic breed routes, database-backed updates, and an engaging homepage that surfaces different dogs on each visit.",
      github: "https://github.com/aditivn12/dog-adoption-website",
      frontend: "https://dog-adoption-website-two.vercel.app/",
    },
  ];

  const internships = [
    {
      company: "Wells Fargo",
      role: "CIB Control Strategic Initiatives Intern",
      year: "2026",
      description:
        "Worked within Corporate & Investment Banking on strategic initiatives spanning financial risk governance, reporting, and AI-enabled process improvement. Supported 60+ internal governance workflows and collaborated with stakeholders across Risk, Technology, and Front Office teams.",
    },
    {
      company: "LexisNexis Risk Solutions",
      role: "Software / Quality Engineering Intern",
      year: "2025",
      description:
        "Built automated regression tests and reusable engineering utilities using Java and Selenium WebDriver. Helped improve testing reliability, reduce repetitive code, and identify data integrity issues across enterprise software workflows.",
    },
    {
      company: "Sales Factory",
      role: "AI / ML Intern",
      year: "2024",
      description:
        "Developed a Retrieval-Augmented Generation system using Python, FastAPI, Azure Cognitive Search, and Pinecone. The tool helped marketing teams retrieve more accurate information from internal documents and generate better campaign content.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#151515] text-[#f2f2ee]">
      {/* NAVIGATION */}
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
            href="/about"
            className="text-[11px] uppercase tracking-[0.18em] text-white/50 transition hover:text-white"
          >
            About
          </Link>

          <Link
            href="/connect"
            className="text-[11px] uppercase tracking-[0.18em] text-white/50 transition hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section
        className={`grid grid-cols-1 gap-12 border-b border-white/10 px-6 py-20 transition-all duration-1000 md:px-12 lg:grid-cols-[140px_1fr] lg:px-16 lg:py-28 ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        }`}
      >
        <div className="flex gap-3 text-[10px] uppercase tracking-[0.2em] text-white/35 lg:flex-col">
          <span>02</span>
          <span>Work</span>
        </div>

        <div className="max-w-6xl">
          <p className="mb-7 text-[11px] uppercase tracking-[0.25em] text-white/35">
            Selected projects & experience
          </p>

          <h1 className="max-w-5xl text-[clamp(3.5rem,7vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">
            Things I&apos;ve built.
            <span className="block text-white/25">
              Problems I&apos;ve worked on.
            </span>
          </h1>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="grid grid-cols-1 gap-12 border-b border-white/10 px-6 py-24 md:px-12 lg:grid-cols-[140px_1fr] lg:px-16">
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/35">
          Projects
        </div>

        <div>
          <div className="border-t border-white/10">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="grid gap-6 border-b border-white/10 py-10 md:grid-cols-[70px_1fr_auto]"
              >
                <p className="text-sm text-white/25">
                  0{i + 1}
                </p>

                <div>
                  <h2 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                    {project.title}
                  </h2>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/45 md:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-5 text-sm text-white/40 md:flex-col md:items-end">
                  {project.frontend && (
                    <Link
                      href={project.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-white"
                    >
                      Live ↗
                    </Link>
                  )}

                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-white"
                    >
                      GitHub ↗
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="grid grid-cols-1 gap-12 px-6 py-24 md:px-12 lg:grid-cols-[140px_1fr] lg:px-16">
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/35">
          Experience
        </div>

        <div>
          <h2 className="mb-16 text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.05em]">
            Where I&apos;ve worked.
          </h2>

          <div className="border-t border-white/10">
            {internships.map((intern) => (
              <div
                key={intern.company}
                className="grid gap-6 border-b border-white/10 py-10 md:grid-cols-[1fr_1.4fr_3fr]"
              >
                <div>
                  <p className="text-lg font-medium">
                    {intern.company}
                  </p>

                  <p className="mt-1 text-xs text-white/25">
                    {intern.year}
                  </p>
                </div>

                <p className="text-sm text-white/55">
                  {intern.role}
                </p>

                <p className="max-w-2xl text-sm leading-7 text-white/40">
                  {intern.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}