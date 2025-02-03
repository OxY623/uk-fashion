/// <reference types="vite-plugin-svgr/client" />
import Logotype from "../../assets/logo.svg?react";
import { MouseEvent } from "react";
type Props = {
  classname?: string;
};
const Logo = ({ classname }: Props) => {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    console.log("Click");
  };
  return (
    <a
      onClick={handleClick}
      className={`focus:ring-violet-300 group inline h-[32px] w-[auto] focus:outline-none focus:ring ${
        classname ? classname : ""
      }`}
      href="#"
    >
      <Logotype className="w-20 group-hover:scale-105 sm:w-auto" />
    </a>
  );
};
export { Logo };
