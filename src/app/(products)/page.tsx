import { AboutUs, PatternCircleIcon, ProductCard } from "@/components";
import HeroHeader from "@/components/ui/HeroHeader";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {


  return (
    <main>
      <HeroHeader />
      <section className="bg-white p-20 flex items-center justify-center w-full gap-36">
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
      <section className="bg-white flex items-center justify-center">
        <div className="flex items-center justify-center bg-cinnamon w-[1190px] 2xl:h-[600px] h-[500px] mb-10 rounded-lg">
          <div className="flex flex-col flex-1">
            <div className="absolute 2xl:left-60 sm:-ml-28 2xl:ml-0 -mt-10">
              <PatternCircleIcon />
            </div>
            <div className="z-10 self-start ml-40 mt-4  2xl:mt-32">
              <Image
                src="/assets/home/desktop/image-speaker-zx9.png"
                width={400}
                height={300}
                alt="speaker"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <article className="2xl:w-1/4 sm:w-[300px] 2xl:mr-24 2xl:-mt-16">
              <h1 className="text-snow_white font-semibold text-6xl mb-5">
                ZX9 SPEAKER
              </h1>
              <p className="text-snow_white font-light opacity-[0.8] mb-10 text-start 2xl:w-[340px]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
            </article>
            <Link 
              className="self-start bg-black text-white px-8 py-4 z-10 hover:bg-carbon_black hover:contrast-50 transition-all tracking-wider"
              href="/zx9-speaker"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <div>
          <Image
            className="rounded-lg"
            src="/assets/home/desktop/image-speaker-zx7.jpg"
            width={1200}
            height={1080}
            alt="speaker"
            loading="lazy"
          />
        </div>
        <div className="absolute 2xl:left-[400px] sm:left-40 2xl:mt-36 mt-24">
          <h1 className="text-5xl font-semibold mb-10">ZX7 SPEAKER</h1>
          <Link 
            className="hover:bg-black font-semibold px-10 py-3 border-2 border-black transition-colors hover:text-white "
            href="/zx7-speaker"
          >
            SEE PRODUCT
          </Link>
        </div>
      </section>
      <section className="flex justify-center gap-10 mt-10 ">
        <Image
          className="rounded-lg"
          src="/assets/home/desktop/image-earphones-yx1.jpg"
          width={560}
          height={400}
          alt="earphones"
          loading="lazy"
        />
        <div className="bg-snow_white rounded-lg  w-[600px] flex flex-col p-20">
          <h1 className="text-3xl self-start font-bold ml-10 mt-10 tracking-wider">
            YX1 EARPHONES
          </h1>
          <Link 
            className="hover:bg-black font-semibold px-10 py-3 mt-10 border-2 border-black transition-colors hover:text-white w-[200px] ml-10 text-end"
            href="/yx1-earphones"
          >
            SEE PRODUCT
          </Link>
        </div>
      </section>
      <AboutUs />
    </main>
  );
}
