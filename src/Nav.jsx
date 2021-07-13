import React from "react";

function Nav() {
  return (
    <div className="nav fixed-top">
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
  );
}

export default Nav;
