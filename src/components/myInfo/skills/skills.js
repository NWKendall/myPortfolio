import React from "react";
import {
  HTML5Icon,
  CSS3Icon,
  JavaScriptIcon,
  GitIcon,
  NodeJSIcon,
  ReactIcon,
  MaterialUIIcon,
  PythonIcon,
  PostgresIcon,
  DenoIcon,
  CSharpIcon,
  TypeScriptIcon,
  LinuxIcon,
  DockerIcon,
  GitHubActionsIcon,
  WebAssemblyIcon,
} from "./images";
import "./skills.css";

import "./skills.css";
const Skills = () => {
  return (
    <section className="skillsContainer">
      <div className="skills1">
        <h2>skills</h2>
        <HTML5Icon style={{ fill: "white", backgroundColor: "#E34F26" }} />
        <CSS3Icon style={{ fill: "white", backgroundColor: "#1572B6" }} />
        <JavaScriptIcon style={{ fill: "black", backgroundColor: "#F7DF1E" }} />
        <ReactIcon style={{ fill: "black", backgroundColor: "#61DAFB" }} />
        <MaterialUIIcon style={{ fill: "white", backgroundColor: "#0081CB" }} />
        <NodeJSIcon style={{ fill: "white", backgroundColor: "#339933" }} />
        <PostgresIcon style={{ fill: "white", backgroundColor: "#336791" }} />
        <PythonIcon style={{ fill: "white", backgroundColor: "#3776AB" }} />
        <GitIcon style={{ fill: "white", backgroundColor: "#F05032" }} />
      </div>
      <div className="skills2">
        <h2>learning</h2>
        <TypeScriptIcon style={{ fill: "white", backgroundColor: "#007ACC" }} />
        <DenoIcon style={{ fill: "white", backgroundColor: "#000000" }} />
        <LinuxIcon style={{ fill: "black", backgroundColor: "#FCC624" }} />
        <DockerIcon style={{ fill: "white", backgroundColor: "#2496ED" }} />
        <GitHubActionsIcon
          style={{ fill: "white", backgroundColor: "#2088FF" }}
        />
        <CSharpIcon style={{ fill: "white", backgroundColor: "#239120" }} />
        <WebAssemblyIcon
          style={{ fill: "white", backgroundColor: "#654FF0" }}
        />
      </div>
    </section>
  );
};
export default Skills;

{
  /* <img
          style={{ backgroundColor: "#1572B6" }}
          src={css3}
          alt="CSS3"
          title="CSS3"
        />
        <img
          style={{ backgroundColor: "#F7DF1E" }}
          src={javaScript}
          alt="JavaScript"
          title="JavaScript"
        />
        <img
          style={{ backgroundColor: "#F05032" }}
          src={git}
          alt="Git"
          title="Git"
        />
        <img
          style={{ backgroundColor: "#61DAFB" }}
          src={react}
          alt="React"
          title="React"
        />
        <img
          style={{ backgroundColor: "#0081CB" }}
          src={materialUI}
          alt="Material-UI"
          title="Material-UI"
        />
        <img
          style={{ backgroundColor: "#339933" }}
          src={nodeJS}
          alt="Node JS"
          title="Node"
        />
        <img
          style={{ backgroundColor: "#336791" }}
          src={postgres}
          alt="PostgreSQL"
          title="PostgreSQL"
        />
        <img
          style={{ backgroundColor: "#3776AB" }}
          src={python}
          alt="Python"
          title="Python"
        /> */
}
