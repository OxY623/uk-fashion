// import { MasonryCustom } from "@shared/ui/MasonryCustom/MasonryCustom";
import { CategoriesSection } from "@widgets/CategoriesSection";

type Props = {
  children?: React.ReactNode;
};
const Categories = (props: Props) => {
  const { children } = props;
  return (
    <div className="my-8 sm:my-[116px]">
      <CategoriesSection />
      {children}
    </div>
  );
};
export default Categories;
