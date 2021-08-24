import React from "react";
import Nav from "./Nav";
import FireBaseLogo from "./Images/firebase.png";
import ReactRouterLogo from "./Images/react-router-logo.png";
import ReactLogo from "./Images/react-logo.png";
import JSLogo from "./Images/JSlogo.png";
import BSLogo from "./Images/Bootstrap-logo.png";
import FigmaLogo from "./Images/figma-logo.png";
import NodeJS from "./Images/nodejs.png";
import MongoDB from "./Images/mongodblogo.png";
import StripeLogo from "./Images/stripelogo.png";
import ReduxLogo from "./Images/redux.png";
import MelloGif from "./Images/mellogif.gif";

function Mello() {
  return (
    <div className="container-fluid">
      <Nav />
      <div id="mello-div">
        <h1 className="proj-headers">Mello</h1>
        <div className="container-fluid logo-container">
          <img
            className="logo-img"
            id="figma-logo"
            src={FigmaLogo}
            alt="figma logo"
          />
          <img
            className="logo-img"
            id="bs-logo"
            src={BSLogo}
            alt=" bootstrap logo"
          />
          <img
            className="logo-img"
            id="firebase-logo"
            src={FireBaseLogo}
            alt=" firebase logo"
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
            alt=" react logo"
          />
          <img
            className="logo-img"
            id="js-logo"
            src={JSLogo}
            alt=" javascript logo"
          />
          <img
            className="logo-img"
            id="js-logo"
            src={NodeJS}
            alt=" NodeJS logo"
          />
          <img
            className="logo-img"
            id="js-logo"
            src={MongoDB}
            alt=" MongoDB logo"
          />
          <img
            className="logo-img"
            id="js-logo"
            src={StripeLogo}
            alt=" MongoDB logo"
          />
          <img
            className="logo-img"
            id="js-logo"
            src={ReduxLogo}
            alt=" MongoDB logo"
          />
        </div>
        <a
          href="https://mellostore.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <button id="bb-visit" className="btn-primary">
            Visit Site
          </button>
        </a>

        <div className="container bb-cont">
          <div className="row icon-row">
            <div className="col">
              <div className="container-fluid">
                <img
                  id="mello-gif"
                  src={MelloGif}
                  alt="gif of user experience on mello site"
                />
              </div>
            </div>
            <div className="col">
              <ul className="list-group">
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> I built the frontend
                  and backend for this app using React, React Redux, NodeJS, and
                  MongoDB. It has been deployed with Heroku.
                </li>
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> Stripe is utilized
                  for payment processing.
                </li>
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> Inventory is
                  automatically updated upon successful order from Stripe.
                </li>
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> Admin users can log
                  in and update product information and create products on the
                  backend.
                </li>
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> Navbar has a dropdown
                  cart display and shows UserName(if logged in).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mello;
