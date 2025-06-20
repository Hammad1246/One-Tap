"use client";

import { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const cards = [
  { title: "Blue Card", color: "bg-blue-500" },
  { title: "Red Card", color: "bg-red-500" },
  { title: "White Card", color: "bg-white border border-gray-400" },
  { title: "Yellow Card", color: "bg-yellow-400" },
];

export default function CardSummary() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-screen bg-gradient-to-b from-[#F7F7F7] to-[#91a5ff] flex items-center justify-center gap-16 p-8 mt-10">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center  space-y-6">
        {/* Card */}
        <div
          className={`w-[300px] h-[410px] rounded-xl shadow-lg px-4 py-2 relative ${cards[activeIndex].color}`}
        >
          <p className="text-xs text-black">{cards[activeIndex].title}</p>
        </div>

        {/* Dot Selectors */}
        <div className="flex gap-4">
          {cards.map((_, i) => (
            <button
              key={i}
              className={`w-4 h-4 rounded-full ${cards[i].color} ${
                activeIndex === i ? "opacity-100 scale-110" : "opacity-80"
              } transition-all`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className=" flex flex-col justify-evenly items-start h-[400px]">
        <h2 className="text-3xl font-bold text-black mb-2">
          {cards[activeIndex].title}
           <hr className="border border-[#515154B2] w-52 mt-4" />
        </h2>
       
        <ul className="space-y-3 text-gray-700">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="flex items-center justify-start">
              <span className="mr-2 text-[#515154]"><FaRegCircleCheck /></span>
              <span className="text-[#515154] ">Lorem ipsum dolor sit amet, consectetuer adipiscing</span>
            </li>
          ))}
        </ul>

        <button className="mt-6 px-4 py-2 border rounded-md text-sm text-[#1B1919] shadow">
          Learn more
        </button>
      </div>
    </div>
  );
}
