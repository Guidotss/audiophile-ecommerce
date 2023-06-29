import Link from "next/link";

export default function HeroHeader() {
  return (
    <section className="bg-black flex 2xl:px-40 sm:p-24 py-20 rounded-b-md">
      <div className="flex flex-col text-start image -mt-16 rounded-lg fadeIn">
        <div className="2xl:w-[750px] sm:w-[520px] flex flex-col bg-carbon_black 2xl:p-20 sm:p-[67px] 2xl:h-[900px] justify-center">
          <span className="text-snow_white mb-5 opacity-[0.5] tracking-[10px] font-extralight">
            NEW PRODUCT
          </span>
          <h1 className="2xl:text-6xl sm:text-4xl text-snow_white font-semibold mb-10 w-3/4 tracking-wide">
            XX99 MARK II HEADPHONES
          </h1>
          <article className="w-3/4">
            <p className="text-snow_white opacity-[0.8] font-light">
              Experimental natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </article>
          <Link
            className="text-smoke_white font-semibold py-3 px-10 mt-10 2xl:mt-12 2xl:py-4 2xl:px-11 bg-cinnamon w-48 2xl:w-52 hover:bg-peach transition-colors"
            href="/xx99-mark-two-headphones"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
}
