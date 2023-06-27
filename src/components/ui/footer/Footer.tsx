import { FacebookIcon, InstagramIcon, TwitterIcon } from "../icons";
import { FooterNavBar } from "./FooterNavBar";

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-carbon_black gap-10 justify-center w-full mt-32 px-40">
      <FooterNavBar/>
      <article className="flex flex-col w-[560px] ml-52">
        <p className="text-smoke_white opacity-[0.5]">
          Audiophile is an all in one stop to fulfill your audio needs. We{"'"}re a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="absolute right-60 mt-20 ">
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
