import React from "react";
import { Link } from "react-router-dom";

function Nav() {
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
                    className="nav-link active navbar-brand"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown ">
                  <a
                    className="nav-link dropdown-toggle navbar-brand"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Projects
                  </a>
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
                  <Link className="nav-link navbar-brand" to="/experience">
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navbar-brand" to="/aboutme">
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navbar-brand" to="/contact">
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
            <a href="/" className="dropdown-item">
              Home
            </a>
          </li>
          <li className="dropdown-item">
            <a href="/#projects" className="dropdown-item">
              Projects
            </a>
          </li>

          <li className="dropdown-item">
            <a href="/#experience" className="dropdown-item">
              Experience
            </a>
          </li>
          <li className="dropdown-item">
            <a href="/#about-me" className="dropdown-item">
              About Me
            </a>
          </li>
          <li className="dropdown-item">
            <a href="/#contact" className="dropdown-item">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
