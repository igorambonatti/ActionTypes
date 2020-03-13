import React from "react";

import { Switch, Route } from "react-router-dom";

import Contador from "../pages/Contador/index";
import Inicial from "../pages/Inicial/index";

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Inicial}></Route>
      <Route path="/contador" component={Contador}></Route>
    </Switch>
  );
}
