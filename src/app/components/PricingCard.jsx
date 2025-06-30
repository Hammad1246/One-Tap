import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function PricingCard({ plan }) {
  return (
    <div
      className={`relative bg-[#E8E8E8] rounded-2xl shadow-lg p-8  ${
        plan.isBestPlan ? "ring-2 border-3 border-[#007BFF] md:scale-110 scale-84" : "scale-84 md:scale-100"
      }`}
    >
      {plan.isBestPlan && (
        <div className="absolute -top-12.5 left-1/2 -translate-x-1/2 w-4/5">
          <div className="mx-auto rounded-t-2xl border-3 border-[#007BFF] bg-gray-100 text-[#007BFF] font-bold text-xl text-center py-2">
            Best Deal !
          </div>
        </div>
      )}

      <div className="text-left mb-8 border-b-1 border-[#515154] pb-5">
        <h3 className="text-xl font-semibold text-[#007BFF] mb-4">
          {plan.name}
        </h3>
        <div className="flex items-baseline justify-left mb-4">
          <span className="text-6xl !font-extrabold text-gray-900">
            £{plan.price}
          </span>
          <span className="text-[#515154] !font-bold ml-2">
            /{plan.pricePeriod}
          </span>
        </div>
        <p className="text-[#515154] text-sm">{plan.description}</p>
      </div>

      <div className="mb-8">
        <ul className="space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div
                className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                  feature.isActive ? "text-[#007BFF]" : "text-[#515154]"
                }`}
              >
                {feature.isActive ? (
                  <IoMdCheckmarkCircleOutline className="w-6 h-6 " />
                ) : (
                  <IoMdCheckmarkCircleOutline className="w-6 h-6" />
                )}
              </div>
              <span
                className={`text-sm ${
                  feature.isActive
                    ? "text-[#515154]"
                    : "text-[#515154] line-through"
                }`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full flex justify-center items-center">
        <button className="w-[120px] bg-[#007BFF] hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
          Buy Plan
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
