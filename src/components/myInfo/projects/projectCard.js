import React from "react";
import "./projects.css";
import { ReactComponent as GitHubIcon } from "../../../assets/icons/github.svg";

const ProjectCard = (props) => {
  const { name, pic, description, techStack, deploy, repo } = props.proj;

  // console.log(props)
  return (
    <div className="projectCard">
      <div className="blurb">
        <a className="projTitle" href={deploy} target="_blank" rel="noreferrer">
          <h2>{name}</h2>
        </a>
        <h4 className="techStack">
          {techStack}{" "}
          <a href={repo} target="_blank" rel="noreferrer">
            <GitHubIcon xmlns={repo} className="projGitHubIcon"  />
          </a>
        </h4>
        <p className="projectDescription">{description}</p>
      </div>
      <img src={pic} alt="" className="projSnapShot" />
    </div>
  );
};

export default ProjectCard;
