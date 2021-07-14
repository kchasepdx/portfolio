import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="nav fixed-top full-nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              Home
            </a>
            <a class="navbar-brand" href="/#projects">
              Projects
            </a>
            <a class="navbar-brand" href="/#experience">
              Experience
            </a>
            <a class="navbar-brand" href="/#about-me">
              About Me
            </a>
            <a class="navbar-brand" href="/#contact">
              Contact
            </a>
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
          <i class="fas fa-bars"></i>
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
