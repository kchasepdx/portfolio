import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const [currentLoc, setCurrentLoc] = useState("");

  useEffect(() => {
    setCurrentLoc(document.URL.substr(document.URL.lastIndexOf("/")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="nav fixed-top full-nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className={`nav-link active navbar-brand ${
                      currentLoc === "/" ? "current-nav" : null
                    }`}
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown ">
                  <Link
                    className={`nav-link dropdown-toggle navbar-brand ${
                      currentLoc === "/projects" ? "current-nav" : null
                    }`}
                    to="/projects"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Projects
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/projects">
                        About Projects
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/mello">
                        <i className="proj-bull far fa-circle"></i> Mello Store
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/babybook">
                        <i className="proj-bull far fa-circle"></i> Virtual Baby
                        Book
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/thecowgoes">
                        <i className="proj-bull far fa-circle"></i> The Cow Goes
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/showfinder">
                        <i className="proj-bull far fa-circle"></i> Show Finder
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link navbar-brand ${
                      currentLoc === "/experience" ? "current-nav" : null
                    }`}
                    to="/experience"
                  >
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link navbar-brand ${
                      currentLoc === "/aboutme" ? "current-nav" : null
                    }`}
                    to="/aboutme"
                  >
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link navbar-brand ${
                      currentLoc === "/contact" ? "current-nav" : null
                    }`}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Responsive Collapse Nav Bar */}
      <div className="dropdown navbar-narrow">
        <button
          className="fixed-top btn btn-secondary dropdown-toggle dropdown-toggle-split menu-btn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-bars"></i>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className="dropdown-item">
            <Link to="/" className="dropdown-item">
              Home
            </Link>
          </li>

          <li className="dropdown-item">
            <Link to="/experience" className="dropdown-item">
              Experience
            </Link>
          </li>
          <li className="dropdown-item">
            <Link to="/about-me" className="dropdown-item">
              About Me
            </Link>
          </li>
          <li className="dropdown-item">
            <Link to="/contact" className="dropdown-item">
              Contact
            </Link>
          </li>
          <li className="dropdown-item">
            <Link to="/projects" className="dropdown-item">
              Projects
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="dropdown-item">
            <Link to="/showfinder" className="dropdown-item">
              ShowFinder
            </Link>
          </li>
          <li className="dropdown-item">
            <Link to="/babybook" className="dropdown-item">
              Baby Book
            </Link>
          </li>
          <li className="dropdown-item">
            <Link to="/mello" className="dropdown-item">
              Mello
            </Link>
          </li>
          <li className="dropdown-item">
            <Link to="/thecowgoes" className="dropdown-item">
              The Cow Goes..
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
