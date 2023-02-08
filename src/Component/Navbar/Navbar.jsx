import React from "react";
import "./Navbar.css";
import { SlMenu } from "react-icons/sl";

function Navbar() {
  const navList = document.getElementById("navbar-list");
  // const hamburger = document.getElementById("hamburger");

  const handleHamburger = () => {
    navList.classList.toggle("show-list");
  };

  return (
    <div className="navigation-bar">
      <button
        className="hamburger"
        id="hamburger"
        onClick={() => {
          handleHamburger();
        }}
      >
        <SlMenu />
      </button>
      {/* <a href="" className="nav-logo"></a> */}
      <ul className="navbar" id="navbar-list">
        <li>
          <a href="#introduction">About Me</a>
        </li>
        <li>
          <a href="#workExperience">Work Experience</a>
        </li>
        <li>
          <a href="#personalProjects">Personal Projects</a>
        </li>
        <li>
          <a href="#educationSection">Education and Skills</a>
        </li>
        <li>
          <a href="#contactsSection">Contact Me</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
