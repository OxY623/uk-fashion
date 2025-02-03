import { AboutSection } from "@widgets/AboutSection";
type Props = {
  children?: React.ReactNode;
};
const Main = (props: Props) => {
  const { children } = props;
  return (
    <div className="">
      <section className="relative md:left-1/4 md:mt-[159px]">
        <AboutSection />
      </section>
      {children}
    </div>
  );
};
export { Main };
