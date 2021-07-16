import React from "react";
import Nav from "./Nav";
import ReactRouterLogo from "./Images/react-router-logo.png";
import ReactLogo from "./Images/react-logo.png";
import JSLogo from "./Images/JSlogo.png";
import BSLogo from "./Images/Bootstrap-logo.png";

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
        <a href="https://kchasepdx.github.io/showfinder">
          <button className="btn-primary" id="sf-visit">
            Visit
          </button>
        </a>
      </div>
    </div>
  );
}

export default ShowFinder;
