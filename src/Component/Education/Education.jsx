import React from "react";
import SectionDivider from "../../Utils/SectionDivider";
import CourseDetails from "./CourseDetails";
import Educationdetails from "./Educationdetails";
import "./Educations.css";
import Extracurricular from "./Extracurricular";
import Skills from "./Skills";

function Education() {
  return (
    <div className="education" id="educationSection">
      <div className="education-wrapper">
        <Educationdetails />
        <br />
        <SectionDivider />
        <CourseDetails />
      </div>
      <div className="skills-wrapper">
        <Skills />
        <br />
        <SectionDivider />
        <Extracurricular />
        <br />
        <SectionDivider />
        <div className="language-section">
          <h1 className="education-title">
            <span>Language</span>
          </h1>
          <ul className="language-list">
            <li key="english">English</li>
            <li key="kannada">Kannada</li>
            <li key="hindi">Hindi</li>
          </ul>
        </div>
        <br />
        <SectionDivider />
        <div className="hobbies-section">
          <h1 className="education-title">
            <span>Hobbies</span>
          </h1>
          <ul className="hobbies-list">
            <li key="football">Football</li>
            <li key="badminton">Badminton</li>
            <li key="junk-art">Junk art</li>
            <li key="pencil-sketch">Pencil Sketch</li>
            <li key="nonfiction-books">Non-fiction books</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
