import { useState, FC } from "react";

const tabs = ["Babydoll", "Kimono", "Bubble", "T-shirt", "Wrap around"];

type Props = {
  classname: string;
};

const Tabs: FC<Props> = ({ classname }) => {
  const [active, setActive] = useState(tabs[0]);

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-lg border border-[rgba(128,128,128,0.1)] sm:flex-row ${classname}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          title={tab}
          onClick={() => setActive(tab)}
          className={`pointer flex-1 border border-[rgba(128,128,128,0.1)] px-[25px] py-[11px] text-center ${
            active === tab
              ? "z-20 rounded-lg border border-darkPink bg-darkPink text-white"
              : "bg-white text-black"
          } border-r last:border-r-0`}
        >
          <span className="text-nowrap font-poppins text-base font-normal">
            {tab}
          </span>
        </button>
      ))}
    </div>
  );
};

export { Tabs };
