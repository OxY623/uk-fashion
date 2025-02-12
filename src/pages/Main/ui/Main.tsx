import { CategoriesSection } from "@widgets/CategoriesSection";
import { AboutSection } from "@widgets/AboutSection";
import { CollectionSection } from "@widgets/CollectionSection";
type Props = {
  children?: React.ReactNode;
};
const Main = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex flex-grow flex-col space-y-[120px]">
      <section className="relative md:left-1/4 md:mt-[159px]">
        <AboutSection />
      </section>
      <section className="relative flex items-center justify-center">
        <CollectionSection />
      </section>
      <section>
        <CategoriesSection />
      </section>
      <section>
        <div className="my-8"></div>
      </section>
      {children}
    </div>
  );
};
export default Main;
