import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Pages
import BabyBook from "./BabyBook";
import Landing from "./Landing";
import ShowFinder from "./ShowFinder";

const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/babybook" component={BabyBook} />
        <Route exact path="/showfinder" component={ShowFinder} />
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
