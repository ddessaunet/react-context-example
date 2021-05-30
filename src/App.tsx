import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./components/HomePage";
import FeedPage from "./components/FeedPage";

export default function App() {
  return (
    <div className="App">
      <h1>Context Example</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/feed" component={FeedPage} />
        </Switch>
      </Router>
    </div>
  );
}