import React from "react";
import Image from "next/image";

function OneCard() {
  return (
    <section className="h-auto w-[90vw] mx-auto flex flex-col lg:flex-row items-center justify-between lg:justify-evenly text-[#1B1919]  gap-8 lg:gap-0 md:my-12 ">
      {/* Text Content */}
      <div className="w-full lg:w-[50%] h-full order-2 lg:order-1">
        <div className="text-center lg:text-left max-w-lg mx-auto lg:mx-0">
          <h2 className="text-2xl lg:text-4xl mb-3 lg:mb-4">
            One Card = One Tree Planted
          </h2>
          <p className="text-[#515154] text-sm lg:text-base text-center lg:text-left mb-4 lg:mb-6">
            Every purchase helps restore the planet. Let's make the world
            greener, one tree at a time!
          </p>
          <div className="flex items-center justify-center lg:justify-start w-full lg:w-[80%] bg-[#E8E8E8] px-4 lg:pl-6 py-3 lg:py-4 rounded-lg">
            <div className="flex flex-row items-center gap-4 lg:gap-8">
              <span className="text-xl lg:text-2xl font-bold text-black flex gap-3 lg:gap-5 items-center">
                <Image
                  src="/images/plant.png"
                  alt="Plant"
                  width={500}
                  height={500}
                  className="w-auto h-6 lg:h-8 object-cover"
                />
                <span className="text-xl lg:text-2xl underline !font-extrabold">50,000</span>
              </span>
              <span className="text-base !font-bold lg:text-md">Trees Planted So Far !</span>
            </div>
          </div>
          <button className="mt-6 px-5 lg:px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition text-sm lg:text-base">
            Buy & Plant a Tree
          </button>
        </div>
      </div>

      {/* Image Content */}
      <div className="hidden md:flex w-full lg:w-[50%] h-full order-1 lg:order-2">
        <Image
          src="/images/plant-illustration.png"
          alt="One Card Image"
          width={500}
          height={500}
          className="w-full h-auto object-cover max-w-md lg:max-w-none mx-auto"
          priority
        />
      </div>
    </section>
  );
}

export default OneCard;