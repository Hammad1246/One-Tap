"use client"
import { FiSearch } from "react-icons/fi";
import Image from "next/image";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex items-center w-[48%] mb-8 rounded-lg">
      {/* Search Input */}
      <div className="flex-1 relative">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#515154] w-5 h-12" />
        <input
          type="text"
          placeholder="Search something here"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="pl-12 pr-4 py-3 w-full h-12 text-[#515154] placeholder:text-[#515154] bg-white rounded-l-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Filter Button */}
      <button className="px-4 py-3 h-12 bg-white rounded-r-lg flex items-center justify-center cursor-pointer">
        <Image
          src="/images/filter.png"
          alt="Filter"
          width={50}
          height={50}
          className="w-5 h-5 "
        />
      </button>
    </div>
  );
};

export default SearchBar;