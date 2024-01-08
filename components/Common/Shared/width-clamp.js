const WidthClamp = ({ children, className }) => {
  return <div className={`${className ?? ""} container`}>{children}</div>;
};

export default WidthClamp;
