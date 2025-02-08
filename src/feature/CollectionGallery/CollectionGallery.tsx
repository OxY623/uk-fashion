import { FC, useState, useEffect, useRef, ReactNode } from "react";
import { collectionCardsData } from "@shared/constant/collectionLinks";
import { Card, Size, CardData } from "@shared/ui/Card/Card";
import iconDirection from "@shared/assets/icons/next-right-black.png";

type Props = {
  classname?: string;
  children?: ReactNode;
};

const CollectionGallery: FC<Props> = ({ classname, children }) => {
  const [data] = useState<CardData[]>([...collectionCardsData]);
  const [dataBigCard, setBigCard] = useState<CardData>(data[0]);
  const [selectedIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = selectedIndex * 194; // Adjust the scroll offset as needed
    }
  }, [selectedIndex]);

  const nextImage = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 194; // Adjust the scroll offset as needed
    }
  };

  const prevImage = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 194; // Adjust the scroll offset as needed
    }
  };

  const handleClickButton = (id: number) => {
    setBigCard(data.find((item) => item.count === id) || data[0]);
  };

  return (
    <div className={`mx-auto flex items-end gap-4 p-4 ${classname}`}>
      <div className="relative flex flex-col xl:flex-row">
        <div className="absolute inset-0 z-[-10] hidden h-[317px] w-[248px] flex-wrap gap-[8px] xl:flex">
          {[...Array(16 * 20)].map((_, index) => (
            <div
              key={index}
              className="h-[8px] w-[8px] bg-grey opacity-40"
            ></div>
          ))}
        </div>
        {data.length > 0 && (
          <div className="relative px-[65px] pt-[50px]" key={dataBigCard.id}>
            <Card key={dataBigCard.id} cardData={dataBigCard} size={Size.BIG} />
          </div>
        )}
        <div className="flex flex-col items-center justify-between space-y-4 px-[58px] pt-[50px]">
          {children}
          <div className="mobile:w-[369px] relative flex w-[169px] md:w-[560px]">
            <button
              className="group absolute left-[-30px] top-1/2 -translate-y-1/2 transform"
              title="Previous"
              onClick={prevImage}
            >
              <span className="hidden">Prev</span>
              <img
                className="rotate-180 group-hover:scale-110"
                src={iconDirection}
              />
            </button>

            <button
              className="group absolute right-[-30px] top-1/2 -translate-y-1/2 transform"
              title="Next"
              onClick={nextImage}
            >
              <span className="hidden">Next</span>
              <img className="group-hover:scale-110" src={iconDirection} />
            </button>
            <div className="h-full overflow-hidden">
              <div
                ref={scrollRef}
                className="mobile:w-[369px] mb-[-17px] flex w-[169px] space-x-[30px] overflow-x-scroll scroll-smooth md:w-[560px]"
              >
                {data &&
                  data.map((item) => {
                    return (
                      <div className="" key={item.id}>
                        <Card
                          cardData={item}
                          size={Size.SMALL}
                          onClickButton={() => handleClickButton(item.count)}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { CollectionGallery };
