import { FacebookIcon, InstagramIcon, TwitterIcon } from "../icons";
import { FooterNavBar } from "./FooterNavBar";

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-carbon_black gap-10 justify-center w-full mt-32 2xl:px-40 sm:px-16">
      <FooterNavBar/>
      <article className="flex flex-col 2xl:w-[560px] sm:w-[520px] 2xl:ml-52">
        <p className="text-smoke_white opacity-[0.5]">
          Audiophile is an all in one stop to fulfill your audio needs. We{"'"}re a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="absolute 2xl:right-60 2xl:mt-20 sm:right-20 sm:mt-28 ">
          <div className="flex gap-4 cursor-pointer">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
        <p className="text-smoke_white opacity-[0.8] mt-10 mb-10">
          Copyright 2021. All Rights Reserved
        </p>
      </article>
    </footer>
  );
};
