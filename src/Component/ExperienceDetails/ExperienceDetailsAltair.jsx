import React from "react";
import AltairLogo from "../../resources/altair-logo.png";
import {
  SiCplusplus,
  SiVisualstudio,
  SiJira,
  SiPerforce,
} from "react-icons/si";
import "./ExperienceDetails.css";

function ExperienceDetailsAltair() {
  const imgStyle = {
    objectFit: "contain",
    backgroundColor: "white",
  };

  const imgBorder = {
    border: "3px solid #F44336",
  };

  const bgStyle = {
    backgroundColor: "#F44336",
  };
  return (
    <div className="about">
      <div className="about-left">
        <div className="work-cover"></div>
        <div className="about-card background" style={bgStyle}></div>
        <div className="about-card" style={imgBorder}>
          <img
            src={AltairLogo}
            alt="Certificates"
            className="about-card-image"
            style={imgStyle}
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">Altair India Private Limited</h1>
        <h3 className="about-subtitle">Project Trainee</h3>
        <p className="about-time">[ 08/2019 - 05/2020 ]</p>
        {/* <p className="about-desc"> */}
        <ul className="about-details">
          <li key={1}>
            <b>Feature Manager</b> - Analyze bugs, put a fix and manually test
            those fixes. Actively involved in development and improvement of new
            functionalities. Create new options by modification and usage of
            existing functionalities.
          </li>
          <li key={2}>
            <b>Element remeshing</b> - Finding those code block causing
            performance hindrance to the application and provide an alternate
            solution finally testing those performance improvements
          </li>
        </ul>
        {/* </p> */}
        <br />
        <p className="tool-tech">
          <b> Tools and technologies used</b>
        </p>
        <br />
        <div className="technologies-wrapper">
          <SiCplusplus />
          &emsp;
          <SiVisualstudio />
          &emsp;
          <SiJira />
          &emsp;
          <SiPerforce />
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetailsAltair;
