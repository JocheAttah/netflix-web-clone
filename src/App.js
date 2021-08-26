import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import * as ROUTES from "./constants/routes";
import { Browse, Signin, Signup } from "./pages";

export default function App() {
  return (
    <>
      <Router>
        <Route exact path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route exact path={ROUTES.SIGN_IN}>
          <Signin />
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          <Signup />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </Router>
    </>
  );
}
