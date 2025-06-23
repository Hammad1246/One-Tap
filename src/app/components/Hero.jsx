import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section
      className="h-screen w-screen bg-cover bg-center bg-no-repeat  overflow-hidden"
      aria-label="Hero banner"
      style={{ backgroundImage: `url('/images/Hero.png')` }}
    >
      <div className="absolute top-[32px] left-[64px] rounded-2xl h-16 w-auto bg-[#F7F7F7]/70 backdrop-blur-md">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={128}
          height={66}
          className="h-20 w-28 pr-2 pb-5 px-1 object-contain"
        />
      </div>

      <div className="absolute top-[221px] w-[58%] space-y-5  left-[64px] text-start text-white">
        <h1 className="text-6xl font-bold  leading-tight">
          Digital business cards for modern networking.
        </h1>

        <p className="mb-10 text-xl">Share instantly. Stay connected.</p>
        <button className="bg-[#F7F7F7] rounded-lg h-[41px] w-[120px] text-black hover:bg-white cursor-pointer" >
          Get Started
        </button>
      </div>

      <div className="">
        <div className="absolute h-[275px] w-[214px] bg-[#F7F7F7] top-[224.14px] right-[12%] rounded-xl z-10">
          <p className="p-4 text-black">Back Card</p>
        </div>
        <div className="absolute h-[328px] w-[257px] bg-[#F7F7F7] top-[262.49px] right-[5%] rounded-xl z-20">
          <p className="p-4 text-black">Front Card</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
