import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Accueil from "./screens/Accueil";
import RATP from "./screens/RATP";
import IqAir from "./screens/IqAir";
import Exemple from "./screens/Exemple";
import Navigation from "./Navigation";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Navigation />

        <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route path="/ratp">
            <RATP />
          </Route>
          <Route path="/iq-air">
            <IqAir />
          </Route>
          <Route path="/exemple">
            <Exemple />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
