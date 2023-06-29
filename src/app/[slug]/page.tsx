import { AddProduct } from "@/components";
import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

const getProductBySlug = async (slug: string): Promise<Product> => {
  const response = await fetch("http://localhost:3000/api/product/" + slug, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });
  const product = await response.json();
  return product;
};

type Props = {
  params: { slug: string };
};

export default async function ProductPage({ params }: Props) {
  const product = await getProductBySlug(params.slug);
  const productImage = product.image.desktop.split(".")[1];
  const productDescription = product.features.split("\n");
  console.log(product.gallery["first"]);

  return (
    <main className="py-24">
      <div className="flex 2xl:w-1/2 items-center justify-center -ml-4 mb-16">
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
          <AddProduct />
        </article>
      </section>
      <section className="flex justify-between px-96 ml-10 w-full mt-36">
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
          <h3 className="text-black tracking-widest flex justify-between text-4xl font-semibold mb-10">
            IN THE BOX
          </h3>
        </article>
      </section>
      <section className="flex items-center m-10">
        {Object.keys(product.gallery).map((key: string, index) => {
          if(key === '_id') return; 
          if (key === "first" || key === "second") {
            return ( 
              <div key={index} className="mt-10 flex">
                <Image
                  className="rounded-lg fadeIn"
                  src={`${product.gallery[key].desktop.split(".")[1]}.jpg`}
                  alt={product.name}
                  width={500}
                  height={500}
                />
              </div>
            );
          }
          return (
            <div key={index} className="mt-10">
              <Image
                className="rounded-lg fadeIn"
                src={`${product.gallery[key].desktop.split(".")[1]}.jpg`}
                alt={product.name}
                width={500}
                height={500}
              />
            </div>
          )

        })}
      </section>
    </main>
  );
}
