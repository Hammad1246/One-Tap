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
      image: "/images/hand1.png",
    },
    {
      id: 3,
      title: "Feature 3",
      description: "Provide an overview of main features of this service",
      image: "/images/hand1.png",
    },
    {
      id: 4,
      title: "Feature 4",
      description: "Provide an overview of main features of this service",
      image: "/images/hand1.png",
    },
  ]);
  return (
    <section className="h-screen  flex flex-col justify-evenly items-center ">
      <div className="flex flex-col items-center justify-center h-auto w-auto space-y-1">
        <h2 className="text-black text-3xl">Overview of Features</h2>
        <p className="text-black">
          Provide an overview of main features of this service
        </p>
      </div>

      <div className="flex flex-row flex-wrap gap-6 justify-center h-[60%] w-[90%]">
        {features.map((feature) => (
          <div
            className="flex-1 w-[20%] h-full rounded-lg"
            key={feature.id}
            style={{
              boxShadow:
                "4px 0 12px -2px #00000005, -4px 0 12px -2px #00000005, 0 8px 16px -4px #00000010",
            }}
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
