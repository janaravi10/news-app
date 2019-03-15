import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={NavBar} />
          <Route path="/" exact component={MainContent} />
        </div>
      </Router>
    );
  }
}

export default App;
