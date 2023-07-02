"use client";
import { useContext } from "react";
import { CartContext } from "@/context";
import Link from "next/link";
import Image from "next/image";

export const CartModal = () => {
  const { cart,totalPrice, deleteCart } = useContext(CartContext);

  const onDeleteCart = () => {
    deleteCart();
  };

  return (
    <div className="flex flex-col p-7 bg-white text-black absolute right-52 mt-3 z-40 rounded-md 2xl:w-[430px] shadow-lg">
      <div className="flex justify-between w-full gap-10">
        <h4 className="text-lg font-bold">CART ({cart.length})</h4>
        <button
          className="text-sm underline text-carbon_black opacity-[0.8]"
          onClick={onDeleteCart}
        >
          Remove all
        </button>
      </div>
      <ul className="mt-5">
        {cart.map((item) => (
          <div key={item.id} className="flex mt-4 gap-2 items-center">
            <div className="flex gap-5 items-center">
              <Image
                className="rounded-lg"
                src={`${item.categoryImage.desktop.split(".")[1]}.jpg`}
                alt={item.name}
                width={80}
                height={80}
              />
              <div className="flex flex-col gap-2 text-sm w-[150px] font-extrabold">
                <h5>{item.slug.split("-").join(" ").toUpperCase()}</h5>{" "}
                <span className="text-carbon_black opacity-[0.6]">
                  $ {item.price}
                </span>
              </div>
            </div>
            <div className="flex bg-snow_white px-5 py-2">
              <button className="px-2 w-[20px] text-start mr-2 text-carbon_black opacity-[0.7]">
                -
              </button>
              <span className="mx-2 font-bold">1</span>
              <button className="px-2 ml-2 text-carbon_black opacity-[0.7]">
                +
              </button>
            </div>
          </div>
        ))}
      </ul>
      <div className="flex justify-between mt-10">
        <h4 className="text-carbon_blac text-lg  font-semibold">TOTAL</h4>
        <h4 className="font-bold text-lg">$ {totalPrice}</h4>
      </div>
      <Link
        className="bg-cinnamon text-white py-3 mt-10 px-14 text-center hover:bg-peach transition-colors"
        href="/checkout"
      >
        CHECKOUT
      </Link>
    </div>
  );
};
