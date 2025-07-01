import React from "react";
import Image from "next/image";

function Card({ title, description, image }) {
  return (
    <div className="bg-[#F7F7F7] shadow-md rounded-lg p-2 md:p-6 flex flex-col justify-between items-center h-auto w-full">
      <div className="flex justify-center items-center flex-1 mb-6">
        <div 
          className="w-28 h-28 md:w-44 md:h-44 bg-[#007BFF] rounded-full flex items-center justify-center overflow-hidden"
          style={{
            boxShadow: "inset 0 0 16.5px 0 #00000040"
          }}
        >
          <Image
            src={image}
            alt={title}
            width={140}
            height={140}
            className="object-contain"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center mt-4 md:mt-6">
        <h3 className="text-lg md:text-xl font-semibold text-center text-[#1B1919] ">
          {title}
        </h3>
        <p className="text-[#515154] mt-2 text-center text-sm md:text-base pb-5">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;