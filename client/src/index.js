import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss?v=1.0.0";
import "./assets/demo/demo.css";

import Index from "./views/Index.jsx";
import RegisterPage from "./views/examples/RegisterPage.jsx";
import LoginPage from "./views/examples/LoginPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={props => <Index {...props} />} />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/login-page"
        render={props => <LoginPage {...props} />}
      />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
