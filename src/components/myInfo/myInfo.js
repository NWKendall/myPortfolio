import React, { useState } from "react";
import InfoNav from "./infoNav/infoNav.js";

function MyInfo({ toggleContent }) {
    const [showInfo, setShowInfo] = useState("about");
    // about
    // skills
    // projects
    return (
        <div className="infoDiv">
            <InfoNav setShowInfo={setShowInfo} toggleContent={toggleContent} />
            {showInfo === "projects" ? (
                <div>divROJECTS</div>
            ) : showInfo === "skills" ? (
                <div>SKILLS</div>
            ) : (
                        <div>ABOUT</div>
                    )}
        </div>
    );
}

export default MyInfo;
