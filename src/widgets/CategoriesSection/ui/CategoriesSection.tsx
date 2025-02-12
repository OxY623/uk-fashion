import { images } from "@shared/constant/categoriesLinks";
import { Particle } from "@shared/ui/Particle/Particle";
import { Tabs } from "@shared/ui/Tabs/Tabs";
import { Title } from "@shared/ui/Title/Title";
import Masonry from "react-masonry-css";
import { Link } from "react-router";

type Props = {
  classname?: string;
};

const CategoriesSection = ({ classname }: Props) => {
  return (
    <div
      className={`flex flex-col items-center justify-center space-y-[25px] text-center ${classname}`}
    >
      <div className="flex flex-col space-y-[20px]">
        <Title classname="text-center">Categories</Title>
        <Particle classname="text-center max-w-[60%] m-auto">
          We got the best tht the best that you ct the best that you ct the best
          that you got the best that you must be want.
        </Particle>
      </div>

      <div className="flex flex-col space-y-[45px]">
        <Tabs classname="" />
        <div className="min-h-[540px] overflow-visible rounded-lg">
          {/* <MasonryCustom images={images} /> */}
          <Masonry
            breakpointCols={{ default: 3, 768: 2, 480: 1 }}
            className="flex gap-4"
            columnClassName="flex flex-col gap-4 "
          >
            {images.map((src, i) => (
              <Link
                to="#"
                key={src}
                className="focus:ring-violet-300 group relative block overflow-hidden rounded-lg focus:outline-none focus:ring"
              >
                <img
                  key={i}
                  src={src}
                  alt={`Image ${i + 1}`}
                  className="w-full rounded-lg"
                />
                <div className="absolute inset-x-0 bottom-0 flex h-[72px] w-full items-center justify-center bg-[#1F2743] font-poppins text-xl font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Shop Now
                </div>
              </Link>
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export { CategoriesSection };
