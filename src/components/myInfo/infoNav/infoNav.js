import React from 'react';
import "./infoNav.css";

const InfoNav = ({ setShowInfo, toggleContent }) => {
    return (
        <ul className="infoNav">
            <button onClick={toggleContent}>Back</button>
            <li className="infoOption" onClick={() => setShowInfo("About")}>About</li>
            <li className="infoOption" onClick={() => setShowInfo("skills")}>Skills</li>
            <li className="infoOption" onClick={() => setShowInfo("projects")}>Projects</li>
        </ul>
    )
}

export default InfoNav;
