import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./App.module.scss";
import { Home } from "./home/Home";
import { AboutMe } from "./about/AboutMe";

class App extends React.Component {
  render() {
    return (
      <div className={styles.AppThings}>
        <BrowserRouter>
          <Switch>
            <Route path="/about">
              <AboutMe />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
