import React, { FC } from "react";
import { Particle } from "../Particle/Particle";
import loop from "@shared/assets/icons/loop.png";

type Props = {
  classname?: string;
  size?: Size;
  cardData?: CardData;
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

const Card: FC<Props> = ({ size, cardData, classname }: Props) => {
  return (
    <div
      className={`flex flex-col items-start justify-start space-x-5 overflow-hidden text-left ${classname}`}
      title="Card of model"
    >
      <div
        className={`relative ${size === "small" ? "h-[219px] w-[164px] rounded-md" : "h-[573px] w-[455px] rounded-lg"}`}
      >
        <img
          src={cardData?.urlImg}
          className={` ${size === "small" ? "h-[219px] w-[164px] rounded-md" : "h-[573px] w-[455px] rounded-lg"}`}
        />
        <button
          style={{ borderRadius: "82px 5px 5px 5px" }}
          className={`group relative left-[60%] top-[-30%] z-20 flex h-[67px] w-[67px] items-center justify-center bg-grey opacity-60 hover:bg-lightPink ${size === "big" ? "hidden" : "inline-block"}`}
        >
          <img
            alt={cardData?.description}
            className="h-s4px ml-2 w-[24px] group-hover:scale-110"
            src={loop}
          />
          <span className="hidden">More details</span>
        </button>
      </div>
      <div className="flex h-[130px] flex-col justify-start">
        <h4 className="pt-[20px] font-displayPrompt text-2xl font-semibold text-black">
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
