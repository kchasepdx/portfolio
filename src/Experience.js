import React, { useState } from "react";
import pca from "./Images/PCA-logo.png";
import coding from "./Images/coding.png";
import meketa from "./Images/Meketa.png";
import wrapmate from "./Images/wrapmatelogo.svg";
import Nav from "./Nav";

function Experience() {
  const [fullPCA, setFullPCA] = useState(false);
  const [fullMIG, setFullMIG] = useState(false);
  const [fullSD, setFullSD] = useState(false);
  const [fullWM, setFullWM] = useState(false);

  function viewFull(e) {
    if (e.target.parentElement.id === "PCA") {
      setFullPCA(!fullPCA);
    } else if (e.target.parentElement.id === "Meketa") {
      setFullMIG(!fullMIG);
    } else if (e.target.parentElement.id === "softDev") {
      setFullSD(!fullSD);
    } else if (e.target.parentElement.id === "wrapmateBtn") {
      setFullWM(!fullWM);
    } else {
      console.log(e);
      console.log(e.target.parentElement.id);
    }
  }

  return (
    <div className="container-fluid proj-div">
      <Nav />
      <div className="section-div">
        <a name="experience">
          <h1 id="exp-header">Experience</h1>
        </a>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card exp-card">
                <a
                  href="https:/wrapmate.com"
                  target="_blank"
                  rel="noreferrer"
                ></a>
                <img
                  id="wrapmate-logo"
                  src={wrapmate}
                  alt="code icon"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5>
                    Software <br></br>Engineer
                  </h5>
                  <h6>2021-Current</h6>
                  <button id="wrapmateBtn" onClick={(e) => viewFull(e)}>
                    <i className="far fa-caret-square-down expand-icon"></i>
                  </button>

                  {fullWM && (
                    <div>
                      <p className="card-text">
                        Wrapmate is an end-to-end digital platform for consumers
                        to get their graphic projects designed, printed and
                        installed. Technologies,platforms & methodologies used
                        include:
                        <ul>
                          <li>Javascript</li>
                          <li>CSS</li>
                          <li>HTML</li>
                          <li>AWS</li>
                          <li>11ty</li>
                          <li>Nunjucks</li>
                          <li>React</li>
                          <li>Google Tag Manager</li>
                          <li>Figma</li>
                          <li>Asana</li>
                          <li>Agile</li>
                          <li>Zapier</li>
                          <li>Pipedream</li>
                          <li>Ruby</li>
                        </ul>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* <div className="col">
              <div className="card exp-card">
                <img
                  id="code-icon"
                  src={coding}
                  alt="code icon"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5>Student of Software Developement</h5>
                  <h6>2020-2021</h6>
                  <button id="softDev" onClick={(e) => viewFull(e)}>
                    <i className="far fa-caret-square-down expand-icon"></i>
                  </button>

                  {fullSD && (
                    <div>
                      <p className="card-text">
                        My interest in coding was initially sparked years ago,
                        but I just recently decided to resign from my finance
                        position to devote all of my available time to learning
                        to code. I completed the UDemy 2021 Complete Web
                        Development Bootcamp and have worked on numerous
                        personal projects to further my knowledge.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div> */}
            <div className="col">
              <div className="card exp-card">
                <a href="https://meketa.com" target="_blank" rel="noreferrer">
                  <img
                    id="meketa-pic"
                    src={meketa}
                    alt="Meketa Investment Group logo"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <h5>Assistant V.P. / Investment Analyst</h5>
                  <h6>2019-2021</h6>
                  <button id="Meketa" onClick={(e) => viewFull(e)}>
                    <i className="far fa-caret-square-down expand-icon"></i>
                  </button>
                  {fullMIG && (
                    <div>
                      <p className="card-text">
                        Meketa is a full-service investment consulting and
                        advisory firm serving institutional investors. I was
                        hired as an Investment Analyst at Meketa following the
                        firm's merger with PCA. Meketa provides the following
                        services to clients: Initial Investment Fund Review,
                        Investment Policy Design, Asset Allocation, Reporting &
                        Analysis, Board Education My responsibilities at Meketa
                        incldued:
                      </p>
                      <ul className="card-text">
                        <li>
                          Serve as project manager for client deliverables
                        </li>
                        <li>
                          Provide internal support for production of reporting
                          and other meeting materials
                        </li>
                        <li>
                          Collaborate with Consultant on client recommendations
                        </li>
                        <li>
                          Interact with research teams to provide services to
                          client
                        </li>
                        <li>
                          Utilize a variety of investment software including
                          Investment Metrics, MPI Stylus, Morningstar, and
                          eVestment.
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card exp-card">
                <img
                  id="pca-pic"
                  src={pca}
                  alt="Pension Consulting Alliance logo"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5>Senior Investment Analyst</h5>
                  <h6>2011-2019</h6>
                  <button id="PCA" onClick={(e) => viewFull(e)}>
                    <i className="far fa-caret-square-down expand-icon"></i>
                  </button>
                  {fullPCA && (
                    <div>
                      <p className="card-text">
                        Pension Consulting Alliance (PCA) was an investing
                        consulting firm that serviced institutional investors
                        like public pension plans. It merged with Meketa
                        Investment Group in 2019. I held several roles at this
                        firm and was evenutally a Senior Investment Analyst. As
                        an Investment Analyst my responsibilities included:{" "}
                      </p>
                      <ul className="card-text">
                        <li>Coordinate small consulting teams</li>
                        <li>
                          Generate investment performance reports, client memos,
                          and presentations
                        </li>
                        <li>Travel and Present to client board meetings</li>
                        <li>Lead a weekly staff meeting</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
