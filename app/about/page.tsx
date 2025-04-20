"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf1ef] via-[#fde9dc] to-[#fdf6d5] text-zinc-800 px-6 py-16 md:px-20 flex flex-col lg:flex-row gap-12">
      
      {/* ✏️ LEFT: TEXT */}
      <div
        className={`flex flex-col gap-8 w-full lg:w-1/2 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {[
          {
            title: "🌼 Passions & Interests",
            desc: "When I'm not coding, you’ll catch me journaling, crocheting, lifting, listening to music, or hanging out with my favorite people. I'm a matcha lover to my core, and I’m always rewatching comfort shows like White Lotus and Suits. Music is everything to me — especially the sounds of SZA, Jhené Aiko, Frank Ocean, and pretty much anything in the R&B universe that feeds the soul.",
          },
          {
            title: "📘 Academic Journey",
            desc: "I'm a Computer Science student at UNC Chapel Hill, minoring in Data Science and Risk Management. I’m especially passionate about the intersection of technology, business strategy, and social impact — with a growing interest in consulting roles that help solve pressing challenges in the environmental and healthcare sectors.",
          },
          {
            title: "💖 Life Philosophy",
            desc: "Navigating anxiety has taught me the importance of slowing down and caring for my mind. Through meditation, mindfulness, and consistent self-reflection, I’ve learned to stay grounded even when things feel overwhelming. Confidence isn’t always loud — sometimes it’s just choosing to keep going. I'm a big believer in showing up for yourself every day and being your own biggest cheerleader.",
          },
        ].map(({ title, desc }) => (
          <div
            key={title}
            className="bg-white text-zinc-800 p-6 rounded-3xl shadow-xl hover:shadow-[#fbd6d6] transition-all duration-300 ease-in-out hover:scale-[1.02]"
          >
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>

      {/* 📸 RIGHT: PHOTOS */}
      <div
        className={`flex flex-col gap-4 w-full lg:w-1/2 transition-all duration-1000 delay-200 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 ease-in-out h-[18rem]">
          <Image
            src="/stthomas.jpeg"
            alt="Aditi in St. Thomas"
            width={800}
            height={320}
            className="w-full h-full object-cover object-[center_30%]"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 ease-in-out h-[12rem]">
            <Image
              src="/carnival.jpeg"
              alt="Carnival"
              width={400}
              height={200}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 ease-in-out h-[12rem]">
            <Image
              src="/friend.jpeg"
              alt="With friend"
              width={400}
              height={200}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 ease-in-out h-[12rem]">
            <Image
              src="/duke.JPG"
              alt="Duke Game"
              width={400}
              height={200}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 ease-in-out h-[12rem]">
            <Image
              src="/girls.JPG"
              alt="Girls Night"
              width={400}
              height={200}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
