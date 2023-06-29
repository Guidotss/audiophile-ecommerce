import {
  AboutUs,
  ProductBannerLeft,
  ProductBannerRight,
  ProductCard,
} from "@/components";
import { Product } from "@/interfaces";

const getProductByCategory = async (category: string): Promise<Product[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product/category/${category}`,
    {cache: "no-cache"}
  );
  const data = await response.json();
  return data.products;
};

type Props = {
  params: { category: string };
};

export default async function CategoryPage({ params }: Props) {
  const { category } = params;
  const products = await getProductByCategory(category);
  

  return (
    <main>
      <section className="w-full flex bg-black justify-center items-center p-24">
        <h1 className="text-white  text-6xl font-semibold tracking-wider">
          {category.toUpperCase()}
        </h1>
      </section>
      <section className="flex flex-col justify-center items-center mt-28 gap-40">
        {products?.reverse()?.map((product, index) => {
          const productImage = product.image.desktop.split(".")[1];
          if (index % 2 === 0) {
            return (
              <ProductBannerLeft
                key={product.id}
                title={product.name}
                description={product.description}
                slug={product.slug}
                image={`${productImage}.jpg`}
              />
            );
          }
          return (
            <ProductBannerRight
              key={product.id}
              title={product.name}
              description={product.description}
              image={`${productImage}.jpg`}
              slug={product.slug}
            />
          );
        })}
      </section>
      <section className="bg-white p-20 flex items-center justify-center w-full gap-36 mt-28">
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
