import React from "react";
import Nav from "./Nav";

function ShowFinder() {
  return (
    <div className="container-fluid">
      <Nav />
      <div id="showfinder-div">
        <h1>Show Finder</h1>
        <a href="https://kchasepdx.github.io/showfinder">
          <button className="btn-primary">Visit</button>
        </a>
        <ul>
          <li>Bootstrap</li>
          <li>CSS</li>
          <li>React</li>
          <li>HTML</li>
          <li>Javascript</li>
          <li>Browser Router</li>
          <li>API</li>
        </ul>
      </div>
    </div>
  );
}

export default ShowFinder;
