import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Pages
import BabyBook from "./BabyBook";
import Landing from "./Landing";
import Mello from "./Mello";
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
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
