"use client";
import React, { useState } from "react";
import Card from "./Card";

function Features() {
  const [features, setFeatures] = useState([
    {
      id: 1,
      title: "Feature 1",
      description: "Provide an overview of main features of this service",
      image: "/images/hand.png",
    },
    {
      id: 2,
      title: "Feature 2",
      description: "Provide an overview of main features of this service",
      image: "/images/f2.png",
    },
    {
      id: 3,
      title: "Feature 3",
      description: "Provide an overview of main features of this service",
      image: "/images/hand.png",
    },
    {
      id: 4,
      title: "Feature 4",
      description: "Provide an overview of main features of this service",
      image: "/images/f2.png",
    },
  ]);

  return (
    <section className="h-auto md:my-10 my-5 flex flex-col justify-center lg:justify-evenly items-center bg-[#F7F7F7] ">
      <div className="flex flex-col items-center justify-center text-center mb-8 lg:mb-0 space-y-1 w-full lg:w-auto">
        <h2 className="text-black text-2xl md:text-3xl">Overview of Features</h2>
        <p className="text-black text-sm md:text-base">
          Provide an overview of main features of this service
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] h-auto">
        {features.map((feature) => (
          <div
            className="w-full h-full rounded-lg"
            key={feature.id}
          >
            <Card
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;