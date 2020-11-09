import React from "react";
import "./buttons.css";

const GlassButton = ({ compFunc, title }) => {
  return (
    <div className="welcome" onClick={compFunc}>
      <span className="cta" onClick={compFunc}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {title}{" "}
      </span>
    </div>
  );
};

export default GlassButton;
