"use client";
import { useState } from "react";
import { FiUser, FiEye, FiEyeOff } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex  lg:flex-row">
      <div className="w-full lg:w-1/2 bg-[#007BFF] ">
        <div
          className="flex flex-col items-center justify-center w-full h-screen  p-6"
          style={{
            backgroundImage: "url('/images/Star.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl font-bold mb-2">Sign Up</h1>
            <p className="text-lg">
              Already have an account?
              <Link href={"/login"}>
                <span className="underline pl-2 cursor-pointer">Log in</span>
              </Link>
            </p>
          </div>

          <div className="bg-[#E8E8E8] rounded-xl shadow-md w-full max-w-lg p-6">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Sam Thz"
                className="w-full px-4 py-3 rounded-md bg-[#F7F7F7] text-black outline-none"
                required
              />

              <input
                type="email"
                placeholder="Demo@gmail.com"
                className="w-full px-4 py-3 rounded-md bg-[#F7F7F7] text-black outline-none"
                required
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-10 py-3 rounded-md bg-[#F7F7F7] text-black outline-none"
                  required
                />
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#515154]" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#515154] cursor-pointer"
                >
                  {showPassword ? <FiEyeOff className="p-1 text-2xl" /> : <FiEye className="p-1 text-2xl" />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-md bg-[#007BFF] text-white font-semibold hover:opacity-90"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-screen bg-white md:flex items-center justify-center hidden lg:flex">
        <Image
          src="/images/signupImage.png"
          alt="Signup Illustration"
          className="w-[507px] h-[423px] object-contain"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default Signup;
