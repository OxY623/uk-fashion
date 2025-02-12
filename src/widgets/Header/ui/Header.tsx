import { FC, useState } from "react";
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { Navbar } from "../../NavBar";
import { CSSProperties } from "react";
import { Link } from "react-router";
import { Logo } from "../../../shared/ui/Logo/Logo.tsx";
import bg from "../../../shared/assets/bg-header.png";
import facebookLogo from "@shared/assets/icons-header/f.png";
import twitterLogo from "@shared/assets/icons-header/t.png";
import skypeLogo from "@shared/assets/icons-header/s.png";
import whatsAppLogo from "@shared/assets/icons-header/w.png";
import playIcon from "@shared/assets/icons-header/play.png";
import decoration from "@shared/assets/Union.png";
import girl from "@shared/assets/header-woman.png";

type Props = {
  classname?: string;
  style?: CSSProperties;
};

/**
 * Header component that displays a header section with a background image, a logo, navigation bar, and various interactive elements.
 *
 * @component
 * @param {Props} props - The properties object.
 * @param {string} props.classname - Additional class names for the header component.
 *
 * @returns {JSX.Element} The rendered Header component.
 *
 * @example
 * <Header classname="custom-class" />
 *
 * @remarks
 * This component includes a burger menu button for mobile view, a logo, a navigation bar, a contact button, and additional content such as images and links.
 * The burger menu toggles the visibility of the navigation bar in mobile view.
 *
 * @function
 * @name Header
 *
 * @description
 * The Header component is designed to be used as the main header section of a webpage. It includes a responsive design with a burger menu for mobile devices.
 * The background image, logo, and other elements are customizable through props and CSS classes.
 */
const Header: FC<Props> = (props) => {
  const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false);

  const handleClickBurgerMenu = () => {
    setIsActiveBurgerMenu((prev) => !prev);
  };

  const { classname } = props;
  return (
    <header
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "3% center",
      }}
      className={`${classname} bg-opacity-50 relative h-full w-full bg-lightPink bg-cover bg-no-repeat bg-blend-multiply`}
    >
      <div className="h-full px-5 md:px-0">
        <header className="relative z-40 flex flex-row items-center justify-between space-x-3 p-4 md:justify-around">
          <button
            title="Menu"
            onClick={handleClickBurgerMenu}
            className="focus:ring-violet-300 easy-lenaer deleay-100 group transition-transform hover:underline focus:outline-none focus:ring md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-6 text-white group-hover:scale-110 ${isActiveBurgerMenu ? "rotate-90" : ""}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <Logo classname="place-items-center flex-shrink " />
          <Navbar classname="hidden md:flex" />
          <Button classname="text-xs sm:text-lg">Contact us</Button>
        </header>
        <div
          className={`md:hidden ${
            isActiveBurgerMenu ? "block opacity-100" : "hidden opacity-0"
          } transition-all delay-100 ease-in-out`}
        >
          <Navbar classname="flex flex-row justify-center" />
        </div>
        <div className="flex flex-col items-center lg:h-[684px] lg:flex-row lg:justify-start">
          <div className="relative hidden h-full w-full lg:block">
            <img
              className="rotate-30 absolute left-[100px] top-[40px] h-[682px] w-[1200px] transform transition-transform duration-300 ease-in-out hover:scale-105"
              src={decoration}
              aria-hidden
              alt="line"
            />
            <img
              className="absolute left-[-40px] h-[802px] w-[auto] object-contain xl:scale-125"
              src={girl}
              aria-hidden
              alt="girl"
            />
          </div>
          <div className="flex h-full w-full flex-col justify-center px-4 lg:px-0">
            <div className="flex-grow"></div>
            <div className="space-y-4 md:mx-auto">
              <h3 className="text-left font-displayPrompt text-lg font-semibold text-white">
                Shop your outfit style
              </h3>
              <h1 className="text-left font-displayPrompt text-4xl font-semibold text-white md:text-6xl">
                SWEET CLOTHS.
              </h1>
              <p className="text-left font-poppins text-base font-semibold text-white md:max-w-[559px] md:text-xl">
                We got the best that you can wear a dress. Clothes that make the
                best you want.
              </p>
              <div className="flex flex-col space-y-4 pt-[18px] md:flex-row md:space-x-6 md:space-y-0">
                <Button classname="mx-auto md:mx-0 items-center">
                  Visit Now
                </Button>
                <Link
                  to="#"
                  className="focus:ring-violet-300 group mx-auto flex items-center space-x-3 decoration-black underline-offset-4 transition-all duration-100 ease-in-out hover:underline focus:outline-none focus:ring md:mx-0"
                >
                  <div className="">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-darkGrey group-hover:animate-bounce">
                      <img src={playIcon} alt="play" />
                    </div>
                    <div className="mx-auto mt-[7px] h-[2px] w-5 bg-black opacity-80 blur-[3px]"></div>
                  </div>
                  <span className="mb-[7px] font-displayPrompt text-xl font-medium text-black">
                    Watch Video
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex-grow"></div>
            <footer className="flex flex-col items-center justify-end space-y-4 px-3 pb-[16px] pt-4 md:flex-row md:space-x-3 md:space-y-0 lg:justify-start">
              <div className="w-full border-b border-solid border-b-white md:w-[304px]"></div>
              <Link
                to="#"
                className="focus:ring-violet-300 font-displayPrompt text-lg font-medium text-white underline-offset-4 hover:underline focus:outline-none focus:ring"
              >
                Follow us
              </Link>
              <div className="px-[5px]">
                <ul className="flex space-x-4">
                  {[
                    { src: facebookLogo, alt: "facebook" },
                    { src: twitterLogo, alt: "twitter" },
                    { src: skypeLogo, alt: "skype" },
                    { src: whatsAppLogo, alt: "whatsApp" },
                  ].map((icon, index) => (
                    <li key={index}>
                      <Link
                        to="#"
                        className="focus:ring-violet-300 flex h-6 w-6 items-center justify-center rounded-full border-2 border-solid border-white transition-transform duration-100 ease-in-out hover:scale-110 focus:outline-none focus:ring"
                      >
                        <span className="hidden">{icon.alt}</span>
                        <img alt={`link to ${icon.alt}`} src={icon.src} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
