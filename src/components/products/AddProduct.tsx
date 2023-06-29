"use client"
import { useState } from "react";

export const AddProduct = () => {

    const [counter, setCounter] = useState(1);

    const increaseCounter = () => {
        setCounter(counter + 1);
    }

    const decreaseCounter = () => {
        if (counter > 1){
            setCounter(counter - 1);
        }
        return;
    }

  return (
    <div className="flex mt-5">
      <button className="bg-snow_white px-5 py-4" onClick={decreaseCounter}>-</button>
      <span className="bg-snow_white px-6 py-4 w-14">{counter}</span>
      <button className="bg-snow_white px-5 py-4" onClick={increaseCounter}>+</button>
      <button className="bg-cinnamon ml-10 px-10 text-white hover:bg-peach transition-colors">
        ADD TO CART
      </button>
    </div>
  );
};
