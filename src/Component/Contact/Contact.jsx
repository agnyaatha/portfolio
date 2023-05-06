import React from "react";
import { GrMail } from "react-icons/gr";
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import { FaPhoneSquareAlt, FaMapMarkedAlt } from "react-icons/fa";
import "./Contact.css";
import ReactGA from "react-ga";

const linkedIn = "https://www.linkedin.com/in/chethan-c-532619168/";
const github = "https://github.com/agnyaatha";
const instagram = "https://www.instagram.com/freak__0_0/";

function Contact() {
  const handleClick = () => {
    alert("SERVICE NOT AVAILABLE AT THE MOMENT");
  };

  return (
    <div className="contact" id="contactsSection">
      <div className="contact-background"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">
            <span>Contact Me...</span>
          </h1>
          <br />
          <div className="contact-list-item">
            <h4>
              <GrMail />
              &emsp;chethancchethu10@gmail.com
            </h4>
            <h4>
              <FaPhoneSquareAlt />
              &emsp;+91-9008071217
            </h4>
            <h4>
              <FaMapMarkedAlt />
              &emsp;Mysore, Karnataka
            </h4>
          </div>
          <br />
          <br />
          <div className="social-buttons">
            <a
              href={linkedIn}
              onClick={() => {
                ReactGA.event({
                  category: "contactLink",
                  action: "openLinkedIn",
                  label: "linkedInButton",
                });
              }}
            >
              <SiLinkedin />
            </a>
            &emsp;
            <a
              href={github}
              onClick={() => {
                ReactGA.event({
                  category: "contactLink",
                  action: "openGithub",
                  label: "githubButton",
                });
              }}
            >
              <SiGithub />
            </a>
            &emsp;
            <a
              href={instagram}
              onClick={() => {
                ReactGA.event({
                  category: "contactLink",
                  action: "openInstagram",
                  label: "instagramButton",
                });
              }}
            >
              <SiInstagram />
            </a>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-description">
            Would you like to <b>drop a message</b> in my mailbox ?
          </p>
          <p className="contact-warning">
            *Temporarily below service is not available
          </p>
          <form action="" id="contactForm">
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Your name"
            />
            <input
              type="text"
              name="user_subject"
              id="user_subject"
              placeholder="Subject "
            />
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Email"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Enter your message here..."
            ></textarea>
            <button
              id="submitButton"
              onClick={(event) => {
                event.preventDefault();
                handleClick();
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
