import React from "react";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { MdArrowDropDown } from "react-icons/md";

function Navbar() {
  return (
    <nav className="flex  absolute top-10 justify-end h-auto w-screen gap-7 text-black ">
      <div className="h-[42px] w-auto px-10  bg-white  rounded-xl ">
        <ul className="flex justify-evenly items-center h-full w-full space-x-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1   px-3 py-2 text-sm h1-custom text-gray-900  ">
                  Shop
                  <MdArrowDropDown
                    aria-hidden="true"
                    className="-mr-1 size-5 text-black"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Account settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Support
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      License
                    </a>
                  </MenuItem>
                  <form action="#" method="POST">
                    <MenuItem>
                      <button
                        type="submit"
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >
                        Sign out
                      </button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </Menu>
          </li>
          <li>
            <Link href="/">FAQ</Link>
          </li>

            <li>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1   px-3 py-2 text-sm h1-custom text-gray-900  ">
                  Contact
                  <MdArrowDropDown
                    aria-hidden="true"
                    className="-mr-1 size-5 text-black"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Account settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Support
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      License
                    </a>
                  </MenuItem>
                  <form action="#" method="POST">
                    <MenuItem>
                      <button
                        type="submit"
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >
                        Sign out
                      </button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </Menu>
          </li>
        </ul>
      </div>

      <div className="h-[42px] w-auto px-3 bg-white rounded-xl  flex justify-between items-center mr-20">
        <Link
          href="#">
          <h6 className="text-[#007BFF] pr-5 ">Upgrade</h6>
        </Link>

        <div className="flex  pl-3 text-sm justify-center items-center ">
            <div className="h-[35px] w-[1px] mr-2 bg-[#1B1919]">
        
            </div>
           <div>
             <p className="text-black">User.OneTapCard@gmail.</p>
            <p className="text-[#515154]">Free plan</p>
           </div>
        </div>

        <div className="h-[32px] w-[32px] bg-[#007BFF] rounded-md ml-5">

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
