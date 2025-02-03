import { ReactNode } from "react";

type Props = {
  classname?: string;
  children?: ReactNode;
};

const Particle = ({ classname, children }: Props) => {
  return (
    <p
      className={`text-left font-poppins text-xl font-normal text-black ${classname}`}
    >
      {children}
    </p>
  );
};

export { Particle };
