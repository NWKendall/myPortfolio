import React, { useState } from "react";
import InfoNav from "./infoNav/infoNav.js";
import About from "./about/about.js";
import "./myInfo.css";

function MyInfo({ toggleContent }) {
    const [showInfo, setShowInfo] = useState("about");
    return (
        <div className="infoDiv">
            <InfoNav setShowInfo={setShowInfo} toggleContent={toggleContent} />
            <div className="infoContents">
            {showInfo === "projects" ? (
                <div>divROJECTS</div>
            ) : showInfo === "skills" ? (
                <div>SKILLS</div>
            ) : (
                <About />
            )}

            </div>
        </div>
    );
}

export default MyInfo;
