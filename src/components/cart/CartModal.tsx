"use client"
import { useContext } from "react";
import { CartContext } from "@/context";
import Link from "next/link";

export const CartModal = () => {

    const {} = useContext(CartContext);

  return (
    <div className="flex flex-col p-7 bg-white text-black absolute right-52 mt-3 z-10 rounded-md 2xl:w-[350px] shadow-lg"> 
        <div className="flex justify-between w-full gap-10">
            <h4 className="text-lg font-bold">CART (3)</h4>
            <button className="text-sm underline text-carbon_black opacity-[0.8]">Remove all</button>
        </div>
        <ul>
            <li>
                1
            </li>
            <li>
                2
            </li>
            <li>
                3
            </li>
            <li>
                4
            </li>
            <li>
                4
            </li>
            <li>
                4
            </li>
            <li>
                4
            </li>
            <li>
                4
            </li>
        </ul>
        <div className="flex justify-between mt-10">
            <h4 className="text-carbon_blac text-lg  font-semibold">TOTAL</h4>
            <h4 className="font-bold text-lg">$ 5,000</h4>
        </div>
        <Link 
            className="bg-cinnamon text-white py-3 mt-10 px-14 text-center hover:bg-peach transition-colors"
            href="/checkout"
        >
            CHECKOUT
    </Link>
    </div>  
)
}