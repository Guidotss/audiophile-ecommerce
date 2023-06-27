import { Logo } from "../icons";
import { NavBarLink } from "../navbar";

export const FooterNavBar = () => {
  return (
    <nav className="flex justify-between mt-28 w-[1500px] ">
      <div className="ml-52">
        <Logo />
      </div>
      <ul className="flex gap-14 text-smoke_white">
        <NavBarLink link="" title="HOME" />
        <NavBarLink link="headphones" title="HEADPHONES" />
        <NavBarLink link="speakers" title="SPEAKERS" />
        <NavBarLink link="earphones" title="EARPHONES" />
      </ul>
    </nav>
  );
};
