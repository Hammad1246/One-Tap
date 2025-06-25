"use client";

import Sidebar from "../components/Slidebar";
import SearchBar from "../components/SearchBar";
import ProductSection from "../components/ProductSection";
import Image from "next/image";

const Index = () => {
  const typeAProducts = [
    { id: "1", title: "Card 1", description: "physical", price: 37 },
    {
      id: "2",
      title: "Card 2",
      description: "QR Card",
      price: 37,
      originalPrice: 60,
    },
    { id: "3", title: "Card 3", description: "NFT", price: 37 },
  ];

  const typeBProducts = [
    { id: "4", title: "Card 1", description: "physical", price: 37 },
    {
      id: "5",
      title: "Card 2",
      description: "QR Card",
      price: 37,
      originalPrice: 60,
    },
    { id: "6", title: "Card 3", description: "NFT", price: 37 },
  ];

  return (
    <div className="min-h-screen  bg-[#F7F7F7]">
     
      <Sidebar />
      <main className="ml-64 p-6 pt-20">
        <div className="max-w-6xl mx-auto pt-20">
          <SearchBar />
          <ProductSection title="Type A Cards" products={typeAProducts} />
          <ProductSection title="Type B Cards" products={typeBProducts} />
        </div>
      </main>
    </div>
  );
};

export default Index;
