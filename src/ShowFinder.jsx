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
            <i class="fas fa-sign-in-alt"></i> Visit Site
          </button>
        </a>
        <a
          href="https://github.com/kchasepdx/showfinder"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn-primary code-visit">
            <i class="fas fa-code"></i> View code
          </button>
        </a>

        <div className="container bb-cont">
          <div className="row icon-row">
            <div className="col">
              <div className="container-fluid">
                <img
                  src={SFGif}
                  alt="gif of user experience on showfinder site"
                  className="site-gif"
                />
              </div>
            </div>
            <div className="col">
              <ul className="list-group">
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> My first solo project
                  after finishing the Udemy Bootcamp.
                </li>
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> Color pallette
                  selected with ColorHunt.
                </li>
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> API - The Movie
                  Database to source television show suggestions.
                </li>
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> Skip the Quiz
                  generates a random show from The Movie Database's collection.
                </li>
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> Taking the quiz will
                  sort throught the shows and offer a more tailored response.
                </li>
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> The Trivia Quiz is
                  ten questions. The Score is announced on the last page.
                </li>

                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> I learned a lot about
                  React, and using APIs in developing this app. I also used a
                  lot of custom CSS which I learned is a lot harder than it
                  looks.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowFinder;
