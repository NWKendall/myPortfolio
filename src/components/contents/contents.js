import React, { useState } from "react";
import "./contents.css";
import bgImage from "../../assets/serey-kim-vUePu7hAYAQ-unsplash.jpg";
import { Welcome } from "../";

const Contents = () => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div
      className="contentsContainer"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="contentsDiv">
        {!showContent ? (
          <Welcome 
            showContent={showContent} 
            setShowContent={setShowContent}
            />
        ) : (
          <div> GUCCI STUFF HERE
             <button onClick={() => setShowContent(!showContent)}>back</button>
          </div>
        )}
      </div>
      <div className="wave"></div>
    </div>
  );
};

export default Contents;
