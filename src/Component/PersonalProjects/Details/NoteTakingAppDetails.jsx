import React from "react";
import {
  SiTypescript,
  SiSpringboot,
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
import NoteAppGif from "../../../resources/NoteWebPage.gif";

function NoteTakingAppDetails() {
  const shadows = {
    boxShadow: "10px 10px 54px 0px rgba(0,0,0,0.75)",
  };
  return (
    <div className="about">
      <div className="about-right">
        <h1 className="about-title">Simple Note Taking App</h1>
        <h3 className="about-subtitle">Full Stack Web Application</h3>
        <p className="about-time">[ 12/2022 - 01/2023]</p>
        <p className="about-desc">
          <ul className="about-details">
            <li key={1}>
              This is a web application done to understand end to end full stack
              application building process.
            </li>
            <li key={2}>
              <b>Frontend</b> - This part is being developed using React JS
              framework and TypeScript technology. Styling and structure is done
              through HTML5 and CSS3. Sass library is used to enhance the
              styling structure and code readability.Open source SunEditor
              library is being used a RichTextEditor to take notes.
            </li>
            <li key={3}>
              <b>Backend</b> - This is handled by Java and Springboot framework.
              RESTful API's have been developed to provide required
              functionalities to the frontend and the relevant data is stored
              using MySQL database. Usage of JPA to handle database operations,
              JWT for authentication and also Spring Security to expose only the
              relevant API's.
            </li>
            <li key={4}>
              <b>Functionalities</b> - Creating a new user, adding new user to
              the database, login, logout, creating new note and saving it to
              the database along with the user relationships have been
              implemented so far. There is scope for improvement which has been
              planned for the near future.
            </li>
          </ul>
        </p>
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
          <FaJava />
          &emsp;
          <SiSpringboot />
          &emsp;
          <FaGithubSquare />
          &emsp;
          <SiMysql />
          &emsp;
          <SiApachemaven />
        </div>
      </div>
      <div className="about-left">
        <div className="profile-cover"></div>
        {/* <div className="about-card background"></div> */}
        <div className="about-card" style={shadows}>
          <img
            src={NoteAppGif}
            alt="Certificates"
            className="about-card-image"
          />
        </div>
      </div>
    </div>
  );
}

export default NoteTakingAppDetails;
