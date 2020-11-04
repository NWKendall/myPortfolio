import React from "react";
import GhostMessage from "./message";
import "./welcome.css";

const Welcome = ({ showContent, setShowContent }) => {
  return (
    <div>
      <GhostMessage />
      <button onClick={() => setShowContent(!showContent)}>Hello!</button>
    </div>
  );
};

export default Welcome;
