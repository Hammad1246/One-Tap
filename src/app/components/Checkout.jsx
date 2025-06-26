"use client";
import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { FiArrowLeft } from "react-icons/fi";
import { useCart } from "../context/cartContext";
import { useRouter } from "next/navigation";
import { GoTag } from "react-icons/go";

const CheckoutPage = () => {
  const { state, dispatch } = useCart();
  const items = state.items;
  const router = useRouter();

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      dispatch({ type: "REMOVE_ITEM", payload: id });
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    }
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 7;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen  bg-gray-100 p-6 pt-32">
      <h1 className="text-2xl font-bold mb-6 text-black text-left w-full  ">Your cart</h1>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center bg-white p-10 rounded-xl shadow mt-10">
          <p className="text-xl font-semibold mb-4 text-gray-700">
            Your cart is empty.
          </p>
          <button
            onClick={() => router.push("/shop")}
            className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <FiArrowLeft
              className="transition-transform group-hover:-translate-x-1"
              size={20}
            />
            <span>Back to Shop</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="md:col-span-2 bg-white p-4 rounded-xl shadow">
            {items.map((item) => (
              <div key={item.id} className="flex items-center py-4 border-b">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded bg-red-200"
                />
                <div className="ml-4 flex-1 text-black">
                  <h2 className="!font-semibold">{item.title}</h2>
                  <p className="font-bold mt-5">£{item.price}</p>
                </div>
                <div className="flex items-center gap-2 text-black">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1 hover:bg-red-100 rounded-full transition-colors ml-2"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-white text-black p-6 rounded-xl shadow space-y-4">
            <h2 className="text-lg !font-semibold">Order Summary</h2>
            <div className="flex justify-between">
              <span className="text-[#1B1919]">Subtotal</span>
              <span className="!font-semibold">£{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#1B1919]">Discount (-20%)</span>
              <span className="text-red-500 !font-semibold">
                -£{discount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#1B1919]">Delivery Fee</span>
              <span className="!font-semibold">£{deliveryFee}</span>
            </div>
            <hr />
            <div className="flex justify-between text-lg font-bold">
              <span className="text-[#1B1919]">Total</span>
              <span className="!font-semibold">${total.toFixed(0)}</span>
            </div>

            <div className="flex items-center justify-evenly gap-2 w-full">
              <div className="relative flex rounded-xl justify-center items-center flex-1 bg-[#F7F7F7]">
              <GoTag className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#515154CC]" />
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full  rounded-lg p-2  pl-8"
              />
              
            </div>

            <button className=" px-4 h-10 bg-[#007BFF] text-white rounded-lg cursor-pointer">
                Apply
              </button>
            </div>

            <button className="w-full bg-[#007BFF] text-white py-3 rounded-lg font-semibold hover:bg-blue-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
