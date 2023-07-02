"use client";
import { FC, useEffect, useReducer } from "react";
import { CartContext, cartReducer } from ".";
import { CartItem } from "@/interfaces";


interface CartProviderProps {
  children: React.ReactNode;
}

export interface CartState {
  cart: CartItem[];
  totalPrice: number;
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
  totalPrice: 0,
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
    const totalPrice = state.cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    dispatch({ type: "[CART] - Update total price", payload: totalPrice });

  }, [state.cart]);

  const addItem = (item: CartItem) => {
    dispatch({ type: "[CART] - Add product", payload: item });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  };

  const deleteCart = () => { 
    const cart = localStorage.getItem("cart");
    if (cart) {
      dispatch({ type: "[CART] - Delete cart" });
      localStorage.removeItem("cart");
    }
  }

  return (
    <CartContext.Provider
      value={{
        ...state,

        addItem,
        deleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
