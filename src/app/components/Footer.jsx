import React from "react";
import { FaArrowRight, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import Image from "next/image";

const Footer = () => {
  const productLinks = [
    { label: "Cards", link: "/cards" },
    { label: "Cards 2", link: "/cards-2" },
  ];

  const exploreLinks = [
    { label: "Resources", link: "/resources" },
    { label: "Blog", link: "/blog" },
    { label: "Documents", link: "/documents" },
  ];

  const companyLinks = [
    { label: "About us", link: "/about" },
    { label: "Partners", link: "/partners" },
    { label: "Customers", link: "/customers" },
    { label: "Contact us", link: "/contact" },
  ];

  const legalLinks = [
    { label: "Terms", link: "/terms" },
    { label: "Privacy", link: "/privacy" },
    { label: "Cookies", link: "/cookies" },
  ];

  const mediaLinks = [
    { icon: <FaXTwitter size={20} />, link: "https://twitter.com" },
    { icon: <FaInstagram size={20} />, link: "https://instagram.com" },
    { icon: <FaYoutube size={20} />, link: "https://youtube.com" },
    { icon: <IoLogoLinkedin size={20} />, link: "https://linkedin.com" },
  ];

  return (
    <footer className="min-h-[550px] md:h-[550px] w-screen bg-[#E8E8E8] flex justify-center items-center pt-10 md:pt-0 mt-10">
      <div className="w-[80%] h-full md:h-[80%] space-y-10 md:space-y-0 md:space-x-10 flex flex-col md:flex-row">
        <div className="w-full md:w-[35%] h-full flex flex-col justify-between items-start space-y-8 md:space-y-0">
          <div className="w-[160px] h-[80px] bg-[#F7F7F7] rounded-xl hidden md:flex">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={500}
              height={500}
              className="w-auto h-16 mx-auto my-auto object-cover"
            />
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm w-full">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">
              Get In Touch
            </h3>
            <div className="flex mb-4 md:mb-6">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600 text-sm md:text-base"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-r-lg flex items-center justify-center transition-colors">
                <FaArrowRight size={20} />
              </button>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
        <div className="w-full h-full md:h-[80%] flex flex-col justify-between items-center">
          <div className="grid grid-cols-3 gap-6 md:gap-8 pt-0 md:pt-8 w-full md:w-[80%]">
            {/* Product Column */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 md:mb-6 text-base md:text-lg">
                Product
              </h4>
              <ul className="space-y-2 md:space-y-4">
                {productLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-gray-500 hover:text-gray-900 transition-colors text-sm md:text-base"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore Column */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 md:mb-6 text-base md:text-lg">
                Explore
              </h4>
              <ul className="space-y-2 md:space-y-4">
                {exploreLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-gray-500 hover:text-gray-900 transition-colors text-sm md:text-base"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 md:mb-6 text-base md:text-lg">
                Company
              </h4>
              <ul className="space-y-2 md:space-y-4">
                {companyLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-gray-500 hover:text-gray-900 transition-colors text-sm md:text-base"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-auto md:h-[68px] w-full border-t-2 border-gray-300 mt-8 md:mt-0">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6 pt-6 md:pt-10 pb-4 md:pb-0">
              <div className="md:flex flex-wrap justify-center gap-4 md:gap-8 hidden w-full">
                {legalLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="text-[#1B1919] !font-extrabold transition-colors text-sm md:text-base"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="flex w-full justify-between md:justify-end items-center ">
                <div className=" rounded-2xl h-16  w-auto bg-[#F7F7F7]/70 backdrop-blur-md md:hidden">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={128}
                    height={66}
                    className="h-20 w-28 pr-2 pb-5 px-1 object-contain"
                  />
                </div>
               <div className="flex md:gap-4">
                 {mediaLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="text-[#1B1919] transition-colors p-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                  </a>
                ))}
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
