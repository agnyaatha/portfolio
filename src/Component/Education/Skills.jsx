import React from "react";
import {} from "react-icons/ai";
import {} from "react-icons/di";
import {
  SiTypescript,
  SiJest,
  SiSpringboot,
  SiJunit5,
  SiCplusplus,
  SiReact,
  SiMysql,
  SiApachemaven,
  SiHibernate,
} from "react-icons/si";
import {
  FaCss3Alt,
  FaJava,
  FaHtml5,
  FaSass,
  FaGithubSquare,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const SKILL_SET = [
  ["HTML", <FaHtml5 />],
  ["CSS", <FaCss3Alt />],
  ["JavaScript", <IoLogoJavascript />],
  ["TypeScript", <SiTypescript />],
  ["React JS", <SiReact />],
  ["Sass", <FaSass />],
  ["Jest", <SiJest />],
  ["Java", <FaJava />],
  ["Springboot", <SiSpringboot />],
  ["Junit", <SiJunit5 />],
  ["C++", <SiCplusplus />],
  ["Github", <FaGithubSquare />],
  ["MySQL", <SiMysql />],
  ["Maven", <SiApachemaven />],
  ["JPA/Hibernate", <SiHibernate />],
];

function Skills() {
  const skillsList = SKILL_SET.map((item, index) => {
    return (
      <div className="skill-button" key={index}>
        <span>{item[0]} </span>
        <span>{item[1]}</span>
      </div>
    );
  });

  return (
    <div className="skills-section">
      <h1 className="skills-title">
        <span>Skills</span>
      </h1>
      <div className="skills-list">{skillsList}</div>
    </div>
  );
}

export default Skills;
