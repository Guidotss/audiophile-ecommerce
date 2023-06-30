"use client"
import { useContext } from "react";
import { CartContext } from "@/context";
import Link from "next/link";
import Image from "next/image";

export const CartModal = () => {

    const { cart } = useContext(CartContext);
    console.log(cart);

  return (
    <div className="flex flex-col p-7 bg-white text-black absolute right-52 mt-3 z-40 rounded-md 2xl:w-[400px] shadow-lg"> 
        <div className="flex justify-between w-full gap-10">
            <h4 className="text-lg font-bold">CART (3)</h4>
            <button className="text-sm underline text-carbon_black opacity-[0.8]">Remove all</button>
        </div>
        <ul className="mt-5">
            {cart.map((item) => (
                <div key={item.id} className="flex mt-4 justify-between">
                    <Image
                        className="rounded-lg"
                        src={`${item.categoryImage.desktop.split(".")[1]}.jpg`}
                        alt={item.name}
                        width={70}
                        height={70}
                    />
                    <h5 className="text-sm w-[100px]">{ item.name }</h5>
                </div>
            ))}
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