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
    <div className="container-fluid proj-div">
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
          <button className="btn-primary site-visit">
            <i className="fas fa-sign-in-alt"></i> Visit Site
          </button>
        </a>
        <a
          href="https://github.com/kchasepdx/babybook"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn-primary code-visit">
            <i className="fas fa-code"></i> View code
          </button>
        </a>

        <div className="container-fluid">
          <img
            src={BBGIF}
            alt="gif of user experience on babybook site"
            className="site-gif"
          />
        </div>

        <div className="container proj-cont">
          <h2>Created With:</h2>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>CSS</li>
            <li>FireBase Authorization</li>
            <li>FireStore</li>
            <li>Figma</li>
            <li>FontAwesome</li>
          </ul>

          <h2>Features</h2>
          <hr className="dropdown-divider proj-divider" />

          <h4>Register and Login System</h4>
          <ul>
            <li>Users log in as customers.</li>
            <li>Authentication is provided by Firestore.</li>
            <li>
              Private Routes can't be access unless user is authenticated.
            </li>
          </ul>

          <h4>User Experience</h4>
          <ul>
            <li>
              Navbar highlights the current page and displays UserName(if user
              is logged in)
            </li>
            <li>
              If User has input baby’s birthdate profile home page will display
              number of months or years of baby’s age ( componitized function
              that uses javascript to calculate number of months/years)
            </li>
            <li>
              Profile page also display’s baby’s name and photo, if those have
              been saved by User
            </li>
            <li>
              On the Questionnaire page, User can save information about their
              baby to be viewed in the virtual book. The User’s former answers
              will populate.
            </li>
            <li>
              In baby book birthday displayed in Day of the week, month, year
              format
            </li>
            <li>
              On the Community page users can post stories or questions about
              their little ones.
            </li>
          </ul>

          <h2>Planned Improvements</h2>
          <hr className="dropdown-divider proj-divider" />

          <ul>
            <li>Refactor with redux to add to questionnaire / book.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BabyBook;
