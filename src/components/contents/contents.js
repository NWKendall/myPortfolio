import React, { useState } from "react";
import "./contents.css";
import GhostMessage from "../ghostMessage/ghostMessage";

const Contents = () => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="contentsDiv">
      {!showContent ? (
        <GhostMessage />
      ) : (
        <div>
          {" "}
          GUCCI STUFF HERE
          <button onClick={() => setShowContent(!showContent)}>back</button>
        </div>
      )}
      <div className="wave"></div>
    </div>
  );
};

export default Contents;
