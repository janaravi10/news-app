import React, { Component } from "react";
import { Row } from "reactstrap";
export default class Footer extends Component {
  render() {
    return (
      <footer
        className="container-fluid bg-dark"
        style={{ height: "80px" }}
      >
        <Row>&copy; copyright @ NEWS 24/7</Row>
      </footer>
    );
  }
}
