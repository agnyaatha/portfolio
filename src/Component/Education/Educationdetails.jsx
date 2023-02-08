import React from "react";

function Educationdetails() {
  return (
    <div className="education-details">
      <h1 className="education-title">
        <span>Education</span>
      </h1>
      <ul className="education-list">
        <li>
          <h3 className="education-type">BE in Mechanical Engineering</h3>
          <p className="education-details">
            JSS Science and Technical University, Mysore [2015-2019]
          </p>
          <p className="education-details">
            CGPA - <b>9.16</b>
          </p>
        </li>
        <li>
          <h3 className="education-type">Pre-University</h3>
          <p className="education-details">SRGVP, Mysore [2013-2015]</p>
          <p className="education-details">
            Percentage - <b>92.67%</b>
          </p>
        </li>
        <li>
          <h3 className="education-type">Matriculation</h3>
          <p className="education-details">BMEMS, Koppa [2012-2013]</p>
          <p className="education-details">
            Percentage - <b>90.24%</b>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Educationdetails;
