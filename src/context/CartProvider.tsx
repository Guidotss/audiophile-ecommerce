"use client";
import { FC, useEffect, useReducer } from "react";
import { CartContext, cartReducer } from ".";
import { CartItem } from "@/interfaces";
import { couldStartTrivia } from "typescript";

interface CartProviderProps {
  children: React.ReactNode;
}

export interface CartState {
  cart: CartItem[];
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
};

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    
    if (cart) {
      dispatch({
        type: "[CART] - Load products",
        payload: JSON.parse(cart),
      });
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addItem = (item: CartItem) => {
    dispatch({ type: "[CART] - Add product", payload: item });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  };

  return (
    <CartContext.Provider
      value={{
        ...state,

        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
