"use client"
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQItem = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="!font-bold text-lg">{question}</h3>
        <FaChevronDown
          className={`h-5 w-5 text-gray-600 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && <p className="mt-4 text-[#515154]">{answer}</p>}
    </div>
  );
};

export default FAQItem;
