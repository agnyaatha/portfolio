import React from "react";
import "./ExperienceDetails.css";
import InfosysLogo from "../../resources/infosys-logo.png";

import {
  SiTypescript,
  SiJest,
  SiSpringboot,
  SiJunit5,
  SiReact,
  SiMysql,
  SiApachemaven,
} from "react-icons/si";
import {
  FaCss3Alt,
  FaJava,
  FaHtml5,
  FaSass,
  FaGithubSquare,
} from "react-icons/fa";

function ExperienceDetailsInfosys() {
  const imgStyle = {
    border: "3px solid blue",
  };
  return (
    <div className="about">
      <div className="about-left">
        <div className="work-cover"></div>
        <div className="about-card background"></div>
        <div className="about-card" style={imgStyle}>
          <img
            src={InfosysLogo}
            alt="Certificates"
            className="about-card-image"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">Infosys Limited</h1>
        <h3 className="about-subtitle">
          Full Stack Web Developer | Systems Engineer
        </h3>
        <p className="about-time">[ 10/2021 - Present ]</p>
        {/* <p className="about-desc"> */}
        <ul className="about-details">
          <li key={1}>
            <b>Apple Account</b> - Currently working as a web developer for one
            of the Apple's web application with primary focus on frontend part
            creating new functionalities as per the requirement and I am also
            actively involved in fixing API's and testing those.
          </li>
          <li key={2}>
            <b>Talent Dashboard Portal</b> - It is a single-point reference to
            the talent pool available for the program. The web application
            contains details about trainees and the onsite and offshore talents
            available for the various skill streams. I was working on developing
            RESTful API using Spring framework in the backend and Angular on the
            frontend.
          </li>
        </ul>
        {/* </p> */}
        <br />
        <p className="tool-tech">
          <b> Tools and technologies used</b>
        </p>
        <br />
        <div className="technologies-wrapper">
          <FaHtml5 />
          &emsp;
          <FaCss3Alt />
          &emsp;
          <SiTypescript />
          &emsp;
          <SiReact />
          &emsp;
          <FaSass />
          &emsp;
          <SiJest />
          &emsp;
          <FaJava />
          &emsp;
          <SiSpringboot />
          &emsp;
          <SiJunit5 />
          &emsp;
          <FaGithubSquare />
          &emsp;
          <SiMysql />
          &emsp;
          <SiApachemaven />
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetailsInfosys;
