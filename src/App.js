import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserViewing from "./pages/UserViewing";
import UserVerification from "./pages/UserVerification";
import { createBrowserHistory as createHistory } from "history";
import { Route, HashRouter, Switch } from "react-router-dom";

const history = createHistory();

function App() {
  return (
    <HashRouter history={history}>
      <Switch>
        <Route exact path="/" component={UserViewing} />
        <Route path="/userverification/" component={UserVerification} />
      </Switch>
    </HashRouter>
  );
}

export default App;
