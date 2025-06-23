"use client";
import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import "@splidejs/splide/dist/css/splide.min.css";

function Brands() {
  const brands = [
    { id: 1, logo: "/images/brand1.png" },
    { id: 2, logo: "/images/brand2.png" },
    { id: 3, logo: "/images/brand3.png" },
    { id: 4, logo: "/images/brand4.png" },
    { id: 5, logo: "/images/brand5.png" },
  ];

  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "loop",
      drag: false,
      focus: "center",
      perPage: 5,
      gap: 0, // Ensures no spacing between slides
      padding: 0, // No padding in the container
      trimSpace: true, // Avoid extra spacing
      arrows: false,
      pagination: false,
      autoScroll: {
        speed: 1,
         pauseOnHover: false
      },
    });

    splide.mount({ AutoScroll });
  }, []);

  return (
    <section className="h-auto w-[90vw] mx-auto flex justify-center items-center  bg-[#F7F7F7]">
      <div className=" h-full w-full">
        <div className="splide">
          <div className="splide__track">
            <ul className="splide__list">
              {brands.map((brand) => (
                <li key={brand.id} className="splide__slide">
                  <Image
                    src={brand.logo}
                    alt={`Brand ${brand.id}`}
                    width={100}
                    height={100}
                    className="object-contain w-28 h-20"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
