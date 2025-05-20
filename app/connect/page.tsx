"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Connect() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-[#ffe4d9] via-[#ffccf9] to-[#d5f4ff] text-zinc-800 flex flex-col items-center p-10 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >

      <div className="w-full flex flex-wrap justify-center gap-4 md:gap-6 pt-6 pb-12">
        <Link
          href="/"
          className="text-sm md:text-md font-medium text-[#2A6DA9] bg-white px-4 py-2 rounded-xl border border-[#c9e9fa] hover:bg-[#d5f4ff] transition hover:scale-105 shadow-sm"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-sm md:text-md font-medium text-[#a64d79] bg-white px-4 py-2 rounded-xl border border-[#f8cfe3] hover:bg-[#ffccf9] transition hover:scale-105 shadow-sm"
        >
          About Me
        </Link>
        <Link
          href="/projects"
          className="text-sm md:text-md font-medium text-[#cc6b47] bg-white px-4 py-2 rounded-xl border border-[#fbd2c4] hover:bg-[#ffe4d9] transition hover:scale-105 shadow-sm"
        >
          Projects & Internships
        </Link>
      </div>

      {/* 💌 Main Section */}
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-rose-600">
        Let&apos;s Connect
      </h1>

      <div className="flex flex-col items-center gap-10 w-full max-w-4xl">
        {/* 📍 Map */}
        <div className="w-full md:w-3/4 rounded-3xl overflow-hidden shadow-lg border border-rose-100">
          <iframe
            title="Chapel Hill Location"
            className="w-full h-64 md:h-80 grayscale contrast-110"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.7847913041365!2d-79.0558442233437!3d35.91320077239273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace5061da5d93f%3A0x8a9292bd08f4c1c!2sChapel%20Hill%2C%20NC!5e0!3m2!1sen!2us!4v1708712800143!5m2!1sen!2us"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* ✉️ Contact Buttons */}
        <div className="w-full flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-6 text-rose-600">Get in Touch</h2>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <Link
              href="mailto:msgaditi@gmail.com"
              className="bg-white text-[#e06b6b] flex items-center justify-center p-3 rounded-xl font-medium hover:bg-[#ffecec] transition w-40 border border-[#f4b6b6] shadow-md hover:scale-105"
            >
              📧 Email
            </Link>

            <Link
              href="https://www.linkedin.com/in/aditi-nayak1/"
              target="_blank"
              className="bg-white text-[#4a8bb2] flex items-center justify-center p-3 rounded-xl font-medium hover:bg-[#eaf6ff] transition w-40 border border-[#b9e3f6] shadow-md hover:scale-105"
            >
              🔗 LinkedIn
            </Link>

            <div className="col-span-2 flex justify-center">
              <Link
                href="https://github.com/aditivn12"
                target="_blank"
                className="bg-white text-[#9370DB] flex items-center justify-center p-3 rounded-xl font-medium hover:bg-[#f2edff] transition w-40 border border-[#d3c3f3] shadow-md hover:scale-105"
              >
                🐙 GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
