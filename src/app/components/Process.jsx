// import React from "react";
// import Image from "next/image";

// function Process() {
//   const processSteps = [
//     {
//       stepOrder: 1,
//       stepImage: (
//         <Image
//           src="/images/profile.png"
//           alt="Register"
//           width={500}
//           height={500}
//           className="w-16 h-16 object-cover"
//         />
//       ),
//       stepHeader: "Register",
//       stepParagraph:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
//     },
//     {
//       stepOrder: 2,
//       stepImage: (
//         <Image
//           src="/images/setting.png"
//           alt="Complete Setup"
//           width={500}
//           height={500}
//           className="w-16 h-16 object-cover"
//         />
//       ),
//       stepHeader: "Complete Setup",
//       stepParagraph:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
//     },
//     {
//       stepOrder: 3,
//       stepImage: (
//         <Image
//           src="/images/flash.png"
//           alt="Utilize App"
//           width={500}
//           height={500}
//           className="w-16 h-16 object-cover"
//         />
//       ),
//       stepHeader: "Utilize App",
//       stepParagraph:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
//     },
//   ];

//   return (
//     <section className="h-screen w-[80vw] mx-auto flex flex-col items-center justify-center text-[#1B1919]">
//       <div className="h-auto w-[45%] text-center">
//         <h2 className="text-4xl mb-4">Learn More About Process</h2>
//         <p className="text-sm text-[#515154] w-[90%] mx-auto leading-7">
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
//           commodo ligula eget dolor. Aenean massa.
//         </p>
//       </div>
//       <div className="h-auto w-full flex items-center justify-between mt-10">
//         <div className="flex flex-col items-center w-full relative">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
//             {processSteps.map((step, index) => (
//               <div key={step.stepOrder} className="text-center group relative">
//                 {/* Dashed Curved Line */}
//                 {index === 0  &&  (
//                   <div className="absolute top-1/2 pt-5 left-2/3 transform translate-x-10 -translate-y-10 md:-translate-y-20 w-40">
//                     <Image
//                       src="/images/curve-left.png"
//                       alt="Dashed Line"
//                       width={200}
//                       height={100}
//                       className="w-full h-full"
//                     />
//                   </div>
//                 )}

//                 {index === 1  &&  (
//                   <div className="absolute top-1/2 pt-5 left-2/3 transform translate-x-10 -translate-y-10 md:-translate-y-20 w-40">
//                     <Image
//                       src="/images/curve-left.png"
//                       alt="Dashed Line"
//                       width={200}
//                       height={100}
//                       className="w-full h-full"
//                     />
//                   </div>
//                 )}

//                 {/* Step Number */}
//                 <div className="text-left pl-20">
//                   <span
//                     className={`flex items-center justify-center w-10 h-10 text-lg font-bold rounded-full
//                       ${index === 0 ? "bg-white" : "bg-transparent"}`}
//                   >
//                     {step.stepOrder}
//                   </span>
//                 </div>

//                 {/* Icon Container */}
//                 <div className="relative mb-8">
//                  <div
//   className={`w-32 h-32 rounded-full shadow-lg flex items-center justify-center mx-auto group-hover:shadow-xl transition-shadow duration-300
//     ${
//       index === 1 || index === 2
//         ? "bg-transparent border-2 border-dashed border-[#515154]"
//         : "bg-white"
//     }`
//   }
// >
//   {step.stepImage}
// </div>
//                 </div>

//                 {/* Content */}
//                 <div className="space-y-4">
//                   <h3 className="text-xl font-semibold text-gray-900  transition-colors duration-300">
//                     {step.stepHeader}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
//                     {step.stepParagraph}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Process;


import React from "react";
import Image from "next/image";

function Process() {
  const processSteps = [
    {
      stepOrder: 1,
      stepImage: (
        <Image
          src="/images/profile.png"
          alt="Register"
          width={500}
          height={500}
          className="w-12 md:w-16 h-12 md:h-16 object-cover"
        />
      ),
      stepHeader: "Register",
      stepParagraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
    {
      stepOrder: 2,
      stepImage: (
        <Image
          src="/images/setting.png"
          alt="Complete Setup"
          width={500}
          height={500}
          className="w-12 md:w-16 h-12 md:h-16 object-cover"
        />
      ),
      stepHeader: "Complete Setup",
      stepParagraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
    {
      stepOrder: 3,
      stepImage: (
        <Image
          src="/images/flash.png"
          alt="Utilize App"
          width={500}
          height={500}
          className="w-12 md:w-16 h-12 md:h-16 object-cover"
        />
      ),
      stepHeader: "Utilize App",
      stepParagraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
  ];

  return (
    <section className="min-h-screen  w-[90vw] md:w-[80vw] mx-auto flex flex-col items-center justify-center text-[#1B1919]">
      <div className="h-auto w-full md:w-[80%] lg:w-[50%] text-center px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl mb-3 md:mb-4">Learn More About Process</h2>
        <p className="text-sm text-[#515154] w-full md:w-[90%] mx-auto leading-6 md:leading-7">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
      <div className="h-auto w-full flex items-center justify-between mt-8 md:mt-10 px-4 md:px-0">
        <div className="flex flex-col items-center w-full relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <div key={step.stepOrder} className="text-center group relative">
                {/* Dashed Curved Line - Hidden on mobile */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 pt-5 left-2/3 transform translate-x-10 -translate-y-10 md:-translate-y-20 w-40">
                    <Image
                      src="/images/curve-left.png"
                      alt="Dashed Line"
                      width={200}
                      height={100}
                      className="w-full h-full"
                    />
                  </div>
                )}

                {/* Step Number */}
                <div className="text-left pl-8 md:pl-20">
                  <span
                    className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-base md:text-lg font-bold rounded-full
                      ${index === 0 ? "bg-white" : "bg-transparent"}`}
                  >
                    {step.stepOrder}
                  </span>
                </div>

                {/* Icon Container */}
                <div className="relative mb-6 md:mb-8">
                  <div
                    className={`w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg flex items-center justify-center mx-auto group-hover:shadow-xl transition-shadow duration-300
                      ${
                        index === 1 || index === 2
                          ? "bg-transparent border-2 border-dashed border-[#515154]"
                          : "bg-white"
                      }`}
                  >
                    {step.stepImage}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 transition-colors duration-300">
                    {step.stepHeader}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs mx-auto text-sm md:text-base">
                    {step.stepParagraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;