import { Logo } from "../icons";
import { NavBarLink } from "../navbar";

export const FooterNavBar = () => {
  return (
    <nav className="flex justify-between 2xL:mt-28 sm:mt-10 2xl:w-[1500px] ">
      <div className="2xl:ml-52">
        <Logo />
      </div>
      <ul className="flex 2xl:gap-14 sm:gap-5 text-smoke_white">
        <NavBarLink link="" title="HOME" />
        <NavBarLink link="headphones" title="HEADPHONES" />
        <NavBarLink link="speakers" title="SPEAKERS" />
        <NavBarLink link="earphones" title="EARPHONES" />
      </ul>
    </nav>
  );
};
