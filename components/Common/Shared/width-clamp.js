const WidthClamp = ({ children, className }) => {
  return <div className={`${className ?? ""} md:max-w-[1488px] w-11/12 mx-auto`}>{children}</div>;
};

export default WidthClamp;
