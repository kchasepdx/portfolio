import React from "react";

import Nav from "./Nav";

function Contact() {
  return (
    <div className="container-fluid proj-div">
      <Nav />
      <div className="section-div">
        <a name="contact">
          <h1>Contact</h1>
        </a>
        <div className="container contact-btns">
          <div className="row icon-row">
            <div className="col">
              <a href="https://github.com/kchasepdx">
                <button
                  onClick="location.href=https:github.com/kchasepdx"
                  id="btnGh"
                  className="btn-primary contact-button"
                >
                  <a
                    href="https://github.com/kchasepdx"
                    className="fab fa-github"
                  ></a>{" "}
                  Github
                </button>
              </a>
            </div>
            <div className="col">
              <a href="mailto:kchasepdx@gmail.com">
                <button id="btnEmail" className="btn-primary contact-button">
                  <a
                    href="mailto:kchasepdx@gmail.com"
                    className="fas fa-at"
                  ></a>{" "}
                  Email
                </button>
              </a>
            </div>
            <div className="col">
              <a href="https://www.linkedin.com/in/kristenchasepdx">
                <button id="btnLinkedIn" className="btn-primary contact-button">
                  <a
                    href="https://www.linkedin.com/in/kristenchasepdx"
                    className="fab fa-linkedin"
                  ></a>{" "}
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
