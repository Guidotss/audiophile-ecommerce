import { CartIcon, Logo } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="bg-carbon_black w-full py-10 border-smoke_white sticky text-white items-center">
        <nav className="items-center flex justify-around mb-10">
          <Logo />
          <ul className="flex gap-10 text-xs">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/headphone">HEADPHONE</Link>
            </li>
            <li>
              <Link href="/speakers">SPEAKERS</Link>
            </li>
            <li>
              <Link href="/earphones">EARPHONES</Link>
            </li>
          </ul>
          <CartIcon />
        </nav>
        <div className="h-[1px] w-[1100px] ml-24 bg-white" />
      </header>
      <section className="bg-carbon_black flex pl-24 w-full">
        <div className="flex flex-col text-start">
          <span className="text-snow_white font-light mb-5 opacity-[0.5]">
            NEW PRODUCT
          </span>
          <h1 className="text-5xl text-snow_white font-semibold mb-10 w-3/4">
            XX99 MARK II HEADPHONES
          </h1>
          <article className="w-3/4">
            <p className="text-snow_white opacity-[0.8] font-light">
              Experimental natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </article>
          <button className="text-smoke_white font-semibold py-3 px-10 mt-10 bg-cinnamon w-48">
            SEE PRODUCT
          </button>
        </div>
        <div className="relative w-auto h-auto mr-24">
          <Image
            className="relative"
            src="/assets/home/tablet/image-header.jpg"
            width={800}
            height={460}
            objectFit="cover"
            objectPosition="center"
            alt="Headphones"
          />
        </div>
      </section>
    </main>
  );
}
