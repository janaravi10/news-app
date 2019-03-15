import React, { Component } from "react";
import { Row, Col } from "reactstrap";
export default class Options extends Component {
  render() {
    return (
      <Row className="my-3">
        <Col className="col-sm-12 col-lg-2">
          <label className="text-muted">Language</label>
          <select className="form-control" id="">
            <option value="EN">en</option>
            <option value="AR">ar</option>
            <option value="AR">de</option>
            <option value="AR">es</option>
            <option value="AR">fr</option>
            <option value="AR">he</option>
            <option value="AR">it</option>
            <option value="AR">nl</option>
            <option value="AR">no</option>
            <option value="AR">pt</option>
            <option value="AR">ru</option>
            <option value="AR">se</option>
            <option value="AR">ud</option>
            <option value="AR">zh</option>
          </select>
        </Col>
        <Col className="col-sm-12 col-lg-2">
          <label className="text-muted">Sort by</label>
          <select className="form-control" id="">
            <option value="RELEVANCY">relevancy</option>
            <option value="POPULARITY">popularity</option>
            <option value="PUBLISHEDAT">publishedAt</option>
          </select>
        </Col>
        <Col className="col-lg-8 mt-4">
          <div className="input-group mb-3 w-50 float-right">
            <input
              type="text"
              className="form-control"
              placeholder="News keywords.."
              aria-label="News keywords.."
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                Search
              </button>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
