import React from "react";
import Nav from "./Nav";
import FireBaseLogo from "./Images/firebase.png";
import ReactRouterLogo from "./Images/react-router-logo.png";
import ReactLogo from "./Images/react-logo.png";
import JSLogo from "./Images/JSlogo.png";
import BSLogo from "./Images/Bootstrap-logo.png";
import FigmaLogo from "./Images/figma-logo.png";
import BBGIF from "./Images/BabyBookGIF.gif";

function BabyBook() {
  return (
    <div className="container-fluid">
      <Nav />
      <div id="baby-book-div">
        <h1 className="proj-headers">Baby Book</h1>
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
        </div>
        <a
          href="https://baby-book.netlify.app"
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
                  id="babybook-gif"
                  src={BBGIF}
                  alt="gif of user experience on babybook site"
                />
              </div>
            </div>
            <div className="col">
              <ul className="list-group">
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> Original designs
                  imagined in Figma. Background rainbow on Landing Page created
                  using radial-gradient
                </li>
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> Firebase utilized for
                  Authorization and Database.
                </li>
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> React Router used for
                  individual, public and private routes. Private Routes can’t be
                  accessed unless user is logged in.
                </li>
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> Navbar highlights the
                  current page and displays UserName(if entered).
                </li>
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> If User has input
                  baby’s birthdate, the profile home page will display number of
                  months or years of baby’s age (componitized function that uses
                  javascript to calculate number of months/years). Profile page
                  also display’s baby’s name and photo, if those have been saved
                  by User.
                </li>
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> On the Questionnaire
                  page, User can save information about their baby to be viewed
                  in the virtual book. The User’s former answers will populate
                  when Questionnaire is revisited.
                </li>
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> Created function to
                  display birthday in Day of the week, month, year format.
                </li>
                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> On the Community page
                  users can post stories or questions about their little ones.
                  Comments display user names and are sorted by newest to
                  oldest.
                </li>

                <li className="list-group-item">
                  <i class="fas fa-check-circle"> {""}</i> Used Google Firebase
                  to store posts and user comments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BabyBook;
