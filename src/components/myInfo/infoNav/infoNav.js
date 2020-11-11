import React, { useState } from "react";
import GlassButton from "../../buttons/GlassButton.js";
import "./infoNav.css";

const InfoNav = ({ showInfo, setShowInfo, toggleContent }) => {
  return (
    <ul className="infoNav">
      <GlassButton title="back" compFunc={toggleContent} />
      <li
        onClick={() => setShowInfo("about")}
        className={
          showInfo === "about" ? "infoOption infoOPtion--active" : "infoOption"
        }
      >
        About
      </li>
      <li
        onClick={() => setShowInfo("skills")}
        className={
          showInfo === "skills" ? "infoOption infoOPtion--active" : "infoOption"
        }
      >
        Skills
      </li>
      <li
        onClick={() => setShowInfo("projects")}
        className={
          showInfo === "projects"
            ? "infoOption infoOPtion--active"
            : "infoOption"
        }
      >
        Projects
      </li>
    </ul>
  );
};

export default InfoNav;
