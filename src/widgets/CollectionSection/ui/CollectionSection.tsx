// import { Card } from "@shared/ui/Card/Card";
import { Particle } from "@shared/ui/Particle/Particle";
import { Title } from "@shared/ui/Title/Title";
import { Link } from "react-router";
// import { Size } from "@shared/ui/Card/Card";
import { CollectionGallery } from "@/feature/CollectionGallery";

type Props = { classname?: string };

// const cardInfo = {
//   id: "123",
//   count: 1,
//   description:
//     "We got the best that dress. Clothes the dress you can wear a dress. Clothes that make you sophisticated.",
//   url: `/model/1`,
//   urlImg: "/collection/cillection03.png",
//   flag: false,
// };

const CollectionSection = ({ classname }: Props) => {
  return (
    <div className={` ${classname}`}>
      <CollectionGallery>
        <div className="items flex flex-col items-start justify-start space-y-6">
          <Title>Confuse your mirror by our trendy outfits.</Title>
          <div className="flex h-[120px] space-x-8">
            <Particle>
              We got the best that you can wear a dress. Clothes that make you
              sophisticated.
            </Particle>
            <Particle>
              We got the best that you can wear a dress. Clothes that make you
              sophisticated.
            </Particle>
          </div>
          <Link
            to="#"
            className="focus:ring-violet-300 font-displayPrompt text-2xl font-medium underline underline-offset-4 focus:outline focus:ring"
          >
            View Collection
          </Link>
        </div>
      </CollectionGallery>
    </div>
  );
};

export { CollectionSection };
