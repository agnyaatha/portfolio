import React from "react";
import "./Intro.css";
import Profilepic from "../../resources/profile-pic.png";

function Intro() {
  return (
    <div className="intro" id="introduction">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <div className="intro-heading">
            <h2 className="intro-heading">Hello, My name is</h2>
            <h1 className="intro-name">Chethan C</h1>
            <div className="intro-title">
              <div className="intro-title-wrapper">
                <div className="intro-title-item">Full Stack Developer</div>
                <div className="intro-title-item">Systems Engineer</div>
                <div className="intro-title-item">Java Developer</div>
                <div className="intro-title-item">Ex Project Trainee</div>
              </div>
            </div>
            <br />
            <p className="intro-description">
              Experienced Web Developer adept in all stages of web development.
              Knowledgeable in the user interface, testing, and debugging
              processes. Equipped with a diverse and promising skill set
              including Java, React JS, HTML, CSS, Springboot, MySQL, Typescript
              and Object Oriented Programming. Able to effectively self-manage
              during independent projects and collaborate in a team setting.
            </p>
          </div>
          <br />
          <div className="download-button">
            {/* <a href="../../resources/ChethanResume.pdf" download> */}
            <button
              onClick={() =>
                window.open(
                  require("../../resources/ChethanResume.pdf"),
                  "_blank"
                )
              }
            >
              Download resume
            </button>
            {/* </a> */}
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="profile-cover"></div>
        <img src={Profilepic} alt="Profile" className="profile-picture" />
      </div>
    </div>
  );
}

export default Intro;
