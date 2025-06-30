"use client"
import FAQItem from "../components/FAQItem";
import Image from "next/image";

const FAQ = () => {
  const faqs = [
    { question: "Question 1", answer: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Malesuada Lacus Ex, Sit Amet Blandit Leo Lobortis Eget." },
    { question: "Question 2", answer: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Malesuada Lacus Ex, Sit Amet Blandit Leo Lobortis Eget." },
    {
      question: "Question 3",
      answer:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Malesuada Lacus Ex, Sit Amet Blandit Leo Lobortis Eget.",
    },
  ];

  return (
    <div className="flex md:min-h-screen h-auto w-screen flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 md:px-16  bg-[#F7F7F7] text-black pt-36 md:pt-10">
        
      <div className="md:w-1/2 w-full">
        <p className="text-base mb-4 text-center md:text-left">
          Everything You Need To Know
        </p>
        <div className="space-y-4 ">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} defaultOpen={index === faqs.length - 1} />
          ))}
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/images/FAQs.png"
          alt="FAQ Illustration"
          className="w-[70%] h-[70%]"
          width={500}
  height={500}
        />
      </div>
    </div>
  );
};

export default FAQ;
