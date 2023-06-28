import { AboutUs, ProductBannerRight, ProductCard } from "@/components";
import { ProductBannerLeft } from "../../../components/products/ProductBannerLeft";
export default function HeadPhonesPage() {
  return (
    <main>
      <section className="w-full flex bg-black justify-center items-center p-24">
        <h1 className="text-white  text-6xl font-semibold tracking-wider">
          HEADPHONES
        </h1>
      </section>
      <section className="flex justify-center items-center mt-28">
        <ProductBannerLeft
          title="XX99 MARK II HEADPHONES"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound"
          image="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
        />
      </section>
      <section className="flex justify-center items-center mt-28">
        <ProductBannerRight
          title="XX99 MARK I HEADPHONES"
          description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          image="/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
        />
      </section>
      <section className="flex justify-center items-center mt-28">
        <ProductBannerLeft
          title="XX59 HEADPHONES"
          description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          image="/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
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
