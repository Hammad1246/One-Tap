import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <section
      className="relative lg:h-screen min-h-[600px] w-screen bg-cover bg-center bg-no-repeat  overflow-hidden"
      aria-label="Hero banner"
      style={{ backgroundImage: `url('/images/Hero.png')` }}
    >

      <div className="absolute lg:bottom-[15%] top-[40%] lg:top-auto  lg:w-[58%]  w-full px-3 lg:px-0 md:space-y-5 space-y-2  lg:left-[64px] text-start text-white ">
        <h1 className="md:text-6xl  text-3xl !font-bold  md:leading-tight  text-[#F7F7F7]">
          Digital Business Cards For Modern Networking.
        </h1>

        <p className="mb-20 md:mb-10 text-xl">Share Instantly. Stay Connected.</p>
       <Link href={"/shop"} className="flex justify-center items-center md:justify-start">
        <button className="bg-[#F7F7F7] hover:scale-105 rounded-lg h-[41px] w-[120px] text-black hover:bg-white cursor-pointer  transition-transform duration-300 active:scale-105 focus:scale-105" >
          Get Started
        </button>
       </Link>
      </div>

      <div className="hidden lg:flex">
        <div className="absolute h-[275px] w-[214px] bg-[#F7F7F7] bottom-[20%] right-[12%] rounded-xl z-10">
          <p className="p-4 text-black">Back Card</p>
        </div>
        <div className="absolute h-[328px] w-[257px] bg-[#F7F7F7] bottom-[5%] right-[5%] rounded-xl z-20">
          <p className="p-4 text-black">Front Card</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

