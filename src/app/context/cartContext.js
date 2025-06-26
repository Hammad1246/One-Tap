"use client";
import React, { createContext, useReducer, useContext, useEffect } from "react";

const CartContext = createContext();

const initialState = { items: [], isOpen: false };

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) { 
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
        case "REMOVE_ITEM":
            return { ...state, items: state.items.filter(item => item.id !== action.payload) };
        case "UPDATE_QUANTITY":
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };
        case "TOGGLE_CART":
            return { ...state, isOpen: !state.isOpen };
        default:
            return state;
    }
};



export const CartProvider = ({ children }) => {
    // Load from localStorage if available
    const [state, dispatch] = useReducer(cartReducer, initialState, (init) => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("cart");
            return stored ? JSON.parse(stored) : init;
        }
        return init;
    });

    // Save to localStorage whenever state.items changes
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("cart", JSON.stringify(state));
        }
    }, [state]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);