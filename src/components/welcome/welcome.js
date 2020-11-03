import React from "react";
import "./welcome.css";

const Welcome = ({ showContent, setShowContent }) => {
  return (
    <div>
      <h1>Fullstack Developer</h1>
      <h1>&</h1>
      <h1>Software Engineer</h1>
      <button onClick={() => setShowContent(!showContent)}>Hello!</button>
    </div>
  );
};

export default Welcome;
