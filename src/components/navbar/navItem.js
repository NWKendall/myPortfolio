import React from "react";

const NavItem = ({ text, link, icon }) => {
  return (
      <li className="nav-item">
          {text === "github" ? (
            <a 
            className="icon-button" href={link} target="_blank" rel="noreferrer"
            >
            {icon}
            </a>
      ) : text === "resume" ? (
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


{/* <div>
    <a href={link} target="_blank" rel="noreferrer"> Profile </a>                
    <a>Activity</a>
</div> */}