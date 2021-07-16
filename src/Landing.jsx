import "./App.css";
import Nav from "./Nav";
import screenshot from "./Images/code-screenshot.png";
import me from "./Images/kristen-circle.png";
import babyBook from "./Images/baby-book.png";
import meketa from "./Images/Meketa.png";
import pca from "./Images/PCA-logo.png";
import showfinder from "./Images/showfinder.png";
import hikepic from "./Images/me-hiking.png";
import coding from "./Images/coding.png";

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
      <div className="section-div">
        <a name="projects">
          <h1>Projects</h1>
          <div className="container">
            <div className="row">
              <div className="col">
                <a href="https://baby-book.netlify.app">
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
                  href="https://kchasepdx.github.io/showfinder"
                  alt="Visit Showfinder"
                >
                  <img
                    id="showfinder-pic"
                    src={showfinder}
                    alt="screenshot of Showfinder app landing page"
                    className="project-pic"
                  />
                </a>
              </div>
              {/* <div className="col">
                <img
                  className="project-pic"
                  src={showfinder}
                  alt="Card image cap"
                />
              </div> */}
              <div className="w-100"></div>
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
              {/* <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">TBD</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </a>
      </div>
      <div className="section-div">
        <a name="experience">
          <h1 id="exp-header">Experience</h1>
        </a>
        <div className="container-fluid">
          <div className="row">
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
                  <p className="card-text">
                    Pension Consulting Alliance (PCA) was an investing
                    consulting firm that serviced institutional investors like
                    public pension plans. It merged with Meketa Investment Group
                    in 2019. I held several roles at this firm and was
                    evenutally a Senior Investment Analyst. As an Investment
                    Analyst my responsibilities included:{" "}
                  </p>
                  <ul className="card-text">
                    <li>Coordinate small consulting teams</li>
                    <li>
                      Generate investment performance reports, client memos, and
                      presentations
                    </li>
                    <li>Travel and Present to client board meetings</li>
                    <li>Lead a weekly staff meeting</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card exp-card">
                <img
                  id="meketa-pic"
                  src={meketa}
                  alt="Meketa Investment Group logo"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5>Assistant V.P. / Investment Analyst</h5>
                  <h6>2019-2021</h6>
                  <p className="card-text">
                    Meketa is a full-service investment consulting and advisory
                    firm serving institutional investors. I was hired as an
                    Investment Analyst at Meketa following the firm's merger
                    with PCA. Meketa provides the following services to clients:
                    Initial Investment Fund Review, Investment Policy Design,
                    Asset Allocation, Reporting & Analysis, Board Education My
                    responsibilities at Meketa incldued:
                  </p>
                  <ul className="card-text">
                    <li>Serve as project manager for client deliverables</li>
                    <li>
                      Provide internal support for production of reporting and
                      other meeting materials
                    </li>
                    <li>
                      Collaborate with Consultant on client recommendations
                    </li>
                    <li>
                      Interact with research teams to provide services to client
                    </li>
                    <li>
                      Utilize a variety of investment software including
                      Investment Metrics, MPI Stylus, Morningstar, and
                      eVestment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card exp-card">
                <img
                  id="code-icon"
                  src={coding}
                  alt="code icon"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5>Student of Software Developement</h5>
                  <h6>2020-Current</h6>
                  <p className="card-text">
                    My interest in coding was initially sparked years ago, but I
                    just recently decided to quit my finance position to devote
                    all of my available time to learning to code. I completed
                    the UDemy 2021 Complete Web Development Bootcamp and have
                    worked on numerous personal projects to further my
                    knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="r-100"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </div>
      <div className="section-div">
        <a name="about-me">
          <h1 id="about-h1">About Me</h1>
          <div className="container-fluid">
            <img id="me-pic" src={me} alt="Kristen Chase" />
            <ul className="about-me-text list-group">
              <li id="me-card" className="list-group-item">
                I grew up and went to college in Lawrence, KS. I moved to
                Portland, OR over ten years ago. I secured a great job in
                finance and kept getting promoted, but never felt super
                passionate about my work. After the pandemic I decided to take a
                big leap and quit my job in order to devote my free time to
                learning to code. I'm loving every minute of it. Hours in front
                of my computer fly by. I especially love the problem solving. It
                can be tedious and annoying at times, but it is so rewarding
                when things work out. When I'm not in front of the computer I'm
                hanging out with my family - my husband, our 18 month old
                daughter, and our manchester terrier mix, Rooney. I enjoy
                cooking, going outdoors to take in the natural beaty of the
                Pacific Northwest, and drinking too much coffee. I'm hoping to
                find a job where I can be a part of a strong team, be
                challenged, and add value.
              </li>
            </ul>
          </div>
        </a>
      </div>
      <div className="section-div">
        <a name="contact">
          <h1>Contact</h1>
          <img id="hike-pic" src={hikepic} alt="Kristen Chase hiking" />
        </a>
        <div className="container contact-btns">
          <div className="row icon-row">
            <div className="col">
              <button className="btn-primary contact-button">
                <a
                  href="https://github.com/kchasepdx"
                  className="fab fa-github"
                ></a>{" "}
                Github
              </button>
            </div>
            <div className="col">
              <button className="btn-primary contact-button">
                <a href="mailto:kchasepdx@gmail.com" className="fas fa-at"></a>{" "}
                Email
              </button>
            </div>
            <div className="col">
              <button className="btn-primary contact-button">
                <a
                  href="https://www.linkedin.com/in/kristenchasepdx"
                  className="fab fa-linkedin"
                ></a>{" "}
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
