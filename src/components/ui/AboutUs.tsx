import Image from "next/image";

export const AboutUs = () => {
  return (
    <section className="flex justify-center ml-10 items-center mt-52 gap-24">
      <article className="flex flex-col text-start">
        <h1 className="text-5xl font-semibold">BRINGING YOU THE</h1>
        <div className="flex gap-2">
          <h1 className="text-5xl font-semibold mb-10 text-cinnamon">BEST</h1>
          <h1 className="text-5xl font-semibold mb-10">AUDIO GEAR</h1>
        </div>
        <p className="w-[470px] text-back opacity-[0.7]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </article>
      <div>
        <Image
          className="rounded-lg fadeIn"
          src="/assets/shared/desktop/image-best-gear.jpg"
          width={600}
          height={600}
          alt="best gear"
          loading="lazy"
        />
      </div>
    </section>
  );
};
