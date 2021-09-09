import React from "react";
import me from "./Images/me-ivy.png";

import Nav from "./Nav";

function About() {
  return (
    <div className="container-fluid proj-div">
      <Nav />
      <div className="section-div">
        <a name="about-me">
          <h1 id="about-h1">About Me</h1>
          <div className="container-fluid">
            <img id="me-pic" src={me} alt="Kristen Chase" />
            <ul className="about-me-text list-group">
              <li id="me-card" className="list-group-item">
                I grew up and went to college in Lawrence, KS. Upon graduating I
                was eager for change and moved to Portland, OR. I secured a
                great job in finance. In my free time I learned a little bit of
                Javascript and would do coding puzzles. I committed to learning
                about finance and was trusted with more and more responsibilties
                until I was eventully promoted to an Investment Analyst. During
                the pandemic I decided to explore coding once again. I
                immediately realized that I had a knack for it. I had to force
                myself to sit down and learn financial concepts, but with coding
                I looked forward to the evenings in front of the screen. After
                about a year I took a big leap and quit my job in order to
                devote all of my availabe time to learning to code. I'm loving
                every minute of it. Hours in front of my computer fly by. I
                especially love the problem solving. It can be tedious and soul
                crushing at times, but it is so rewarding when things work out.
                When I'm not in front of the computer I'm hanging out with my
                family - my husband, our toddler daughter, and our Manchester
                Terrier mix, Rooney. I enjoy cooking, going outdoors to take in
                the natural beaty of the Pacific Northwest, and drinking too
                much coffee. I'm hoping to find a role where I can be a part of
                a strong team, be challenged, and add value.
              </li>
            </ul>
          </div>
        </a>
      </div>
    </div>
  );
}

export default About;
