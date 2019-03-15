import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={NavBar} />
          <Route path="/" exact component={MainContent} />
          <Route path="/" component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
