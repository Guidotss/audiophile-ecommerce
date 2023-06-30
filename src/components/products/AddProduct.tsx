"use client";
import { CartContext } from "@/context";
import { Product } from "@/interfaces";
import { FC, useContext, useState } from "react";

interface AddProductProps {
  product: Product;
}

export const AddProduct: FC<AddProductProps> = ({ product }) => {
  const [counter, setCounter] = useState(1);
  const { addItem } = useContext(CartContext);


  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
    return;
  };

  const addToCart = () => {
    const cartItem = {
      ...product,
      quantity: counter,
    };
    addItem(cartItem);
  }

  return (
    <div className="flex mt-5">
      <button className="bg-snow_white px-5 py-4" onClick={decreaseCounter}>
        -
      </button>
      <span className="bg-snow_white px-6 py-4 w-14">{counter}</span>
      <button className="bg-snow_white px-5 py-4" onClick={increaseCounter}>
        +
      </button>
      <button className="bg-cinnamon ml-10 px-10 text-white hover:bg-peach transition-colors" onClick={addToCart}>
        ADD TO CART
      </button>
    </div>
  );
};
