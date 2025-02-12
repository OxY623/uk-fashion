import { ReactNode } from "react";

type Props = {
  classname?: string;
  children?: ReactNode;
};

const Particle = ({ classname, children }: Props) => {
  return (
    <p
      className={`text-left font-poppins text-base font-normal text-[#666565] mobile:text-xl ${classname}`}
    >
      {children}
    </p>
  );
};

export { Particle };
