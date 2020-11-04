import React from "react";
import NavItem from "./navItem.js";
import "./navbar.css";
import ExpandableNavItem from "./expandableNavItem.js";
import DropDownMenu from "./DDMenu";
import { ReactComponent as GitHubIcon } from "../../assets/icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as ProtonMailIcon } from "../../assets/icons/protonmail.svg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2 className="username">Nic Kendall</h2>
      <ul className="navbar-nav">
        <ExpandableNavItem text="github" icon={<GitHubIcon />}>
          <DropDownMenu />
        </ExpandableNavItem>
        <NavItem
          text="linkedIn"
          icon={<LinkedInIcon />}
          link="https://www.linkedin.com/in/nwkendall/"
        />
        <NavItem
          text="email"
          icon={<ProtonMailIcon />}
          link="mailto:nic.kendal.dev@protonmail.com"
        />
        <NavItem
          text="resume"
          icon="📄"
          link="/src/assets/Nic Kendall Resume SE.pdf"
        />
      </ul>
    </nav>
  );
};

export default NavBar;
