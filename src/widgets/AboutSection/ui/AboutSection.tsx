import { Button } from "@shared/ui/Button/Button";
import { Particle } from "@shared/ui/Particle/Particle";
import { Title } from "@shared/ui/Title/Title";
import bg from "@shared/assets/pretty-young-stylish-sexy-woman-pink.png";
import postBg from "@shared/assets/bg-main-01.png";

type Props = {
  classname?: string;
};

const AboutSection = ({ classname }: Props) => {
  return (
    <article
      className={`${classname} flex flex-col items-center justify-center overflow-hidden md:flex-row md:space-x-8`}
    >
      <div className="flex-shrink-1 w-1/2 flex-col justify-center space-y-5 overflow-visible bg-transparent pb-[49px] pt-[85px] text-left md:w-1/3 md:pb-[85px] md:pt-[85px]">
        <Title>We provide more than just stitched fabric.</Title>
        <div className="flex flex-col space-y-3">
          <Particle>
            We got the best that you can wear a dress. Clothes that make you
            sophisticated he best that you can wear phisticatedaothes that make
            you so.
          </Particle>
          <Particle>
            We got the best that you can wear a dress. Clothes that make you
            sophisticated he best that you can wear phisticatedaothes that make
            you so.
          </Particle>
        </div>
        <div className="mx-auto md:mx-0">
          <Button classname="mt-[15px]">Learn More</Button>
        </div>
      </div>
      <div
        className="h-[520px] w-full bg-auto bg-no-repeat md:h-[1/2] md:w-[680px]"
        style={{
          backgroundImage: `url(${bg}), url(${postBg})`,
          backgroundPosition: "20% bottom, center bottom",
        }}
      ></div>
    </article>
  );
};

export { AboutSection };
