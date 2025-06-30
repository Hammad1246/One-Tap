"use client";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    router.push("/");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen min-w-screen bg-[#007BFF]"
      style={{
        backgroundImage: "url('/images/Star.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center items-center flex-col md:w-[100%] w-[90%] gap-10">
        <div className="text-center text-white">
          <h1 className="text-4xl !font-bold mb-2">Forgot Password</h1>
          <p className="text-lg">
            Enter your email address to reset your password
          </p>
        </div>

        <div className="bg-[#E8E8E8] rounded-xl shadow-md w-full max-w-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Demo@gmail.com"
                className="w-full px-10 py-3 rounded-md bg-[#F7F7F7] text-black outline-none"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#515154]" />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-[#007BFF] text-white font-semibold hover:opacity-90 cursor-pointer"
            >
              Reset Password
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link href="/login">
              <span className="text-sm text-[#515154] hover:underline cursor-pointer">
                Back to Log In
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
