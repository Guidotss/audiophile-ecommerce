import { AboutUs, ProductBannerLeft, ProductCard } from "@/components";

export default function EarPhonesPage() {
  return (
    <main>
      <section className="w-full flex bg-black justify-center items-center p-24">
        <h1 className="text-white  text-6xl font-semibold tracking-wider">
          EARPHONES
        </h1>
      </section>
      <section className="flex justify-center items-center mt-28">
        <ProductBannerLeft
          title="YX1 WIRELESS EARPHONES"
          description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          image="/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
        />
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
      <AboutUs/>
    </main>
  );
}
