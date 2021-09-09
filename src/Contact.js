import React from "react";
import hikepic from "./Images/me-hiking.png";

import Nav from "./Nav";

function Contact() {
  return (
    <div className="container-fluid proj-div">
      <Nav />
      <div className="section-div">
        <a name="contact">
          <h1>Contact</h1>
          <img id="hike-pic" src={hikepic} alt="Kristen Chase hiking" />
        </a>
        <div className="container contact-btns">
          <div className="row icon-row">
            <div className="col">
              <button className="btn-primary contact-button">
                <a
                  href="https://github.com/kchasepdx"
                  className="fab fa-github"
                ></a>{" "}
                Github
              </button>
            </div>
            <div className="col">
              <button className="btn-primary contact-button">
                <a href="mailto:kchasepdx@gmail.com" className="fas fa-at"></a>{" "}
                Email
              </button>
            </div>
            <div className="col">
              <button className="btn-primary contact-button">
                <a
                  href="https://www.linkedin.com/in/kristenchasepdx"
                  className="fab fa-linkedin"
                ></a>{" "}
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
