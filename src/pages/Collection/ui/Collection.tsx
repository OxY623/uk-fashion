type Props = {
  children?: React.ReactNode;
};
const Collection = (props: Props) => {
  const { children } = props;
  return (
    <div>
      <h1>Collection</h1>
      {children}
    </div>
  );
};
export { Collection };
