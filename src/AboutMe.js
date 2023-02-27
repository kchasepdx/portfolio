import React from "react";
import kristen from "./Images/kristen-circle.png";
import ku from "./Images/ku.png";
import portland from "./Images/portland.jpeg";
import wrapmate from "./Images/wrapmatelogo.svg";
import finance from "./Images/finance.png";
import world from "./Images/world.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import Nav from "./Nav";

function About() {
  return (
    <div className="container-fluid proj-div">
      <Nav />
      <div className="section-div">
        <a name="about-me">
          <h1 id="about-h1">About Me</h1>
          <div className="container-fluid">
            <img id="hike-pic" src={kristen} alt="Kristen Chase " />
            <ul className="about-me-text list-group">
              <li id="me-card" className="list-group-item">
                Experienced Software Engineer with proven analytic and
                troubleshooting skills, and experience contributing to a
                collaborative work environment. Specializes in JavaScript and
                React. Professional strengths include creative problem-solving,
                clear communication, and time management. Detail-oriented
                mindset from 9+ years of experience in the finance industry.
              </li>
              <img
                className="about-me-img"
                id="ku"
                src={ku}
                alt="University of Kansas Mascot"
              />

              <li id="me-card" className="list-group-item">
                I grew up in Lawrence, KS and graduated from the University of
                Kansas with a BA in Spanish and a Business Minor.
              </li>
              <FontAwesomeIcon icon={faAnglesDown} />
              <img
                className="about-me-img"
                id="portland"
                src={portland}
                alt="portland, oregon"
              />
              <li id="me-card" className="list-group-item">
                Upon graduating I was eager for change and moved to Portland,
                OR. I met my husband here and we now have two kids.
              </li>
              <FontAwesomeIcon icon={faAnglesDown} />
              <img
                className="about-me-img"
                src={finance}
                alt="finance-graphic"
              />
              <li id="me-card" className="list-group-item">
                I secured a great job in finance and continued in that industry
                for a decade. In my free time I learned Javascript and would
                solve coding puzzles....
              </li>
              <FontAwesomeIcon icon={faAnglesDown} />
              <img src={world} alt="eartch" className="about-me-img" />
              <li id="me-card" className="list-group-item">
                {" "}
                During the pandemic I decided to explore coding once again. I
                took a big leap and quit my job in order to devote all of my
                availabe time to learning to code.
              </li>
              <FontAwesomeIcon icon={faAnglesDown} />

              <img
                className="about-me-img"
                id="wm-img"
                src={wrapmate}
                alt="wrapmate logo"
              />
              <li id="me-card" className="list-group-item">
                Wrapmate is an online solution to purchase, design, print, and
                install a high quality vehicle wrap. I work with Product and
                Engineering teams to architect, build, and maintain the website
                and other behind the scenes applications. Responsible for client
                and server-side tasks. Leverage cloudwatch and other debugging
                tools for troubleshooting. Independently generate solutions to
                complex tech problems.
              </li>
            </ul>
          </div>
        </a>
      </div>
    </div>
  );
}

export default About;
