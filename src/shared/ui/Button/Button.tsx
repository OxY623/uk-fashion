import { FC, ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children?: ReactNode;
  classname?: string;
}

const Button: FC<Props> = (props) => {
  const { onClick, children, classname, ...other } = props;
  return (
    <button
      style={{ boxShadow: "0px 12px 33px 0px rgba(31, 39, 67, 0.2)" }}
      className={`focus:ring-violet-300 hover:text-dark-pink shrink-1 md:shrink-1 inline-flex transform items-center text-wrap rounded-lg bg-darkGrey px-8 py-4 text-center font-roboto text-lg font-medium leading-[1.2] tracking-normal text-white decoration-white underline-offset-4 duration-200 hover:underline focus:outline-none focus:ring active:bg-darkPink ${classname}`}
      onClick={onClick}
      {...other}
    >
      {children}
    </button>
  );
};
export { Button };
