"use client";
import { useState } from "react";
import { FiUser, FiEye, FiEyeOff } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

function Signup() {

    const [showPassword, setShowPassword] = useState(false);

  return (
     <div className="min-h-screen min-w-screen flex items-center justify-center">
     <div className='w-1/2 h-screen bg-[#007BFF]'>
       <div className="flex items-center justify-center h-full w-full bg-[#007BFF] "
          style={{
         backgroundImage: "url('/images/Star.png')",
         backgroundSize: "cover",
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
       }}
         >
           <div className="flex justify-center items-center flex-col w-[100%]  gap-10 ">
             <div className="text-center text-white ">
               <h1 className="text-4xl !font-bold mb-2">Sign Up</h1>
               <p className="text-lg">Already have a account? 
                <Link href={"/login"}>
                <span className=" underline pl-2 ">
                  Log in
                </span>
                </Link>
               </p>
             </div>
     
             <div className="bg-[#E8E8E8] rounded-xl shadow-md w-full max-w-lg p-6">
               <form className="space-y-4">
                <input
                   type="username"
                   placeholder="Sam Thz"
                   className="w-full px-4 py-3 rounded-md bg-[#F7F7F7]  text-black outline-none"
                   required
                 />

                 <input
                   type="email"
                   placeholder="Demo@gmail.com"
                   className="w-full px-4 py-3 rounded-md bg-[#F7F7F7]  text-black outline-none"
                   required
                 />
     
                 <div className="relative">
                   <input
                     type={showPassword ? "text" : "password"}
                     placeholder="Password"
                     className="w-full px-10 py-3 rounded-md bg-[#F7F7F7]  text-black outline-none"
                     required
                   />
                   <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#515154]" />
                   <button
                     type="button"
                     onClick={() => setShowPassword(!showPassword)}
                     className="absolute right-3 top-1/2 -translate-y-1/2 text-[#515154] cursor-pointer"
                   >
                     {showPassword ? <FiEyeOff /> : <FiEye />}
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
     
     </div>

     <div className='w-1/2 h-screen bg-white  flex items-center justify-center'>
       <Image 
       src={"/images/signupImage.png"}
       className="w-[507px] h-[423px]"
       width={500}
       height={500}
       />
     </div>
    </div>
  )
}

export default Signup