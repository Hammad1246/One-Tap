// import React from 'react';
// import { X, Plus, Minus, Trash2 } from 'lucide-react';

// const CartSidebar = () => {
//   // Dummy cart data for interface demonstration
//   const dummyCart = {
//     isOpen: true,
//     items: [
//       {
//         id: 1,
//         title: "Product 1",
//         image: "https://via.placeholder.com/64",
//         price: 30,
//         quantity: 2,
//       },
//       {
//         id: 2,
//         title: "Product 2",
//         image: "https://via.placeholder.com/64",
//         price: 20,
//         quantity: 1,
//       },
//     ],
//   };

//   const totalPrice = dummyCart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <>
//       {/* Overlay */}
//       {dummyCart.isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity" />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
//           dummyCart.isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div className="flex flex-col h-full">
//           {/* Header */}
//           <div className="flex items-center justify-between p-6 border-b">
//             <h2 className="text-xl font-semibold text-gray-900">Shopping Cart</h2>
//             <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//               <X className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Cart Items */}
//           <div className="flex-1 overflow-y-auto p-6">
//             {dummyCart.items.length === 0 ? (
//               <div className="text-center py-12">
//                 <p className="text-gray-500">Your cart is empty</p>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {dummyCart.items.map((item) => (
//                   <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-16 h-16 object-cover rounded-lg"
//                     />

//                     <div className="flex-1">
//                       <h3 className="font-medium text-gray-900">{item.title}</h3>
//                       <p className="text-blue-600 font-semibold">£{item.price}</p>
//                     </div>

//                     <div className="flex items-center space-x-2">
//                       <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
//                         <Minus className="w-4 h-4" />
//                       </button>

//                       <span className="w-8 text-center font-medium">{item.quantity}</span>

//                       <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
//                         <Plus className="w-4 h-4" />
//                       </button>

//                       <button className="p-1 hover:bg-red-100 rounded-full transition-colors ml-2">
//                         <Trash2 className="w-4 h-4 text-red-500" />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Footer */}
//           {dummyCart.items.length > 0 && (
//             <div className="border-t p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <span className="text-lg font-semibold">Total:</span>
//                 <span className="text-xl font-bold text-blue-600">£{totalPrice.toFixed(2)}</span>
//               </div>

//               <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
//                 Checkout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartSidebar;



// components/CartSidebar.js

"use client";
import React from "react";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "../context/cartContext";

const CartSidebar = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      dispatch({ type: "REMOVE_ITEM", payload: id });
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    }
  };

  const removeItem = id => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {state.isOpen && (
  <div
    className="fixed bg-black inset-0 opacity-30 transition-opacity"
    onClick={() => dispatch({ type: "TOGGLE_CART" })}
  />
)}

      <div
        className={`fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          state.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Shopping Cart</h2>
            <button
              onClick={() => dispatch({ type: "TOGGLE_CART" })}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map(item => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.title}</h3>
                      <p className="text-blue-600 font-semibold">£{item.price}</p>
                    </div>
                    <div className="flex items-center text-black space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
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
            )}
          </div>

          {state.items.length > 0 && (
            <div className="border-t p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-black">Total:</span>
                <span className="text-xl font-bold text-blue-600">£{totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
