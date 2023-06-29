"use client"
import { FC, useReducer } from "react";
import { CartContext, cartReducer } from "."; 
import { Cart } from "@/interfaces";


interface CartProviderProps {
    children: React.ReactNode;
}

export interface CartState {
    cart: Cart | null;
}

const CART_INITIAL_STATE: CartState = {
    cart: null,
}


export const CartProvider: FC<CartProviderProps> = ({ children }) =>  {
    const [ state, dispatch ] = useReducer(cartReducer,CART_INITIAL_STATE); 

    return (
        <CartContext.Provider value={{
            ...state
        }}>
            { children }
        </CartContext.Provider>
    )
    
}