import {
  AboutUs,
  AddProduct,
  ImageGallery,
  ProductCard,
  RelatedProducts,
} from "@/components";
import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

const getProductBySlug = async (slug: string): Promise<Product> => {
  const response = await fetch(`${process.env.API_URL}/product/slug/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const product = await response.json();
  return product;
};

type Props = {
  params: { slug: string };
};

export default async function ProductPage({ params }: Props) {
  const product = await getProductBySlug(params.slug);
  const productImage = product.image?.desktop?.split(".")[1];
  const productDescription = product?.features?.split("\n");  

  return (
    <main className="py-24">
      <div className="flex 2xl:w-1/2 items-center 2xl:justify-center ml-28 2xl:-ml-4 mb-16">
        <Link
          href="/"
          className="text-carbon_black opacity-[0.6] font-semibold"
        >
          Go back
        </Link>
      </div>
      <section className="flex justify-center items-center gap-10">
        <Image
          className="rounded-lg fadeIn"
          src={`${productImage}.jpg`}
          alt={product.name}
          width={500}
          height={500}
        />
        <article className="w-[520px]">
          <h4 className="text-cinnamon tracking-[10px]">NEW PRODUCT</h4>
          <h1 className="text-carbon_black text-5xl font-semibold tracking-widest">
            {product.name.toUpperCase()}
          </h1>
          <p className="mt-10 w-[470px] text-carbon_black opacity-[0.6] font-semibold">
            {product.description}
          </p>
          <p className="mt-5 text-xl font-bold">${product.price}</p>
          <AddProduct 
            product={product}
          />
        </article>
      </section>
      <section className="flex justify-between 2xl:px-96 sm:px-20 ml-10 w-full mt-36">
        <article className="w-[700px]">
          <h3 className="text-black tracking-widest flex justify-between text-4xl font-semibold mb-10">
            FEATURES
          </h3>
          <article className="text-carbon_black opacity-[0.6] font-semibold text-start">
            <div className="mb-10">{productDescription[0]}</div>
            <div>{productDescription[2]}</div>
          </article>
        </article>
        <article>
          <h3 className="text-black tracking-widest flex justify-between text-4xl font-semibold mb-10 sm:mr-10 2xl:mr-0">
            IN THE BOX
          </h3>
        </article>
      </section>
      <ImageGallery product={product} />
      <section className="flex flex-col justify-center items-center mt-36">
        <h3 className="text-black tracking-widest flex justify-between text-4xl font-semibold mb-10">
          YOU MAY ALSO LIKE
        </h3>
        <div className="flex justify-center items-center gap-10 flex-wrap mt-10">
          <RelatedProducts product={product} />
        </div>
      </section>
      <section className="bg-white p-20 flex items-center justify-center w-full gap-36 mt-36">
        <ProductCard
          productName="HEADPHONES"
          image="assets/shared/desktop/image-category-thumbnail-headphones.png"
        />
        <ProductCard
          productName="SPEAKERS"
          image="assets/shared/desktop/image-category-thumbnail-speakers.png"
        />
        <ProductCard
          productName="EARPHONES"
          image="assets/shared/desktop/image-category-thumbnail-earphones.png"
        />
      </section>
      <AboutUs />
    </main>
  );
}
