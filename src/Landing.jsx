import "./App.css";
import React from "react";
import Nav from "./Nav";
import screenshot from "./Images/code-screenshot.png";

function App() {
  return (
    <div className="App container-fluid">
      <Nav />
      <div>
        <div id="background-img">
          <img id="code-pic" src={screenshot} alt="code" />
        </div>
        <div className="container-fluid landing-div">
          <div id="div-text">
            <h1 className="App-header">Kristen Chase</h1>
            <p className="landing-p">Portland-based Front End Web Developer</p>
            <div className="container">
              <div className="row icon-row">
                <div className="col">
                  <a
                    href="https://github.com/kchasepdx"
                    className=" fab fa-github contact-link"
                  ></a>
                </div>
                <div className="col">
                  <a
                    href="mailto:kchasepdx@gmail.com"
                    className="fas fa-at contact-link"
                  ></a>
                </div>
                <div className="col">
                  <a
                    href="https://www.linkedin.com/in/kristenchasepdx"
                    className="fab fa-linkedin contact-link"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
