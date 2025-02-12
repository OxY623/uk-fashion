import "./MassonryCustom.css";
import { FC } from "react";

export type ImageUrl = string;
type Props = {
  images?: ImageUrl[];
  classname?: string;
};

const MasonryCustom: FC<Props> = ({ images, classname }) => {
  return (
    <div className={`auto-rows-2 grid grid-cols-3 gap-[30px] ${classname}`}>
      {images &&
        images.map((src, i) => (
          <div key={src} className="break-inside-avoid">
            <img
              src={src}
              alt={`Image ${i + 1} about model`}
              className="w-full rounded-lg"
            />
          </div>
        ))}
    </div>
  );
};

export { MasonryCustom };
