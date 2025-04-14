"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white px-6 py-16 md:px-20 flex flex-col lg:flex-row gap-12">
      
      {/* 💌 LEFT SIDE: Text Cards */}
      <div
        className={`flex flex-col gap-8 w-full lg:w-1/2 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {[
          {
            title: "🌼 Passions & Interests",
            desc: "When I'm not coding, you’ll catch me journaling, crocheting, lifting, listening to music, or hanging out with my favorite people.",
          },
          {
            title: "📘 Academic Journey",
            desc: "I'm a CS + Data Science major at UNC Chapel Hill — fascinated by the bridge between tech and business, especially in consulting.",
          },
          {
            title: "💖 Life Philosophy",
            desc: "Loving yourself and staying confident (even when it's hard) is the foundation for everything. Be your biggest fan.",
          },
        ].map(({ title, desc }) => (
          <div
            key={title}
            className="bg-white text-black p-6 rounded-3xl shadow-xl hover:shadow-pink-200 transition-all duration-300 ease-in-out hover:scale-[1.02]"
          >
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-700">{desc}</p>
          </div>
        ))}
      </div>

      {/* 💫 RIGHT SIDE: Image Grid */}
      <div
        className={`grid grid-cols-2 gap-4 w-full lg:w-1/2 transition-all duration-1000 delay-200 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="col-span-2 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <Image
            src="/stthomas.jpeg"
            alt="Aditi in St. Thomas"
            width={500}
            height={300}
            className="w-full h-80 object-cover object-center"
          />
        </div>
        <div className="rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <Image
            src="/carnival.jpeg"
            alt="Carnival"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <Image
            src="/friend.jpeg"
            alt="With friend"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
