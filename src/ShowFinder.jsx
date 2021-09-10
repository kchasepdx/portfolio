import React from "react";
import Nav from "./Nav";
import ReactRouterLogo from "./Images/react-router-logo.png";
import ReactLogo from "./Images/react-logo.png";
import JSLogo from "./Images/JSlogo.png";
import BSLogo from "./Images/Bootstrap-logo.png";
import SFGif from "./Images/showfinder.gif";

function ShowFinder() {
  return (
    <div className="container-fluid">
      <Nav />
      <div id="showfinder-div">
        <h1 className="proj-headers">Show Finder</h1>
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
          href="https://theshowfinder.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn-primary site-visit">
            <i className="fas fa-sign-in-alt"></i> Visit Site
          </button>
        </a>
        <a
          href="https://github.com/kchasepdx/showfinder"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn-primary code-visit">
            <i className="fas fa-code"></i> View code
          </button>
        </a>

        <div className="container bb-cont">
          <div className="col">
            <div className="container-fluid">
              <img
                src={SFGif}
                alt="gif of user experience on showfinder site"
                className="site-gif"
              />
            </div>
          </div>
          <div className="proj-cont">
            <h2>Features</h2>
            <hr className="dropdown-divider proj-divider" />
            <h4>User Experience</h4>
            <ul>
              <li>
                User choose to Skip the Quiz and get an instant tv show
                recommendation. This recommendation will be a randomly selected
                show.
              </li>
              <li>
                If User chooses, there is a 3 question quiz to generate a more
                tailored recommendation.
              </li>
              <li>
                User can take a trivia quiz that has ten questions about
                different tv shows. Score will show at the end of the quiz.
              </li>
            </ul>
            <h4>API</h4>
            <span>
              <a href="https://www.themoviedb.org/documentation/api">
                The Movie Database Documentation
              </a>
            </span>
            <p>
              The site uses API from The Movie Database to generate tv show
              recommendations.
            </p>

            <h4>Technology Used</h4>
            <ul>
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

export default ShowFinder;
