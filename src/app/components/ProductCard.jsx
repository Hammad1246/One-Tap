"use client"
import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/cartContext";
import Image from "next/image";




const ProductCard = ({ title, description, price, originalPrice, image, productId }) => {

  const {dispatch} = useCart()
  const [isFavorited, setIsFavorited] = useState(false);


    const product = {
    id: productId,
    title: title,
    description: description,
    price: price,
    originalPrice: originalPrice,
    image: image || "/images/physicalCard2.jpg",
    // thumbnails: ["/images/physicalCard1.jpg", "/images/qr1.png", "/images/nfc1.jpg"],
  };

    
  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    dispatch({ type: "TOGGLE_CART" });
  };



  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      {/* Header with title and heart */}
      <div className="flex items-center justify-between p-4 pb-2">
        <div>
          <h3 className="!font-bold text-gray-900">{title}</h3>
          <p className="text-xs text-[#515154CC] !font-semibold">{description}</p>
        </div>
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
      </div>

      {/* Product Image */}
       <Link href={`/shop/${productId}`}>
      <div className="px-4 pb-4">
        <div className="w-full h-48 bg-white rounded-lg">
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="w-full h-full object-cover rounded-lg"
           />
        </div>
      </div>
      </Link>

      {/* Price and Add to Cart */}
      <div className="flex items-center justify-between p-4 pt-0">
        <div className="flex flex-col items-start space-x-2">
          <span className="text-lg  text-gray-900 !font-bold">
            £{price}
             <span className="text-xs text-gray-500 !font-semibold"> /monthly</span>
          </span>
         
          {originalPrice && (
            <span className="text-sm text-[#515154CC] line-through !font-bold">
              £{originalPrice}
            </span>
          )}
        </div>

        <button
        onClick={addToCart}
         className="px-4 py-3 text-white text-sm font-medium bg-[#007BFF] rounded-lg hover:bg-blue-600 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
