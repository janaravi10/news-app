import React, { Component } from "react";
import { Row, Col } from "reactstrap";
export default class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid bg-dark">
        <Row className="p-3 text-white d-flex">
          <Col className="col-lg-4 col-12">
            &copy; copyright @ NEWS 24/7
          </Col>
          <Col className="col-lg-4 col-12">
            <b> Technology stack used</b>
            <span> React , Redux , Reactstrap , Bootstrap</span>
          </Col>
          <Col className="col-lg-4 col-12">
            <b>
              Thanks to <a href="https://newsapi.org/"> newsapi.org </a>
              for their awesome api
            </b>
          </Col>
        </Row>
      </footer>
    );
  }
}
