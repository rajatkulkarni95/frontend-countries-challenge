import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { HomePage } from "../pages/home-page";
import { DetailedView } from "../pages/details-page";

export const Routes = ({ countries }) => (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage countries={countries} />
      </Route>
      <Route exact path="/home">
        <HomePage countries={countries} />
      </Route>
      <Route path="/country/:id">
        <DetailedView countries={countries} />
      </Route>
    </Switch>
  </Router>
);
