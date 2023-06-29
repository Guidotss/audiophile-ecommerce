import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/interfaces";

interface RelatedProductsProps {
  product: Product
}

export const RelatedProducts: FC<RelatedProductsProps> = ({ product }) => {
  return (
    <>
      {product.others.map((product) => (
        <div key={product.slug} className="flex flex-col items-center ">
          <Image
            className="rounded-lg fadeIn"
            src={`${product.image.desktop.split(".")[1]}.jpg`}
            alt={product.name}
            width={300}
            height={300}
          />
          <h4 className="mt-5 text-3xl font-semibold tracking-wide">
            {product.name}
          </h4>
          <Link
            href={`/${product.slug}`}
            className="mt-10 bg-cinnamon px-5 py-3 text-white hover:bg-peach transition-colors"
          >
            SEE PRODUCT
          </Link>
        </div>
      ))}
    </>
  );
};
