import React from "react";
import "./navbar.css";

const NavItem = ({ text, link, icon }) => {
  return (
    <li className="nav-item">
      {text === "resume" ? (
        <a className="icon-button" href={link} download>
          {icon}
        </a>
      ) : (
        <a className="icon-button" href={link} target="_blank" rel="noreferrer">
          {icon}
        </a>
      )}
    </li>
  );
};

export default NavItem;
