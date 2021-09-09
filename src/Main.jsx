import { waitForElementToBeRemoved } from "@testing-library/react";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./AboutMe";

//Pages
import BabyBook from "./BabyBook";
import Contact from "./Contact";
import Experience from "./Experience";
import Landing from "./Landing";
import Mello from "./Mello";
import Projects from "./Projects";
import ShowFinder from "./ShowFinder";
import TheCowGoes from "./TheCowGoes";

const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/babybook" component={BabyBook} />
        <Route exact path="/showfinder" component={ShowFinder} />
        <Route exact path="/mello" component={Mello} />
        <Route exact path="/thecowgoes" component={TheCowGoes} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/aboutme" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
