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
        "A smart and responsive chatbot that reads and understands academic papers. I built this using FastAPI, OpenAI, and Pinecone. Users can upload documents and ask questions, while the backend handles semantic chunking and vector search for intelligent retrieval. I also implemented full API support for citing and chatting, with validation through Pydantic and an integrated frontend.",
      github: "https://github.com/aditivn12/academicjournalsbackendcode",
      frontend: "https://academicjournalsfrontendcode-sxjp.vercel.app/",
    },
    {
      title: "Stock Price and News Alert Automation System",
      description:
        "This project automatically watches stock price fluctuations and fetches related news using Alpha Vantage and NewsAPI. When something important happens, it sends you a text via Twilio. It was designed with simplicity and utility in mind — an alert system that keeps you in the know without refreshing charts all day.",
      github: "https://github.com/aditivn12/StockPriceProject",
    },
    {
      title: "Dog Adoption Center App",
      description:
        "An adorable full-stack platform to browse adoptable dogs, add new pets, and manage their availability. Built with Next.js and Supabase, it supports real-time syncing, role-based access, and fun dynamic routing by breed. I included a homepage that shows random pups to keep it engaging and heartwarming.",
      github: "https://github.com/aditivn12/dog-adoption-website",
      frontend: "https://dog-adoption-website-two.vercel.app/",
    },
  ];

  const internships = [
    {
      title: "Incoming Quality Engineer Intern, LexisNexis Risk Solutions",
      description:
        "Selected for a 10-week internship focused on test automation and quality frameworks in a hybrid enterprise environment. I will be collaborating with cross-functional engineering teams to support scalable QA tools, streamline testing workflows, and contribute to product reliability across LexisNexis’s solutions.",
    },
    {
      title: "AI Intern, Sales Factory",
      description:
        "At Sales Factory, I developed a Retrieval-Augmented Generation (RAG) model for marketing teams. The tool increased content accuracy, empowered internal users, and helped streamline engagement workflows by making AI tools accessible and relevant to campaign needs.",
    },
    {
      title: "Data Strategy Associate Intern, Artisan Analytix",
      description:
        "At Artisan Analytix, I supported business development by analyzing NAICS codes, researching government contract stages, and reviewing internal certifications. My insights helped position the company more competitively in the federal contracting space.",
    },
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#fdf1ef] via-[#fde9dc] to-[#fdf6d5] text-zinc-800 px-6 py-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>      
      <div className="max-w-5xl mx-auto space-y-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-rose-600 mb-4">Projects</h1>
          <p className="text-zinc-600">A selection of full-stack tools and experiences I’ve built with care.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`bg-white border border-rose-100 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-700 ease-in-out hover:scale-[1.02] ${project.title.includes("Dog Adoption") ? "md:col-span-2 md:w-full max-w-2xl mx-auto" : ""}`}
            >
              <h2 className="text-xl font-bold text-rose-700 mb-3 text-center">{project.title}</h2>
              <p className="text-sm text-zinc-700 mb-4 text-center">{project.description}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                {project.frontend && (
                  <Link
                    href={project.frontend}
                    target="_blank"
                    className="text-sm text-rose-600 font-medium hover:underline"
                  >
                    Live Site ↗
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-sm text-rose-600 font-medium hover:underline"
                  >
                    GitHub ↗
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-16">
          <h1 className="text-5xl font-bold text-orange-500 mb-4">Internships</h1>
          <p className="text-zinc-600">Highlights of collaborative work and hands-on learning.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {internships.map((intern, i) => (
            <div
              key={i}
              className={`bg-white border border-orange-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-700 ease-in-out hover:scale-[1.02] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${i === internships.length - 1 ? "md:col-span-2 md:w-full max-w-2xl mx-auto" : ""}`}
            >
              <h2 className="text-xl font-semibold text-orange-700 mb-2 text-center">{intern.title}</h2>
              <p className="text-sm text-zinc-700 text-center">{intern.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}