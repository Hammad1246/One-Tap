"use client";
import React, { useState } from "react";
import { useCart } from "../context/cartContext";


const productCards = [
  {
    id: "1",
    title: "Card A",
    description: "Description for Card A.",
    price: 37,
    originalPrice: 60,
    image: "/images/physicalCard2.jpg",
    thumbnails: ["/images/physicalCard1.jpg", "/images/qr1.png", "/images/nfc1.jpg"],
  },
  {
    id: "2",
    title: "Card B",
    description: "Description for Card B.",
    price: 45,
    originalPrice: 70,
    image: "/images/physicalCard1.jpg",
    thumbnails: ["/images/physicalCard2.jpg", "/images/qr1.png", "/images/nfc1.jpg"],
  },
  {
    id: "3",
    title: "Card C",
    description: "Description for Card C.",
    price: 55,
    originalPrice: 80,
    image: "/images/qr1.png",
    thumbnails: ["/images/physicalCard2.jpg", "/images/physicalCard1.jpg", "/images/nfc1.jpg"],
  },
]

const ProductDetailCard = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
   const { dispatch } = useCart();

   const product = productCards[selectedIndex];


  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    dispatch({ type: "TOGGLE_CART" });
  };



  return (
    <div className="h-full w-full ">
      <div className=" w-[90%] md:mt-32 mt-24 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image Section */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="relative mb-6">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-72 object-cover rounded-lg bg-blue-500"
              />
            </div>
            <div className="flex justify-between space-x-6 ">
              {productCards.map((card, index) => (
                <div
                  key={index}
                  className={`flex-1 h-20 border-2 rounded-xl overflow-hidden cursor-pointer ${
                    selectedIndex === index ? "border-blue-500" : "border-white"
                  }`}
                  onClick={() => setSelectedIndex(index)}
                >
                  <img
                    src={card.image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  {product.title}
                </h2>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <button
                    onClick={() => setIsFavorited(!isFavorited)}
                    className="p-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-5 h-5 transition-colors duration-200 ${
                        isFavorited
                          ? "fill-[#811F1F] text-[#811F1F]"
                          : "text-gray-400 hover:text-[#811F1F]"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                  </button>
                </button>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start space-x-2">
                <span className="text-2xl  text-gray-900 !font-bold">
                  £{product.price}
                  <span className="text-xs text-gray-500 !font-semibold"> /monthly</span>
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#515154CC] line-through !font-bold">
                    £{product.originalPrice}
                  </span>
                )}
              </div>
              <button 
                onClick={addToCart}
                className="bg-[#007BFF] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
