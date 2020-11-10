import React, { useState } from "react";
import { InfoNav, About, Skills } from "./";
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
                    <Skills />
                ) : (
                            <About />
                        )}

            </div>
        </div>
    );
}

export default MyInfo;
