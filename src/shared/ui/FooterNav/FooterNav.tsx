import { Link } from "react-router";

type Props = {
  title?: string;
  dataLink?: { id: string; label: string; href: string }[];
  classname?: string;
};

const FooterNav = ({ title, dataLink }: Props) => {
  return (
    <div className="flex flex-col space-y-5 text-center md:text-left">
      <h6 className="font-displayPrompt text-2xl font-normal text-white">
        {title}
      </h6>
      <ul className="flex flex-col space-y-4">
        {dataLink?.map((link) => (
          <li key={link.id}>
            <Link
              className="focus:ring-violet-300 font-poppins text-lg font-normal text-white decoration-white underline-offset-4 hover:underline focus:outline-none focus:ring"
              to={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { FooterNav };
