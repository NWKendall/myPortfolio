import React from "react";
import "./navbar.css";

const NavItem = ({ text, link, icon, title }) => {
  return (
    <li className="nav-item" >
      {text === "resume" ? (
        <a className="icon-button" href={link} download title={title}>
          {icon}
        </a>
      ) : (
        <a className="icon-button" href={link} target="_blank" rel="noreferrer" title={title}>
          {icon}
        </a>
      )}
    </li>
  );
};

export default NavItem;
