import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Login from "~/pages/Login";
import SignUp from "~/pages/SignUp";

import Dashboard from "~/pages/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/" exact component={Dashboard} isPrivate />
    </Switch>
  );
}
