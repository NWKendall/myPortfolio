import React from "react";
import "./projects.css";
import { ReactComponent as GitHubIcon } from "../../../assets/icons/github.svg";

const ProjectCard = (props) => {

  const { name, pic, description, techStack, deploy, repo } = props.proj;

  // console.log(props)
  return (
    <div className="projectCard">
      <h4>{name}</h4>
      <p>{techStack}</p>
      <p>{description}</p>

    </div>
  );
};

export default ProjectCard;
