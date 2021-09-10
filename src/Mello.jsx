import React, { useState } from "react";
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
            src={MelloGif}
            alt="gif of user experience on showfinder site"
            className="site-gif full-screen-gif"
            onClick={() => setFullScreen(false)}
          />
        </div>
      ) : (
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
            <button className="btn-primary site-visit">
              <i className="fas fa-sign-in-alt"></i>Visit Site
            </button>
          </a>
          <a
            href="https://github.com/kchasepdx/mello"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn-primary code-visit">
              <i className="fas fa-code"></i>View Code
            </button>
          </a>
          <button
            onClick={() => setFullScreen(true)}
            className="btn-primary code-visit"
          >
            <i className="fas fa-film"></i> View GIF
          </button>

          <div className="container proj-cont">
            <div className="container-fluid">
              <p className="proj-desc-bub">
                This app is an e-commerce site where users can purchase two
                types of clothing items. Additionally, users that are
                authenticated as Admins can update the database of products.
              </p>

              <h4 className="desc-h4">Register & Login System</h4>
              <ul className="proj-desc-bub">
                <li>Users can be Customers or Admin.</li>
                <li>Admin can edit, add, and delete products from database.</li>
              </ul>

              <h4 className="desc-h4">User Experience</h4>
              <ul className="proj-desc-bub">
                <li>Customers can view all products or filter by category.</li>
                <li>
                  Customers can add an item to the cart from the storefront or
                  from the product detail page.
                </li>
                <li>
                  The cart contents can be viewed from the dropdown navbar. From
                  here a user can delete items, view subtotal, and go to
                  checkout.
                </li>
                <li>
                  Cart product quantity can be set when adding item to the cart
                  and updated in the cart screen.
                </li>
                <li>
                  Upon checkout the customer will be directed to the Stripe
                  checkout page.
                </li>
              </ul>

              <h4 className="desc-h4">Backend</h4>
              <ul className="proj-desc-bub">
                <li>Node.js</li>
                <li>Express</li>
                <li>Mongoose</li>
                <li>Json Web Token (For authentication)</li>
              </ul>
              <h4 className="desc-h4">Frontend</h4>
              <ul className="proj-desc-bub">
                <li>React</li>
                <li>Redux (Manage app state)</li>
                <li>React-router (To handle routing)</li>
                <li>Axios (For http requests)</li>
                <li>React Bootstrap</li>
              </ul>

              <h4 className="desc-h4">Planned Improvements</h4>

              <ul className="proj-desc-bub">
                <li>Allow admin accounts to create admin accounts.</li>
                <li>Add product rating system.</li>
                <li>Access order detail from Stripe.</li>
                <li>Add features to customer accounts.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mello;
