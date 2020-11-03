import React from "react";

const Welcome = ({ showContent, setShowContent }) => {
  return (
    <div>
      <h2>Fullstack Developer & Software Engineer</h2>
      <button onClick={() => setShowContent(!showContent)}>Hello!</button>
    </div>
  );
};

export default Welcome;
