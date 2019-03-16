import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { setLanguage } from "../actions/newsAction";
class Options extends Component {
  render() {
    return (
      <Row className="my-3">
        <Col className="col-sm-12 col-lg-2">
          <label className="text-muted">Language</label>
          <select className="form-control" onChange={this.props.updateLanguage}>
            <option value="en">en</option>
            <option value="ar">ar</option>
            <option value="de">de</option>
            <option value="es">es</option>
            <option value="fr">fr</option>
            <option value="he">he</option>
            <option value="it">it</option>
            <option value="nl">nl</option>
            <option value="no">no</option>
            <option value="pt">pt</option>
            <option value="ru">ru</option>
            <option value="se">se</option>
            <option value="ud">ud</option>
            <option value="zh">zh</option>
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
const mapStateToProps = state => {
  return {
    language: state.newsReducer.language,
    sortBy: state.newsReducer.sortBy
  };
};
const mapDispatchToProps = {
  updateLanguage: setLanguage
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);
