import { CollectionSection } from "@widgets/CollectionSection";

type Props = {
  children?: React.ReactNode;
};
const Collection = (props: Props) => {
  const { children } = props;
  return (
    <div className="my-8 sm:my-[116px]">
      <CollectionSection />
      {children}
    </div>
  );
};
export { Collection };
