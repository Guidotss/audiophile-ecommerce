"use client"
import { CartItem } from "@/interfaces";
import { createContext } from "react";

interface CartContext {
    cart: CartItem[] 
    addItem: (item: CartItem) => void;
    deleteCart: () => void; 
}

export const CartContext = createContext({} as CartContext); 