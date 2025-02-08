import { ReactNode } from "react";

type Props = {
  classname?: string;
  children?: ReactNode;
};

const Particle = ({ classname, children }: Props) => {
  return (
    <p
      className={`mobile:text-xl text-left font-poppins text-base font-normal text-black ${classname}`}
    >
      {children}
    </p>
  );
};

export { Particle };
