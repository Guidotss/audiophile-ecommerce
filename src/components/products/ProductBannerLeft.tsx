import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  image: string;
  slug?: string;

}

export const ProductBannerLeft: FC<Props> = ({
  title,
  description,
  image,
  slug
}) => {

  return (
    <div className="flex gap-16">
      <Image
        className="rounded-md fadeIn -z-10"
        src={image}
        width={500}
        height={500}
        alt="headphones"
        loading="eager"
      />
      <article className="flex flex-col justify-center w-3/4 ">
        <h4 className="font-light text-cinnamon tracking-[10px] mb-5">
          NEW PRODUCT
        </h4>
        <h1 className="font-semibold text-5xl w-1/2 mb-10">{title}</h1>
        <p className="text-carbon_black opacity-[0.8] w-[450px] -z-10">
          {description}
        </p>

        <Link 
          className="bg-cinnamon px-10 py-4 w-[200px] mt-10 text-white hover:bg-peach transition-all"
          href={`/${slug}`}
        >
          SEE PRODUCT
        </Link>
      </article>
    </div>
  );
};
