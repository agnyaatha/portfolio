import React from "react";

function CourseDetails() {
  return (
    <div className="course-details">
      <h1 className="education-title">
        <span>Courses and Certifications</span>
      </h1>
      <ul className="education-list">
        <li>
          <h3 className="education-type">Responsive Web Design</h3>
          <p className="education-details">freeCodeCamp</p>
        </li>
        <li>
          <h3 className="education-type">
            JavaScript Algorithms and Data Structures
          </h3>
          <p className="education-details">freeCodeCamp </p>
        </li>
        <li>
          <h3 className="education-type">
            Infosys Java SE8 Developer Certification
          </h3>
          <p className="education-details">Infosys Limited</p>
        </li>
        <li>
          <h3 className="education-type">C++ Advanced Topics</h3>
          <p className="education-details">LinkedIn Learning</p>
        </li>
        <li>
          <h3 className="education-type">SQL Essential Training</h3>
          <p className="education-details">LinkedIn Learning</p>
        </li>
        <li>
          <h3 className="education-type">
            Technology Based Entrepreneuship Development Programme (TEDP) in
            Aerospace Technologies
          </h3>
          <p className="education-details">
            Entrepreneurship Development Institute of India
          </p>
        </li>
      </ul>
    </div>
  );
}

export default CourseDetails;
