import React, { useState } from "react";
import Nav from "./Nav";
import ReactRouterLogo from "./Images/react-router-logo.png";
import ReactLogo from "./Images/react-logo.png";
import JSLogo from "./Images/JSlogo.png";
import BSLogo from "./Images/Bootstrap-logo.png";
import SFGif from "./Images/showfinder.gif";

function ShowFinder() {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <div className="container-fluid">
      <Nav />
      {fullScreen ? (
        <div className="container-fluid full-gif-div">
          <div className="btn-div">
            <button className="btn-primary site-visit">
              <i className="fas fa-sign-in-alt"></i>
            </button>
            <button
              className="btn-primary code-visit"
              onClick={() => setFullScreen(false)}
            >
              <i className="far fa-times-circle"></i>
            </button>
          </div>
          <img
            src={SFGif}
            alt="gif of user experience on showfinder site"
            className="site-gif full-screen-gif"
            onClick={() => setFullScreen(false)}
          />
        </div>
      ) : (
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
          <button
            onClick={() => setFullScreen(true)}
            className="btn-primary code-visit"
          >
            <i className="fas fa-film"></i> View GIF
          </button>

          <div className="container bb-cont">
            <div className="proj-cont">
              <h4 className="desc-h4">About</h4>
              <p className="proj-desc-bub">
                My first independent idea project. I wanted to start with a quiz
                app in React and use an API. The end result has a survey type of
                quiz, a trivia quiz, and a random suggestion generator.{" "}
              </p>
              <h4 className="desc-h4">Challenges</h4>
              <ul className="proj-desc-bub">
                <li>
                  Conditional rendering, which was used to switch questions /
                  answers.
                </li>
                <li>
                  Coming up against limitations of the data in the API and
                  ultimately deciding to pare back my survey questions from 10
                  to 3.
                </li>
                <li>
                  Tallying score in trivia quiz (As a challenge, I wanted to do
                  this without googling)
                </li>
              </ul>
              <h4 className="desc-h4">User Experience</h4>
              <ul className="proj-desc-bub">
                <li>
                  User may choose to Skip the Quiz and get an instant tv show
                  recommendation. This recommendation will be a randomly
                  selected show.
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
              <h4 className="desc-h4">API</h4>
              <div id="app-link-div">
                <a
                  id="api-link"
                  href="https://www.themoviedb.org/documentation/api"
                >
                  The Movie Database Documentation
                </a>
              </div>
              <p className="proj-desc-bub">
                The site uses API from The Movie Database to generate tv show
                recommendations.
              </p>
              <h4 className="desc-h4">Technology Used</h4>
              <ul className="proj-desc-bub">
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
              </ul>
              <h4 className="desc-h4">Planned Improvements</h4>
              <ul className="proj-desc-bub">
                <li>Refactor, remove unnecessary files</li>
                <li>
                  Change trivia quiz to pull from an array of questions /
                  answers
                </li>
                <li>Add to the survey questions.</li>
                <li>
                  Display more than text in the recommendation and link to
                  places to watch.
                </li>
                <li>
                  Would like to display more than text in the recommendation and
                  link to places to watch.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowFinder;
