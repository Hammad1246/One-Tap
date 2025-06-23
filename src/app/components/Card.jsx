// import React from "react";

// function Card({ title, description, image }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 flex justify-evenly items-center flex-col h-full w-full">
//       <div className="flex justify-center items-center">
//        <div className="w-40 h-40 bg-[#007BFF] rounded-full flex items-center justify-center "  style={{
//             boxShadow: "inset 0 0 16.5px 0 #00000040"
//           }}>
//           <img src={image}  className="w-full h-full rounded-full" />
//         </div>
//       </div>
//      <div>
//          <h3 className="text-xl font-semibold mt-4 text-center text-[#1B1919]">{title}</h3>
//       <p className="text-[#515154] mt-2 text-center" >{description}</p>
//      </div>
//     </div>
//   );
// }

// export default Card;


import React from "react";

function Card({ title, description, image }) {
  return (
    <div className="bg-[#F7F7F7] shadow-md rounded-lg p-4 md:p-6 flex flex-col justify-between items-center h-full w-full">
      <div className="flex justify-center items-center flex-1">
        <div 
          className="w-32 h-32 md:w-40 md:h-40 bg-[#007BFF] rounded-full flex items-center justify-center"
          style={{
            boxShadow: "inset 0 0 16.5px 0 #00000040"
          }}
        >
          <img 
            src={image}  
            className="w-full h-full rounded-full object-cover" 
            alt={title}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center mt-4 md:mt-6">
        <h3 className="text-lg md:text-xl font-semibold text-center text-[#1B1919]">
          {title}
        </h3>
        <p className="text-[#515154] mt-2 text-center text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;