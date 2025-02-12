import { FC } from "react";
import { Particle } from "../Particle/Particle";
import loop from "@shared/assets/icons/loop.png";

type Props = {
  classname?: string;
  size?: Size;
  cardData?: CardData;
  onClickButton?: () => void;
};

export interface CardData {
  id: string;
  count: number;
  description: string;
  url: string;
  urlImg: string;
  flag: boolean;
  size?: Size;
}

export enum Size {
  BIG = "big",
  SMALL = "small",
}

const Card: FC<Props> = ({
  size,
  cardData,
  classname,
  onClickButton,
}: Props) => {
  return (
    <div
      className={`z-20 flex flex-col items-start justify-start space-y-5 overflow-hidden text-left ${classname} ${size === "small" ? "h-auto" : "h-full items-center"}`}
      title="Card of model"
    >
      <div
        className={`relative inline-block overflow-hidden ${size === "small" ? "h-[219px] w-[164px] rounded-md" : "h-full w-full rounded-lg xl:h-[573px] xl:w-[455px]"}`}
      >
        <img
          src={cardData?.urlImg || "default-image-url.png"}
          className={` ${size === "small" ? "h-[219px] w-[164px] rounded-md" : "h-full w-full rounded-lg xl:h-[573px] xl:w-[455px]"}`}
        />
        <button
          onClick={onClickButton}
          className={`focus:ring-violet-300 pointer group absolute bottom-0 right-0 z-20 flex h-[67px] w-[67px] items-center justify-center rounded-md rounded-s-[82px] bg-grey opacity-60 hover:h-[219px] hover:w-[164px] hover:rounded-s-md hover:bg-lightPink focus:outline-none focus:ring ${size === "big" ? "hidden" : "inline-block"}`}
        >
          <img
            alt={cardData?.description}
            className="ml-2 h-[24px] w-[24px] group-hover:ml-0 group-hover:scale-110"
            src={loop}
          />
          <span className="hidden">More details</span>
        </button>
      </div>
      <div className="flex h-[130px] flex-col items-start justify-start">
        <h4 className="font-displayPrompt text-2xl font-semibold text-black">
          {cardData?.count && cardData?.count < 10
            ? `0${cardData?.count}`
            : cardData?.count}
        </h4>
        <Particle
          classname={`${size === "small" ? "w-[164px] line-clamp-2" : ""}`}
        >
          {cardData?.description}
        </Particle>
      </div>
    </div>
  );
};

export { Card };
