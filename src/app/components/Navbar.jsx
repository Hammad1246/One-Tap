// import React from "react";
// import Link from "next/link";
// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// import { MdArrowDropDown } from "react-icons/md";

// function Navbar() {
//   return (
//     <nav className="flex  absolute top-10 justify-end h-auto w-full gap-7 text-black ">
//       <div className="h-[42px] w-auto px-10  bg-white  rounded-xl ">
//         <ul className="flex justify-evenly items-center h-full w-full space-x-10">
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           <li>
//             <Menu as="div" className="relative inline-block text-left">
//               <div>
//                 <MenuButton className="inline-flex w-full justify-center gap-x-1  px-3 py-2 text-sm h1-custom text-gray-900  ">
//                   Shop
//                   <MdArrowDropDown
//                     aria-hidden="true"
//                     className="-mr-1 size-5 text-black"
//                   />
//                 </MenuButton>
//               </div>
//               <MenuItems >
//               </MenuItems>
  
//             </Menu>
//           </li>
//           <li>
//             <Link href="/">FAQ</Link>
//           </li>

//             <li>
//             <Menu as="div" className="relative inline-block text-left">
//               <div>
//                 <MenuButton className="inline-flex w-full justify-center gap-x-1   px-3 py-2 text-sm h1-custom text-gray-900  ">
//                   Contact
//                   <MdArrowDropDown
//                     aria-hidden="true"
//                     className="-mr-1 size-5 text-black"
//                   />
//                 </MenuButton>
//               </div>

              
//             </Menu>
//           </li>
//         </ul>
//       </div>

//       <div className="h-[42px] w-auto px-3 bg-white rounded-xl  flex justify-between items-center mr-20">
//         <Link
//           href="#">
//           <h6 className="text-[#007BFF] pr-5 ">Upgrade</h6>
//         </Link>

//         <div className="flex  pl-3 text-sm justify-center items-center ">
//             <div className="h-[35px] w-[1px] mr-2 bg-[#1B1919]">
        
//             </div>
//            <div>
//              <p className="text-black text-sm">User.OneTapCard@gmail.</p>
//             <p className="text-[#515154] text-sm">Free Plan</p>
//            </div>
//         </div>

//         <div className="h-[32px] w-[32px] bg-[#007BFF] rounded-md ml-5">

//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;

"use client"


import React, { useState } from "react";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";

function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const toggleShopDropdown = () => setShopOpen(!shopOpen);
  const toggleContactDropdown = () => setContactOpen(!contactOpen);

  return (
    <nav className="flex absolute top-10 justify-end h-auto w-full gap-7 text-black">
      <div className="h-[42px] w-auto px-10 bg-white rounded-xl">
        <ul className="flex justify-evenly items-center h-full w-full space-x-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="relative">
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
                      href="/shop/category1"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Category 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop/category2"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Category 2
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link href="/">FAQ</Link>
          </li>
          <li className="relative">
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
          </li>
        </ul>
      </div>

      <div className="h-[42px] w-auto px-3 bg-white rounded-xl flex justify-between items-center mr-20">
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
      </div>
    </nav>
  );
}

export default Navbar;
