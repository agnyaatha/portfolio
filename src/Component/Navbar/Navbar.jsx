import React from "react";
import "./Navbar.css";
import { SlMenu } from "react-icons/sl";

function Navbar() {
  // const hamburger = document.getElementById("hamburger");

  const handleHamburger = () => {
    const navList = document.getElementById("navbar-list");
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
        <li key={1}>
          <a
            href="#introduction"
            onClick={() => {
              handleHamburger();
            }}
          >
            About Me
          </a>
        </li>
        <li key={2}>
          <a
            href="#workExperience"
            onClick={() => {
              handleHamburger();
            }}
          >
            Work Experience
          </a>
        </li>
        <li key={3}>
          <a
            href="#personalProjects"
            onClick={() => {
              handleHamburger();
            }}
          >
            Personal Projects
          </a>
        </li>
        <li key={4}>
          <a
            href="#educationSection"
            onClick={() => {
              handleHamburger();
            }}
          >
            Education and Skills
          </a>
        </li>
        <li key={5}>
          <a
            href="#contactsSection"
            onClick={() => {
              handleHamburger();
            }}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
