import React from "react";
import "./navbar.css";
import useVisible from "../../utils/useVisible.js";

const ExpandableNavItem = (props) => {
  const { ref, isVisible, setIsVisible } = useVisible(false);
  return (
    <li className="nav-item">
      <span
        className="icon-button"
        onClick={() => setIsVisible(!isVisible)}
        ref={ref}
      >
        {props.icon}
      </span>
      {isVisible && props.children}
    </li>
  );
};

export default ExpandableNavItem;
