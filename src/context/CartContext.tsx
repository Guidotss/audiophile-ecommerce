"use client"
import { Cart } from "@/interfaces";
import { createContext } from "react";

interface CartContext {
    cart: Cart | null; 
}

export const CartContext = createContext({} as CartContext); 