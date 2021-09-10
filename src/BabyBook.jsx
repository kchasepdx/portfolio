import React, { useState } from "react";
import Nav from "./Nav";
import FireBaseLogo from "./Images/firebase.png";
import ReactRouterLogo from "./Images/react-router-logo.png";
import ReactLogo from "./Images/react-logo.png";
import JSLogo from "./Images/JSlogo.png";
import BSLogo from "./Images/Bootstrap-logo.png";
import FigmaLogo from "./Images/figma-logo.png";
import BBGIF from "./Images/BabyBookGIF.gif";

function BabyBook() {
  const [fullScreen, setFullScreen] = useState(false);
  return (
    <div className="container-fluid proj-div">
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
              <i class="far fa-times-circle"></i>
            </button>
          </div>
          <img
            src={BBGIF}
            alt="gif of user experience on showfinder site"
            className="site-gif full-screen-gif"
            onClick={() => setFullScreen(false)}
          />
        </div>
      ) : (
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
          <button
            onClick={() => setFullScreen(true)}
            className="btn-primary code-visit"
          >
            <i class="fas fa-film"></i> View GIF
          </button>

          <div className="container proj-cont">
            <h4 className="desc-h4">Created With:</h4>
            <ul className="proj-desc-bub">
              <li>Javascript</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>CSS</li>
              <li>FireBase Authorization</li>
              <li>FireStore</li>
              <li>Figma</li>
              <li>FontAwesome</li>
            </ul>

            <h4 className="desc-h4">Register and Login System</h4>
            <ul className="proj-desc-bub">
              <li>Users log in as customers.</li>
              <li>
                You can try it out with username: test@test.com and pw: testuser
              </li>
              <li>Authentication is provided by Firestore.</li>
              <li>
                Private Routes can't be access unless user is authenticated.
              </li>
            </ul>

            <h4 className="desc-h4">User Experience</h4>
            <ul className="proj-desc-bub">
              <li>
                Navbar highlights the current page and displays UserName(if user
                is logged in)
              </li>
              <li>
                If User has input baby’s birthdate profile home page will
                display number of months or years of baby’s age ( componitized
                function that uses javascript to calculate number of
                months/years)
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

            <h4 className="desc-h4">Planned Improvements</h4>

            <ul className="proj-desc-bub">
              <li>Refactor with redux to add to questionnaire / book.</li>
              <li>
                Add to the virtual baby book so that users can create their own
                custom pages.
              </li>
              <li>
                Enable users to reply to other user’s comments on the community
                page.
              </li>
              <li>Add a search feature.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default BabyBook;
