"use client";
import ProductDetailCard from "@/app/components/ProductDetailCard";
import ProductSection from "@/app/components/ProductSection";

import Footer from "@/app/components/Footer";
const ProductPage = () => {

      const typeAProducts = [
    { id: "1", title: "Card 1", description: "physical", price: 37 , image : "/images/physicalCard1.jpg" },
    {
      id: "2",
      title: "Card 2",
      description: "QR Card",
      price: 37,
      originalPrice: 60,
      image : "/images/qr1.png"
    },
    { id: "3", title: "Card 3", description: "NFT", price: 37,  image : "/images/nfc1.jpg" },
  ];

 
  return (
    <div className="bg-gray-100 min-h-screen min-w-screen  pt-10">
    <ProductDetailCard/>

    <div className="md:w-[80%] w-[90%] mx-auto mt-16">
        <ProductSection title="Similar Cards" products={typeAProducts} />
    </div>



    <Footer/>
    </div>
  );
};

export default ProductPage;
