import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./style.scss";
const ArrowLink = ({ href, className, children }) => {
  return (
    <a href={href} className={"arrow-link " + className}>
      {children} <FaLongArrowAltRight />
    </a>
  );
};

export default ArrowLink;
