import Link from "next/link";
import { FC } from "react";

interface NavBarILinkProps {
  title: string;
  link: string;
}

export const NavBarLink: FC<NavBarILinkProps> = ({ title, link }) => {
  return (
    <li className="hover:text-cinnamon transition-colors tracking-widest">
      <Link href={link === "" ? "/" : `/category/${link}`}>{title}</Link>
    </li>
  );
};
