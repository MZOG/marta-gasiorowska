import * as React from "react";

const Carousel = ({ fullWidth = false, children }) => {
  return <div className={fullWidth ? "container" : ""}>{children}</div>;
};

export default Carousel;
