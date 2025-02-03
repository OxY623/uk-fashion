import { ReactNode } from "react";

type Props = {
  classname?: string;
  children?: ReactNode;
};

const Title = ({ classname, children }: Props) => {
  return (
    <h2
      className={`text-left font-displayPrompt text-4xl font-semibold text-black ${classname}`}
    >
      {children}
    </h2>
  );
};

export { Title };
