"use client";

import { useState } from "react";
import Sidebar from "../components/Slidebar";
import SearchBar from "../components/SearchBar";
import ProductSection from "../components/ProductSection";

const Index = () => {
  // UI state for filters
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceRange, setPriceRange] = useState(150);
  const [search, setSearch] = useState("");

  // Applied filter state
  const [appliedTypes, setAppliedTypes] = useState([]);
  const [appliedPrice, setAppliedPrice] = useState(150);

  const typeAProducts = [
    { id: "1", title: "Card 1", description: "physical", price: 37, image : "/images/physicalCard1.jpg" },
    { id: "2", title: "Card 2", description: "QR Card", price: 37, originalPrice: 60, image : "/images/qr1.png" },
    { id: "3", title: "Card 3", description: "NFT", price: 30, image : "/images/nfc1.jpg" },
  ];

  const typeBProducts = [
    { id: "4", title: "Card 1", description: "physical", price: 50, image : "/images/physicalCard2.jpg" },
    { id: "5", title: "Card 2", description: "QR Card", price: 37, originalPrice: 60, image : "/images/qr2.jpg" },
    { id: "6", title: "Card 3", description: "NFT", price: 99, image : "/images/nfc2.jpg" },
  ];

  // Filtering logic (by description and price)
   const filterProducts = (products) =>
    products.filter(
      (product) =>
        (appliedTypes.length === 0 || appliedTypes.includes(product.description)) &&
        product.price <= appliedPrice &&
        (search === "" ||
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase()))
    );

  // Handler for Apply Filters button
  const handleApplyFilters = () => {
    setAppliedTypes(selectedTypes);
    setAppliedPrice(priceRange);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Sidebar
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        onApplyFilters={handleApplyFilters}
      />
      <main className="ml-64 p-6 pt-20">
        <div className="max-w-6xl mx-auto pt-20">
          <SearchBar  search={search} setSearch={setSearch} />
          <ProductSection title="Type A Cards" products={filterProducts(typeAProducts)} />
          <ProductSection title="Type B Cards" products={filterProducts(typeBProducts)} />
        </div>
      </main>
    </div>
  );
};

export default Index;