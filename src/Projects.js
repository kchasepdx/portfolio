import React from "react";
import babyBook from "./Images/baby-book.png";
import showfinder from "./Images/showfinder.png";
import mello from "./Images/mello-circle.png";
import theCow from "./Images/thecowgoes.png";
import Nav from "./Nav";

function Projects() {
  return (
    <div className="container-fluid proj-div">
      <Nav />
      <div>
        <h1>Projects</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <a
                href="https://baby-book.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="baby-book-pic"
                  src={babyBook}
                  alt="screenshot of Virtual Baby Book app landing page"
                  className="project-pic"
                />
              </a>
            </div>

            <div className="col">
              <a
                href="https://theshowfinder.netlify.app/"
                alt="Visit Showfinder"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="showfinder-pic"
                  src={showfinder}
                  alt="screenshot of Showfinder app landing page"
                  className="project-pic"
                />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="col">
                <div className="card project-card">
                  <div className="card-body">
                    <a className="h5-anchor" href="/babybook">
                      <h5 className="card-title">Virtual Baby Book</h5>
                    </a>
                    <p className="card-text">
                      Website that allows parents to store memories about their
                      baby’s first years virtually. Includes a social media
                      component where users can share and comment about funny
                      stories.
                      <span>
                        <a href="/babybook" className="inline-link">
                          {" "}
                          Learn more.
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card project-card">
                <div className="card-body">
                  <a className="h5-anchor" href="/showfinder">
                    <h5 className="card-title">Show Finder</h5>
                  </a>
                  <p className="card-text">
                    Website that utilizes an API to suggest a tv show for the
                    user based on responses to a short quiz. Also includes a
                    trivia game.
                    <span>
                      <a href="/showfinder" className="inline-link">
                        {" "}
                        Learn more.
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* SECOND ROW */}
          <div className="row">
            <div className="col">
              <a
                href="https://mellostore.herokuapp.com"
                alt="Visit Mello"
                target="_blank"
                rel="noreferrer"
              >
                <img className="project-pic" src={mello} alt="site screencap" />
              </a>
            </div>

            <div className="col">
              <a
                href="https://thecowgoes.netlify.app"
                alt="Visit The Cow Goes"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="project-pic"
                  src={theCow}
                  alt="site screencap"
                />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="col">
                <div className="card project-card">
                  <div className="card-body">
                    <a className="h5-anchor" href="/mello">
                      <h5 className="card-title">Mello Clothing Store</h5>
                    </a>
                    <p className="card-text">
                      E-commerce site with custom built front and back end.
                      Connects to a MongoDB database which stores user and
                      product data.
                      <span>
                        <a href="/mello" className="inline-link">
                          {" "}
                          Learn more.
                        </a>
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card project-card">
                <div className="card-body">
                  <a className="h5-anchor" href="/thecowgoes">
                    <h5 className="card-title">The Cow Goes ...</h5>
                  </a>
                  <p className="card-text">
                    Fun site for kids with animal sounds, colorful piano, and
                    two player memory game.
                    <span>
                      <a href="/thecowgoes" className="inline-link">
                        {" "}
                        Learn more.
                      </a>
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
