import React from "react";
import Nav from "./Nav";
import ReactRouterLogo from "./Images/react-router-logo.png";
import ReactLogo from "./Images/react-logo.png";
import JSLogo from "./Images/JSlogo.png";
import BSLogo from "./Images/Bootstrap-logo.png";

function TheCowGoes() {
  return (
    <div className="container-fluid">
      <Nav />
      <div id="showfinder-div">
        <h1 className="proj-headers">The Cow Goes</h1>
        <div className="container-fluid logo-container">
          <img
            className="logo-img"
            id="bs-logo"
            src={BSLogo}
            alt="boostrap logo"
          />
          <img
            className="logo-img"
            id="router-logo"
            src={ReactRouterLogo}
            alt="react router logo"
          />
          <img
            className="logo-img"
            id="react-logo"
            src={ReactLogo}
            alt="react logo"
          />
          <img
            className="logo-img"
            id="js-logo"
            src={JSLogo}
            alt="javascript logo"
          />
        </div>
        <a
          href="https://thecowgoes.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn-primary site-visit">
            <i className="fas fa-sign-in-alt"></i> Visit Site
          </button>
        </a>
        <a
          href="https://github.com/kchasepdx/thecowgoes"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn-primary code-visit">
            <i className="fas fa-code"></i> View code
          </button>
        </a>

        <div className="container bb-cont">
          <div className="col">
            <div className="container-fluid"></div>
          </div>
          <div className="proj-cont">
            <h4 className="desc-h4">About</h4>
            <p className="proj-desc-bub">
              App designed for kids/toddlers. I created it with the goal of
              keeping my daughter entertained during doctor visits. I couldn't
              resist the challenge of creating a memory game.
            </p>

            <h4 className="desc-h4">User Experience</h4>
            <ul className="proj-desc-bub">
              <li>User can play a colorful piano.</li>
              <li>
                User can play a variety of animal sounds and watch as the
                animals spin upon click.
              </li>
              <li>
                User can narrow the options of animals displayed to four and
                then request four more random animals.
              </li>
              <li>User can play a two person game of memory.</li>
            </ul>

            <h4 className="desc-h4">Technology Used</h4>
            <ul className="proj-desc-bub">
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheCowGoes;
