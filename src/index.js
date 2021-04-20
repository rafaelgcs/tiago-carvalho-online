import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import 'assets/css/style.css';

// pages for this product
// import Components from "views/Components/Components";
// import LandingPage from "views/LandingPage/LandingPage";
// import ProfilePage from "views/ProfilePage/ProfilePage";
// import LoginPage from "views/LoginPage/LoginPage";
import HomePage from "modules/landing_page/LandingPage";
import Redirection from "modules/redirection/Redirection";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/r/:code" component={Redirection} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
