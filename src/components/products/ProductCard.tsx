import Image from "next/image";
import { ArrowRightIcon } from "../ui";
import { FC } from "react";

interface ProductCardProps {
    productName: string;
    image: string;
}

export const ProductCard:FC<ProductCardProps> = ({ productName, image }) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <Image
            className="rounded-lg z-10"
            src={`/${image}`}
            alt="Product Image"
            width={260}
            height={220}
            loading="lazy"
        />
        <div className="bg-snow_white absolute 2xl:h-[210px] mt-36 rounded-lg 2xl:w-[370px]">
            <div className="flex flex-col items-center justify-center mt-20">
                <h2 className="text-black font-semibold text-lg tracking-widest mt-10">{ productName }</h2>
                <div className="flex justify-center items-center gap-1 cursor-pointer">
                    <button className="text-sm font-semibold text-gray-500 hover:text-cinnamon transition-colors tracking-wider">
                        SHOP
                    </button>
                    <ArrowRightIcon/>
                </div>
            </div>

        </div>
    </div>
  )
}