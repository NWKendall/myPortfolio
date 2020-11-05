import React from "react";
import "./buttons.css";

const GlassButton = ({ compFunc, title }) => {
  return (
    <div className="welcome">
      <a href="#" className="cta" onClick={compFunc}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {title}{" "}
      </a>
    </div>
  );
};

export default GlassButton;
