import { FC } from "react";
import { NavItem } from "../../../shared/ui/NavItem/NavItem.tsx";
type Props = {
  classname: string;
};

const Navbar: FC<Props> = ({ classname }) => {
  return (
    <nav className={`${classname}`}>
      <ul className="flex flex-col items-center justify-center md:flex-row md:space-x-7">
        <li>
          <NavItem href="/">Home</NavItem>
        </li>
        <li>
          <NavItem href="/about">About</NavItem>
        </li>
        <li>
          <NavItem href="/collection">Collection</NavItem>
        </li>
        <li>
          <NavItem href="/categories">Categories</NavItem>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
