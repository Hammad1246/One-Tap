"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowDropDown } from "react-icons/md";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/cartContext";
 import { MdMenu, MdClose } from "react-icons/md";
import { Menu } from "@headlessui/react";


function Navbar() {

   const { dispatch } = useCart();

     const addToCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  return (
    <nav className="flex absolute top-10 lg:justify-end justify-start h-auto w-full gap-7  text-black">
      <div className="absolute lg:top-[-10px] lg:left-[64px] top-[-5px] right-[24px] rounded-2xl lg:h-16 h-12 lg:w-32 w-24 bg-white backdrop-blur-md">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={128}
          height={66}
          className="lg:h-20 lg:w-28 h-16 w-24 pr-2 pb-5 px-1 object-contain"
        />
      </div>

      <div className="hidden lg:flex h-[42px] w-auto px-10 bg-white rounded-xl shadow">
        <ul className="flex justify-evenly items-center h-full w-full space-x-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/FAQ">FAQ</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex">
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


<div className="lg:hidden flex justify-between items-center pl-5">

        <Menu as="div" className="relative inline-block text-left z-20">
          {({ open }) => (
            <>
              <Menu.Button className="p-2 bg-white shadow rounded-xl flex items-center justify-center">
                {open ? (
                  <MdClose className="h-6 w-6 text-black" />
                ) : (
                  <MdMenu className="h-6 w-6 text-black" />
                )}
              </Menu.Button>

              <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/"
                        className={`${
                          active ? "bg-gray-100 text-black" : "text-gray-900"
                        } group flex w-full items-center px-2 py-2 text-sm`}
                      >
                        Home
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/shop"
                        className={`${
                          active ? "bg-gray-100 text-black" : "text-gray-900"
                        } group flex w-full items-center px-2 py-2 text-sm`}
                      >
                        Shop
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/FAQ"
                        className={`${
                          active ? "bg-gray-100 text-black" : "text-gray-900"
                        } group flex w-full items-center px-2 py-2 text-sm`}
                      >
                        FAQ
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/contact"
                        className={`${
                          active ? "bg-gray-100 text-black" : "text-gray-900"
                        } group flex w-full items-center px-2 py-2 text-sm`}
                      >
                        Contact
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/login"
                        className={`${
                          active ? "bg-gray-100 text-black" : "text-gray-900"
                        } group flex w-full items-center px-2 py-2 text-sm`}
                      >
                        Log in
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/signup"
                        className={`${
                          active ? "bg-gray-100 text-black" : "text-gray-900"
                        } group flex w-full items-center px-2 py-2 text-sm`}
                      >
                        Sign up
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={addToCart}
                        className={`${
                          active ? "bg-gray-100 text-black" : "text-gray-900"
                        } group flex w-full items-center px-2 py-2 text-sm`}
                      >
                        <FiShoppingCart className="h-5 w-5 mr-2" />
                        Cart
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </>
          )}
        </Menu>
      </div>


    </nav>
  );
}

export default Navbar;

