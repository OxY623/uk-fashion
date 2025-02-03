type Props = {
  children?: React.ReactNode;
};
const Categories = (props: Props) => {
  const { children } = props;
  return (
    <div>
      <h1>Categories</h1>
      {children}
    </div>
  );
};
export { Categories };
