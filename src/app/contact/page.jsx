import Image from "next/image";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-black bg-[#F7F7F7] p-6">
      <div className="flex gap-10 max-w-5xl w-full mt-28">
        {/* Contact Information Section */}
        <div className="flex-[3] flex flex-col justify-between bg-[#007BFF] text-white rounded-lg p-6">
          <h2 className="text-2xl !font-bold mb-7">Contact Information</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span><IoCallOutline /></span>
              <span>+1012 3456 789</span>
            </li>
            <li className="flex items-center gap-3">
              <span><CiMail/></span>
              <span>contact@onetap.com</span>
            </li>
            <li className="flex items-start gap-3">
              <span><IoLocationOutline/></span>
              <span>
                45 Camden High Street, London, NW1 7JH, United Kingdom
              </span>
            </li>
          </ul>
          <div className="mt-6 flex justify-center">
            <Image
              src="/images/contact.png"
              alt="Contact Illustration"
              width={200}
              height={200}
              className="w-full  h-full"
            />
          </div>
        </div>

        {/* Contact Form Section */}
        <form className="flex-[6] flex justify-between  flex-col  rounded-lg p-6  space-y-6">
          <div className="flex flex-col">
      
            <input
              type="text"
              id="firstName"
              placeholder="First Name:"
              className="p-3  bg-white placeholder:text-[#515154] rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="flex flex-col">
           
            <input
              type="email"
              id="email"
              placeholder="E-mail:"
              className="p-3  bg-white placeholder:text-[#515154] rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="flex flex-col">
           
            <textarea
              id="message"
              placeholder="Message"
              rows="6"
              className="p-3  bg-white placeholder:text-[#515154] rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-[30%] mx-auto bg-[#007BFF] text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
