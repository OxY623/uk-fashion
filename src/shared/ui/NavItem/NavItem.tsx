/// <reference types="vite-plugin-svgr/client" />
import Line from "../../assets/line-hover.svg?react";
import { FC, AnchorHTMLAttributes, ReactNode } from "react";
import { NavLink, useLocation } from "react-router";
import { useState, useLayoutEffect } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  classname?: string;
  href: string;
}
const NavItem: FC<Props> = (props) => {
  const { children, classname, href, ...other } = props;
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useLayoutEffect(() => {
    const flag: boolean = location.pathname === href;
    setIsActive(flag);
  }, [href, location.pathname]);

  return (
    <>
      <NavLink
        to={`${href}`}
        className={`${classname}px-2 focus:ring-violet-300 group inline-block cursor-pointer py-3 font-displayPrompt font-[18px] text-white transition-all delay-75 ease-in hover:font-semibold hover:text-white focus:outline-none focus:ring ${isActive ? "font-semibold text-white" : ""}`}
        {...other}
      >
        <span>{children}</span>
        <Line className="m-auto opacity-0 transition-opacity duration-300 group-[.active]:opacity-100" />
      </NavLink>
    </>
  );
};
export { NavItem };
