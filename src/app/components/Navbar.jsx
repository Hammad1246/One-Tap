"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowDropDown } from "react-icons/md";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/cartContext";

function Navbar() {

   const { dispatch } = useCart();

     const addToCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  return (
    <nav className="flex absolute top-10 justify-end h-auto w-full gap-7  text-black">
      <div className="absolute top-[-10px] left-[64px] rounded-2xl h-16 w-auto bg-[#F7F7F7]/70 backdrop-blur-md">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={128}
          height={66}
          className="h-20 w-28 pr-2 pb-5 px-1 object-contain"
        />
      </div>

      <div className="h-[42px] w-auto px-10 bg-white rounded-xl shadow">
        <ul className="flex justify-evenly items-center h-full w-full space-x-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          {/* <li className="relative" ref={shopRef}>
            <button
              onClick={toggleShopDropdown}
              className="inline-flex w-full justify-center gap-x-1 px-3 py-2 text-sm text-gray-900 cursor-pointer"
            >
              Shop
              <MdArrowDropDown
                aria-hidden="true"
                className="-mr-1 size-5 text-black"
              />
            </button>
            {shopOpen && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <ul className="py-1">
                  <li>
                    <Link
                      href="/shop"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Shop
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li> */}
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/FAQ">FAQ</Link>
          </li>
          {/* <li className="relative" ref={contactRef}>
            <button
              onClick={toggleContactDropdown}
              className="inline-flex w-full justify-center gap-x-1 px-3 py-2 text-sm text-gray-900 cursor-pointer"
            >
              Contact
              <MdArrowDropDown
                aria-hidden="true"
                className="-mr-1 size-5 text-black"
              />
            </button>
            {contactOpen && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <ul className="py-1">
                  <li>
                    <Link
                      href="/contact/support"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact/sales"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sales
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li> */}
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* this appear when user login*/}
      {/* <div className="h-[42px] w-auto px-3 bg-white shadow rounded-xl flex justify-between items-center mr-20">
        <Link href="#">
          <h6 className="text-[#007BFF] pr-5">Upgrade</h6>
        </Link>

        <div className="flex pl-3 text-sm justify-center items-center">
          <div className="h-[35px] w-[1px] mr-2 bg-[#1B1919]"></div>
          <div>
            <p className="text-black text-sm">User.OneTapCard@gmail.</p>
            <p className="text-[#515154] text-sm">Free Plan</p>
          </div>
        </div>

        <div className="h-[32px] w-[32px] bg-[#007BFF] rounded-md ml-5"></div>
      </div> */}

      <div className="flex">
        <div className="h-[42px] w-auto px-3 bg-white shadow rounded-xl flex justify-between items-center gap-2 mr-5">
          <Link href= "/login">
           <button className="w-auto h-auto p-1.5 px-3 rounded-xl text-black text-sm cursor-pointer">
            <p>Log in</p>
          </button>
          </Link>
         
          <Link href= "/signup">
           <button className="w-auto h-auto p-1.5 px-3 rounded-xl text-white text-sm bg-black cursor-pointer">
            <p>Sign up</p>
          </button>
          </Link>
         
        </div>

        <button
        onClick={addToCart}
         className="h-[42px] w-auto px-3 bg-white shadow rounded-xl flex justify-between items-center gap-2 mr-20 cursor-pointer ">
          <FiShoppingCart className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
