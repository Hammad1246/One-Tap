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
    <div className="h-auto md:py-12 py-5 bg-gradient-to-b from-[#F7F7F7] to-[#91a5ff] flex flex-col md:flex-row-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16">
      {/* Left Side - Card Display */}
      <div className="flex flex-col justify-center items-center space-y-4 lg:space-y-6 order-2 lg:order-1">
        {/* Card */}
        <div
          className={`w-[240px] h-[300px] md:w-[300px] md:h-[410px] rounded-xl shadow-lg px-4 py-2 relative ${cards[activeIndex].color}`}
        >
          <p className="text-xs text-black">{cards[activeIndex].title}</p>
        </div>

        {/* Dot Selectors */}
        <div className="flex gap-3 lg:gap-4">
          {cards.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 md:w-5 md:h-5 rounded-full ${cards[i].color} ${
                activeIndex === i ? "opacity-100 scale-120 border-3 border-white" : "opacity-80"
              } transition-all`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col justify-start px-5 md:px-0 lg:justify-evenly items-start h-auto lg:h-[400px] order-1 lg:order-2 max-w-md lg:max-w-none">
        <div className="mb-4 lg:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            {cards[activeIndex].title}
          </h2>
          <hr className="border border-[#515154B2] w-40 md:w-52 mt-2 md:mt-4" />
        </div>
        
        <ul className="space-y-2 md:space-y-3 text-gray-700 mb-6 lg:mb-0">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="flex items-start justify-start">
              <span className="mr-2 text-[#515154] mt-0.5"><FaRegCircleCheck /></span>
              <span className="text-[#515154] text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetuer adipiscing
              </span>
            </li>
          ))}
        </ul>

        <button className="px-3 py-1.5 md:px-4 md:py-2 border rounded-md text-xs md:text-sm text-[#1B1919] shadow self-center lg:self-auto">
          Learn more
        </button>
      </div>
    </div>
  );
}