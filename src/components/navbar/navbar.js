import React, { useState } from "react";
import NavItem from "./navItem.js";
import "./navbar.css";
import { ReactComponent as GitHubIcon } from "../../assets/github.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/linkedin.svg";
import { ReactComponent as ProtonMailIcon } from "../../assets/protonmail.svg";

const NavBar = () => {
    const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <h2 className="username" >Nic Kendall</h2>
      <ul className="navbar-nav">
        <NavItem
          text="github"
          icon={<GitHubIcon />}
          link="https://github.com/NWKendall"
          open={open}
          setOpen={setOpen}
        />
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
        <NavItem text="resume" icon="📄" link="/src/assets/Nic Kendall Resume SE.pdf" />
      </ul>
    </nav>
  );
};

export default NavBar;
