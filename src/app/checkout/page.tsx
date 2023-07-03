"use client";
import { useContext } from "react";
import { CartContext } from "@/context";

export default function CheckoutPage() {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <main className="flex p-10">
        <div> 
            hola
        </div>
    </main>
  )
}
