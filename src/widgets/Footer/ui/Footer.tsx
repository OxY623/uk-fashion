import { FooterNav } from "@shared/ui/FooterNav/FooterNav";
import { Logo } from "@shared/ui/Logo/Logo";
import { Link } from "react-router";
import {
  footerLinksCol1,
  footerLinksCol2,
  footerLinksCol3,
} from "@shared/constant/footerLinks";
import logo1 from "@/shared/assets/icons/F.png";
import logo2 from "@/shared/assets/icons/T.png";
import logo3 from "@/shared/assets/icons/W.png";

type Props = {
  className?: string;
};

const Footer = ({ className }: Props) => {
  return (
    <div
      className={`${className} flex flex-col items-center space-y-6 bg-darkGrey px-5 py-10 md:flex-row md:justify-around md:space-y-0 md:text-left`}
    >
      <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-x-8 md:space-y-0">
        <div className="flex flex-col items-center space-y-4 md:items-start md:space-y-5">
          <Logo />
          <p className="max-w-[244px] text-wrap text-center font-poppins text-lg font-normal text-white md:text-left">
            We got the best that you can wear a dress.{" "}
          </p>
          {/* navbar messagers */}
          <ul className="flex space-x-5">
            <li key="facebook">
              <Link className="group h-12 w-12 rounded-full" to="#">
                <div className="group-focus:ring-violet-300 flex h-12 w-12 items-center justify-center rounded-full bg-grey transition-transform duration-100 ease-in-out hover:scale-110 hover:border-2 hover:border-solid hover:border-white hover:bg-darkPink group-focus:outline-none group-focus:ring">
                  <span className="hidden">facebook</span>
                  <img src={logo1} alt="link to messager facebook" />
                </div>
              </Link>
            </li>
            <li key="twitter">
              <Link className="group h-12 w-12 rounded-[50%]" to="#">
                <div className="group-focus:ring-violet-300 flex h-12 w-12 items-center justify-center rounded-full bg-grey transition-transform duration-100 ease-in-out hover:scale-110 hover:border-2 hover:border-solid hover:border-white hover:bg-darkPink group-focus:outline-none group-focus:ring">
                  <span className="hidden">twitter</span>
                  <img src={logo2} alt="link to messager twitter" />
                </div>
              </Link>
            </li>
            <li key="whatsapp">
              <Link className="group h-12 w-12 rounded-full" to="#">
                <div className="group-focus:ring-violet-300 flex h-12 w-12 items-center justify-center rounded-full bg-grey transition-transform duration-100 ease-in-out hover:scale-110 hover:border-2 hover:border-solid hover:border-white hover:bg-darkPink group-focus:outline-none group-focus:ring">
                  <span className="hidden">whatsapp</span>
                  <img src={logo3} alt="link to messager whatsapp" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <FooterNav title={"Connect Us"} dataLink={footerLinksCol1} />
      </div>
      <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-x-12 md:space-y-0">
        <FooterNav title={"Terms & Condition"} dataLink={footerLinksCol2} />
        <FooterNav title={"Useful Links"} dataLink={footerLinksCol3} />
      </div>
    </div>
  );
};

export { Footer };
