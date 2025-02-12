import { AboutSection } from "@widgets/AboutSection";
type Props = {
  children?: React.ReactNode;
};
const About = (props: Props) => {
  const { children } = props;
  return (
    <div className="relative my-8 sm:my-[116px] md:left-1/4">
      <AboutSection />
      {children}
    </div>
  );
};
export default About;
