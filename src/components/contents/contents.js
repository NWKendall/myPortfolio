import React, { useState, useEffect } from "react";
import "./contents.css";
import { stars } from "../../utils/stars.js";
import GhostMessage from "../ghostMessage/ghostMessage.js";
import GlassButton from "../buttons/GlassButton.js";
const Contents = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  useEffect(() => {
    stars(".welcomeDiv");
  }, []);

  return (
    <>
      {!showContent ? (
        <div className="welcomeDiv">
          <GhostMessage />
          <GlassButton title="about me" compFunc={toggleContent} />
        </div>
      ) : (
        <div className="infoDiv">
          {" "}
          GUCCI STUFF HERE
          <GlassButton title="Back?" compFunc={toggleContent} />
        </div>
      )}
    </>
  );
};

export default Contents;
