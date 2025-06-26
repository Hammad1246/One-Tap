"use client";
import { useState } from "react";

const Sidebar = ({
  selectedTypes,
  setSelectedTypes,
  priceRange,
  setPriceRange,
  onApplyFilters,
}) => {
  const typeOptions = [
    { id: "physical", label: "Physical", count: 10 },
    { id: "QR Card", label: "QR Card", count: 12 },
    { id: "NFT", label: "NFT", count: 16 },
  ];

  const handleTypeChange = (typeId) => {
    if (selectedTypes.includes(typeId)) {
      setSelectedTypes(selectedTypes.filter((id) => id !== typeId));
    } else {
      setSelectedTypes([...selectedTypes, typeId]);
    }
  };

  return (
    <div className="w-64 bg-white rounded-r-2xl h-[82vh] fixed left-0 bottom-0 overflow-hidden">
      <div className="p-6 h-full flex flex-col">
        {/* Type Filter */}
        <div className="mb-20">
          <p className="text-xs text-[#515154CC] mb-4 uppercase tracking-widest">
            TYPE
          </p>
          <div className="space-y-3">
            {typeOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id={option.id}
                  checked={selectedTypes.includes(option.id)}
                  onChange={() => handleTypeChange(option.id)}
                  className="w-4 h-4 border-gray-300 rounded accent-[#007BFF] focus:ring-blue-500 cursor-pointer"
                />
                <label
                  htmlFor={option.id}
                  className="text-sm text-[#515154] !font-bold cursor-pointer flex-1 "
                >
                  {option.label}{" "}
                  <span className="text-[#515154CC] !font-samibold">
                    ({option.count})
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="mb-8">
          <p className="text-xs tracking-widest text-[#515154CC] mb-4 uppercase ">
            PRICE
          </p>
          <div className="space-y-4">
            <input
              type="range"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              max={150}
              step={1}
              className="w-full accent-[#007BFF] "
            />
            <div className="text-sm text-[#515154] !font-semibold ">
              Max. ${priceRange}.00
            </div>
          </div>
        </div>

        {/* Apply Filters Button */}
        <button
          className="w-[70%] mx-auto bg-[#007BFF] text-white text-sm font-medium py-2 rounded-md hover:bg-blue-600 mt-5"
          onClick={onApplyFilters}
        >
          + Apply filters
        </button>
      </div>
    </div>
  );
};

export default Sidebar;