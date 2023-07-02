"use client"
import { CartItem } from "@/interfaces";
import { createContext } from "react";

interface CartContext {
    cart: CartItem[] 
    totalPrice: number; 
    addItem: (item: CartItem) => void;
    deleteCart: () => void; 
    increaseQuantity: (item:CartItem, quantity: number) => void;
}

export const CartContext = createContext({} as CartContext); 