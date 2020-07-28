import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "../pages/home-page";
import { DetailedView } from "../pages/details-page";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/home">
        <HomePage />
      </Route>
      <Route path="/country/:id">
        <DetailedView />
      </Route>
    </Switch>
  </Router>
);
