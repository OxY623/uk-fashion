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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = selectedIndex * 194; // Adjust the scroll offset as needed
    }
  }, [selectedIndex]);

  const nextImage = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 194; // Adjust the scroll offset as needed
      setSelectedIndex((prevIndex) => prevIndex + 1); // Increment index
    }
  };

  const prevImage = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 194; // Adjust the scroll offset as needed
      setSelectedIndex((prevIndex) => prevIndex - 1); // Decrement index
    }
  };

  const handleClickButton = (id: number) => {
    setBigCard(data.find((item) => item.count === id) || data[0]);
  };

  const isNextButtonDisabled =
    scrollRef.current?.scrollWidth &&
    scrollRef.current?.scrollLeft ===
      scrollRef?.current?.scrollWidth - scrollRef?.current?.clientWidth;

  const isPrevButtonDisabled = scrollRef.current?.scrollLeft === 0;

  return (
    <div className={`mx-auto flex items-end gap-4 p-4 ${classname}`}>
      <div className="relative flex flex-col xl:flex-row">
        {data.length > 0 && (
          <div className="relative px-[65px] pt-[50px]" key={dataBigCard.id}>
            <Card key={dataBigCard.id} cardData={dataBigCard} size={Size.BIG} />
          </div>
        )}
        <div className="flex flex-col items-center justify-between space-y-4 px-[58px] pt-[50px]">
          {children}
          <div className="relative flex w-[169px] mobile:w-[369px] md:w-[560px]">
            <button
              className={`focus:ring-violet-300 group absolute left-[-30px] top-1/2 -translate-y-1/2 transform focus:outline-none focus:ring ${isPrevButtonDisabled ? "hidden" : ""}`}
              title="Previous"
              onClick={prevImage}
              disabled={isPrevButtonDisabled}
            >
              <span className="hidden">Prev</span>
              <img
                aria-hidden
                alt=""
                className="rotate-180 group-hover:scale-110"
                src={iconDirection}
              />
            </button>

            <button
              className={`focus:ring-violet-300 group absolute right-[-30px] top-1/2 -translate-y-1/2 transform focus:outline-none focus:ring ${isNextButtonDisabled ? "hidden" : ""}`}
              title="Next"
              onClick={nextImage}
              disabled={isNextButtonDisabled ? true : false}
            >
              <span className="hidden">Next</span>
              <img
                aria-hidden
                alt=""
                className="group-hover:scale-110"
                src={iconDirection}
              />
            </button>
            <div className="h-full overflow-hidden">
              <div
                ref={scrollRef}
                className="mb-[-50px] flex w-[169px] space-x-[30px] overflow-x-scroll scroll-smooth mobile:w-[369px] md:w-[560px]"
              >
                {data.map((item) => (
                  <div key={item.id}>
                    <Card
                      cardData={item}
                      size={Size.SMALL}
                      onClickButton={() => handleClickButton(item.count)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CollectionGallery };
