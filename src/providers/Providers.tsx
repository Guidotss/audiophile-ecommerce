"use client"
import { FC } from "react";
import { CartProvider } from "@/context";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};
