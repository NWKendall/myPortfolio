import React from "react";
import {
  html5,
  css3,
  javaScript,
  git,
  nodeJS,
  react,
  materialUI,
  python,
  postgres,
  deno,
  cSharp,
  typeScript,
  linux,
  docker,
  gitHubActions,
  webAssembly,
} from "./images";
import "./skills.css";

import "./skills.css";
const Skills = () => {
  return (
    <section className="skillsContainer">
      <div className="skills1">
        <h2>skills</h2>
        <img
          style={{ backgroundColor: "#E34F26" }}
          src={html5}
          alt="HTML5"
          title="HTML5"
        />
        <img
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
        />
      </div>
      <div className="skills2">
        <h2>learning</h2>
        <img
          style={{ backgroundColor: "#007ACC" }}
          src={typeScript}
          alt="TypeScript JS"
          title="TypeScript"
        />
        <img
          style={{ backgroundColor: "#FFF" }}
          src={deno}
          alt="Deno"
          title="Deno"
        />
        <img
          style={{ backgroundColor: "#FCC624" }}
          src={linux}
          alt="Linux"
          title="Linux"
        />
        <img
          style={{ backgroundColor: "#2496ED" }}
          src={docker}
          alt="Docker"
          title="Docker"
        />
        <img
          style={{ backgroundColor: "#2088FF" }}
          src={gitHubActions}
          alt="GitHub Actions"
          title="GitHub Actions"
        />
        <img
          style={{ backgroundColor: "#239120" }}
          src={cSharp}
          alt="C Sharp"
          title="C#"
        />
        <img
          style={{ backgroundColor: "#654FF0" }}
          src={webAssembly}
          alt="Web Assembly"
          title="Web Assembley (WASM)"
        />
      </div>
    </section>
  );
};
export default Skills;
