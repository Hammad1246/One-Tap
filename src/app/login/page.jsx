"use client";
import { useState } from "react";
import { FiUser, FiEye, FiEyeOff } from "react-icons/fi";
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-[#007BFF] ">
      <div className="flex justify-center items-center flex-col w-[100%]  gap-10 ">
        <div className="text-center text-white ">
          <h1 className="text-4xl !font-bold mb-2">Log In</h1>
          <p className="text-sm">Enter your email and password to log in</p>
        </div>

        <div className="bg-white rounded-xl shadow-md w-full max-w-lg p-6">
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Demo@gmail.com"
              className="w-full px-4 py-3 rounded-md bg-[#F1F1F1] text-black outline-none"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-10 py-3 rounded-md bg-[#F1F1F1] text-black outline-none"
                required
              />
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-[#007BFF] text-white font-semibold hover:opacity-90"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
