import React from "react";

const DropDownMenu = () => {
  function DDLinkedItem(props) {
    return (
      <a
        className="menu-item"
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
        {props.text}
      </a>
    );
  }
  function DDItem(props) {
    return (
      <span className="menu-item" onClick={() => console.log("XXX")}>
        {props.text}
      </span>
    );
  }
  return (
    <div className="dropdown">
      <DDLinkedItem
        link="https://github.com/NWKendall"
        text="Profile" 
    />
      <DDItem text="Activity" />
    </div>
  );
};

export default DropDownMenu;
