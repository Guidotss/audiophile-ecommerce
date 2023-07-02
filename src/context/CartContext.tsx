"use client"
import { CartItem } from "@/interfaces";
import { createContext } from "react";

interface CartContext {
    cart: CartItem[] 
    totalPrice: number; 
    addItem: (item: CartItem) => void;
    deleteCart: () => void; 
}

export const CartContext = createContext({} as CartContext); 