import React from "react";
import { projectData } from "./data.js";
import ProjectCard from "./projectCard.js";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projectsContainer">
      {projectData.map((proj, key) => (
        <ProjectCard key={key} proj={proj} />
      ))}
    </div>
  );
};

export default Projects;
