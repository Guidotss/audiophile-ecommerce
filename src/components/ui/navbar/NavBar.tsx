import { CartIcon, Logo } from "../icons";
import { NavBarLink } from "./NavBarLink";

export const NavBar = () => {
  return (
    <>
      <nav className="items-center flex justify-around mb-10 fadeIn">
        <Logo />
        <ul className="flex gap-10 text-xs 2xl:text-lg">
          <NavBarLink title="HOME" link="" />
          <NavBarLink title="HEADPHONE" link="headphone" />
          <NavBarLink title="SPEAKERS" link="speakers" />
          <NavBarLink title="EARPHONES" link="earphones" />
        </ul>
        <div className="cursor-pointer">
          <CartIcon />
        </div>
      </nav>
      <div className="h-[1px] opacity-[0.5] w-[1100px] 2xl:w-[1590px] ml-24 2xl:ml-40 bg-white" />
    </>
  );
};
