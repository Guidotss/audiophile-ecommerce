import { FC } from "react";
import { CartIcon, Logo } from "../icons";
import { NavBarLink } from "./NavBarLink";

interface NavBarProps {
  divider?: boolean;
}

export const NavBar:FC<NavBarProps> = ({ divider }) => {
  return (
    <>
      <nav className="items-center flex justify-around mb-10 fadeIn">
        <Logo />
        <ul className="flex gap-10 text-xs 2xl:text-lg">
          <NavBarLink title="HOME" link="" />
          <NavBarLink title="HEADPHONES" link="headphones" />
          <NavBarLink title="SPEAKERS" link="speakers" />
          <NavBarLink title="EARPHONES" link="earphones" />
        </ul>
        <div className="cursor-pointer">
          <CartIcon />
        </div>
      </nav>
      {divider && (
        <div className="h-[1px] opacity-[0.5] w-[1100px] 2xl:w-[1590px] ml-24 2xl:ml-40 bg-white" />
      )}
    </>
  );
};
