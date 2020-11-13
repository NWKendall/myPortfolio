import React from 'react';
import LambdaCert from "../../../assets/images/lambdaBadge.png";
import "./about.css";

const About = () => {
    return (
        <section className="aboutDiv">
            <section className="aboutText">
                <p>After providing ABA therapy to kids with Autism for four years, the automation of information processing increasingly became a bigger issue. No doubt it's a similar story in other fields too.</p>

                <p>The realization dawned:</p>

                <h3>EVERYTHING IS BEING AUTOMATED. EVERYTHING IS GOING ONLINE.</h3>
                <p>Fortunately, I've always had a fascination with computers being an avid hobbyist. This further inspired me to learn and become a software engineer. So I took the plunge to change my career with <a  href="https://lambdaschool.com/" target="_blank" rel="noreferrer">Lambda School</a> in their Full Stack Web Development program, Graduating in August 2020.</p>

                <p>And I haven't looked back!<span>🚀</span></p>
            </section>
            <section className="aboutImage">
                <a href="https://www.youracclaim.com/badges/d911bb88-157a-4d09-80ec-60c7f224fb45/embedded"  target="_blank" rel="noreferrer">
                    <img src={LambdaCert} alt="My Lambda Certificate" className="picture"/>
                </a>
            </section>
        </section>
    )
}

export default About
