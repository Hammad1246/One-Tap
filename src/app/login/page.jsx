"use client";
import { useState } from "react";
import { FiUser, FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
   const [rememberMe, setRememberMe] = useState(false);
   const [userData, setUserData] = useState({
    email: "",
    password: ""
   });
  const router = useRouter();

  const handelSubmit = (e)=>{
    e.preventDefault();
    router.push("/");

  }

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen bg-[#007BFF] "
     style={{
    backgroundImage: "url('/images/Star.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
    >
      <div className="flex justify-center items-center flex-col md:w-[100%] w-[90%]  gap-10 ">
        <div className="text-center text-white ">
          <h1 className="text-4xl !font-bold mb-2">Log In</h1>
          <p className="text-lg">Enter your email and password to log in</p>
        </div>

        <div className="bg-[#E8E8E8] rounded-xl shadow-md w-full max-w-lg p-6">
          <form onSubmit={handelSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Demo@gmail.com"
              className="w-full px-4 py-3 rounded-md bg-[#F7F7F7]  text-black outline-none"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-10 py-3 rounded-md bg-[#F7F7F7]  text-black outline-none"
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-[#515154]">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="accent-[#007BFF] rounded"
                />
                Remember me
              </label>
              <Link href="/forgot-password">
                <span className="text-sm text-[#515154] hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-[#007BFF] text-white font-semibold hover:opacity-90 cursor-pointer"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
