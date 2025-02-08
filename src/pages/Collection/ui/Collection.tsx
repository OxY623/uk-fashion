import { CollectionSection } from "@widgets/CollectionSection";

type Props = {
  children?: React.ReactNode;
};
const Collection = (props: Props) => {
  const { children } = props;
  return (
    <div className="">
      <CollectionSection />
      {children}
    </div>
  );
};
export { Collection };
