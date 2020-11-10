import React from 'react'
import { html5, css3, javaScript, git, nodeJS, react, materialUI, python, postgres, deno, cSharp, typeScript, linux, docker, gitHubActions, webAssembly } from "./images";
import "./skills.css"

import "./skills.css"
const Skills = () => {
    return (
        <section className="skillsSection">
            <div className="skills">
                <h2>skills</h2>
                <div><img style={{ backgroundColor: "#E34F26" }} src={html5} alt="" /></div>
                <div><img style={{ backgroundColor: "#1572B6" }} src={css3} alt="" /></div>
                <div><img style={{ backgroundColor: "#F7DF1E" }} src={javaScript} alt="" /></div>
                <div><img style={{ backgroundColor: "#F05032" }} src={git} alt="" /></div>
                <div><img style={{ backgroundColor: "#61DAFB" }} src={react} alt="" /></div>
                <div><img style={{ backgroundColor: "#0081CB" }} src={materialUI} alt="" /></div>
                <div><img style={{ backgroundColor: "#339933" }} src={nodeJS} alt="" /></div>
                <div><img style={{ backgroundColor: "#336791" }} src={postgres} alt="" /></div>
                <div><img style={{ backgroundColor: "#3776AB" }} src={python} alt="" /></div>
            </div>
            <div className="skills">
                <h2>learning</h2>
                <div><img style={{ backgroundColor: "#007ACC" }} src={typeScript} alt="TypeScript JS" /></div>
                <div><img style={{ backgroundColor: "#FFF" }} src={deno} alt="Deno JS" /></div>
                <div><img style={{ backgroundColor: "#FCC624" }} src={linux} alt="Linux" /></div>
                <div><img style={{ backgroundColor: "#2496ED" }} src={docker} alt="Docker" /></div>
                <div><img style={{ backgroundColor: "#2088FF" }} src={gitHubActions} alt="GitHub Actions" /></div>
                <div><img style={{ backgroundColor: "#239120" }} src={cSharp} alt="C Sharp" /></div>
                <div><img style={{ backgroundColor: "#654FF0" }} src={webAssembly} alt="Web Assembly" /></div>
            </div>
        </section>
    )
}
export default Skills
