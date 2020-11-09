import React, { useState, useEffect } from "react";
import "./contents.css";
import GhostMessage from "../ghostMessage/ghostMessage.js";
import GlassButton from "../buttons/GlassButton.js";
import MyInfo from "../myInfo/myInfo";
const Contents = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };



  return (
    <>
      {!showContent ? (
        <div className="welcomeDiv">
          <GhostMessage />
          <GlassButton title="about me" compFunc={toggleContent} />
        </div>
      ) : (
        <MyInfo toggleContent={toggleContent} />
      )}
    </>
  );
};

export default Contents;
