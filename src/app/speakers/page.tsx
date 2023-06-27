import {
  AboutUs,
  ProductBannerLeft,
  ProductBannerRight,
  ProductCard,
} from "@/components";

export default function SpeakersPage() {
  return (
    <main>
      <section className="w-full flex bg-black justify-center items-center p-24">
        <h1 className="text-white  text-6xl font-semibold tracking-wider">
          SPEAKERS
        </h1>
      </section>
      <section className="flex justify-center items-center mt-28">
        <ProductBannerLeft
          title="ZX9 SPEAKER"
          description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          image="/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
        />
      </section>
      <section className="flex justify-center items-center mt-28">
        <ProductBannerRight
          title="ZX7 SPEAKER"
          description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use"
          image="/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"
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
      <AboutUs />
    </main>
  );
}
