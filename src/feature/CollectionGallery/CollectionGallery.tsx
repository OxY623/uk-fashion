import { FC, useState, useEffect, ReactNode } from "react";
import { collectionCardsData } from "@shared/constant/collectionLinks";
import { Card, Size, CardData } from "@shared/ui/Card/Card";
import cube from "@shared/assets/icons/cube.jpeg";

type Props = {
  classname?: string;
  children?: ReactNode;
};

const CollectionGallery: FC<Props> = ({ classname, children }) => {
  //   const [selectIndex, setSelectIndex] = useState(0);
  const [data, setData] = useState<CardData[]>([]);

  useEffect(() => {
    setData(() => {
      return collectionCardsData.map((item, index) => {
        if (index === 0) return { ...item, size: Size.BIG };
        return { ...item, size: Size.SMALL };
      });
    });
  }, []);

  // if (data.length === 0) {
  //   return <div>Loading...</div>; // Или любой другой индикатор загрузки
  // }

  //   const nextImage = () => {
  //     setSelectedIndex((prev) => (prev + 1) % images.length);
  //   };

  //   const prevImage = () => {
  //     setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  //   };

  return (
    <div className={`mx-auto flex items-end gap-4 p-4 ${classname}`}>
      <div className="relative flex">
        <div className="absolute inset-0 z-[-10] flex h-[317px] w-[248px] flex-wrap gap-[8px]">
          {[...Array(16 * 20)].map((_, index) => (
            <div
              key={index}
              className="h-[8px] w-[8px] bg-grey opacity-40"
            ></div>
          ))}
        </div>
        {data.length > 0 && (
          <div className="relative px-[65px] pt-[50px]" key={data[0].id}>
            <Card key={data[0].id} cardData={data[0]} size={Size.BIG} />
          </div>
        )}
        <div className="flex flex-col px-[58px] pt-[50px]">
          {children}
          <div className="flex">
            {data &&
              data.map((item, index) => {
                if (index === 0) {
                  return null;
                }
                return (
                  <div className="p-2" key={item.id}>
                    <Card cardData={item} size={Size.SMALL} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <button>Next</button>
    </div>
  );
};
export { CollectionGallery };
