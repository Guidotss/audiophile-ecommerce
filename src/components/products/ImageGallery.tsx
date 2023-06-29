import { Product } from "@/interfaces";
import Image from "next/image";
import { FC } from "react";

interface Props {
    product: Product;
}

export const ImageGallery:FC<Props> = ({ product }) => {
  return (
    <section className="flex items-center mt-28 justify-center gap-10 mr-24">
      <div className="flex flex-col gap-3">
        {Object.keys(product.gallery).map((key) => {
          if (key === "first" || key === "second") {
            return (
              <Image
                className="rounded-md fadeIn"
                key={key}
                src={`${product.gallery[key].desktop.split(".")[1]}.jpg`}
                alt="gallery"
                width={400}
                height={400}
              />
            );
          }
        })}
      </div>
      <div>
        <Image
          className="rounded-md fadeIn"
          src={`${product.gallery.third.desktop.split(".")[1]}.jpg`}
          alt="gallery"
          width={550}
          height={550}
        />
      </div>
    </section>
  );
};
