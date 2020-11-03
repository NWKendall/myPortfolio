import React from "react";

const NavItem = ({text, link, icon}) => {
    console.log(text)
  return (
    <li className="nav-item">
      <a
        className="icon-button"
        href={link}

      >
        {icon}
      </a>
    </li>
  );
};

export default NavItem;
