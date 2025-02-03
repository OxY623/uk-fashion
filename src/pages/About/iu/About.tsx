import { AboutSection } from "@widgets/AboutSection";
type Props = {
  children?: React.ReactNode;
};
const About = (props: Props) => {
  const { children } = props;
  return (
    <div className="relative md:left-1/4 md:mt-[159px]">
      <AboutSection />
      {children}
    </div>
  );
};
export { About };
