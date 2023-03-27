import React from "react";
import { SiReact } from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaGithubSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import FCCGif from "../../../resources/freeCodePage.gif";

function FreeCodeCampApp() {
  const shadows = {
    boxShadow: "10px 10px 54px 0px rgba(0,0,0,0.75)",
  };
  return (
    <div className="about">
      <div className="about-right">
        <h1 className="about-title">FreeCodeCamp Project</h1>
        <h3 className="about-subtitle">Frontend development using React JS</h3>
        <p className="about-time">[ 10/2022 - 11/2022]</p>
        {/* <p className="about-desc"> */}
        <ul className="about-details">
          <li key={1}>
            This is a simple web application done as a part of freeCodeCamp
            projects to understand frontend part of web development.
          </li>
          <li key={2}>
            <b>Frontend</b> - This part is being developed using React JS
            framework and Javascript language. Styling and structure is done
            through HTML5 and CSS3. Understading of data structures and
            algorithms and React hooks were the key takeaways from this project.
          </li>
          <li key={4}>
            <b>Functionalities</b> -
            <ul>
              <li>
                <b>Random Quote generator</b> which makes an public api call and
                displays quote
              </li>
              <li>
                <b>Drum Machine</b> which generates pre defined sound on click
                of the provided buttons
              </li>
              <li>
                <b>Basic Calculator</b> which performs simple calculations which
                helped me to undertand logic building process
              </li>
              <li>
                <b>Markdown previewer</b> which displays the mardown script into
                formatted text
              </li>
              <li>
                <b>Pomodoro Timer</b> which is a simple session and leisure
                timer application
              </li>
            </ul>
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
          <IoLogoJavascript />
          &emsp;
          <SiReact />
          &emsp;
          <FaGithubSquare />
        </div>
      </div>
      <div className="about-left">
        <div className="profile-cover"></div>
        {/* <div className="about-card background"></div> */}
        <div className="about-card" style={shadows}>
          <img src={FCCGif} alt="Certificates" className="about-card-image" />
        </div>
      </div>
    </div>
  );
}

export default FreeCodeCampApp;
