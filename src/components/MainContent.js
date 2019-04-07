import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import Options from "./Options";
import { connect } from "react-redux";
import "../css/mainContent.css";
import { getNews } from "../actions/newsAction";
class MainContent extends Component {
  componentDidMount = () => {
    this.props.getNews();
  };
  renderNews = () => {
    const { news } = this.props;
    return news.map((data,index) => {
      return (
        <Row style={{ height: "auto" }} className="my-5" key={index}>
          <Col className="sm-col-12 md-col-3 h-100">
            <img src={data.urlToImage} className="rounded h-100 mw-100 w-100" alt="News image"/>
          </Col>
          <Col>
            <h5>
              <NavLink to="/post/">{data.title}</NavLink>
            </h5>
            <p>{data.description}</p>
            <Row>
              <Col className="col-6">
                <p>
                  Published at :
                  <span className="text-muted"> {data.publishedAt}</span>
                </p>
              </Col>
              {data.author ? (
                <Col className="col-6">
                  <p>
                    Author : <span className="text-muted">{data.author}</span>
                  </p>
                </Col>
              ) : (
                ""
              )}
            </Row>
          </Col>
        </Row>
      );
    });
  };
  render() {
    return (
      <Container style={{ minHeight: "100vh" }}>
        <Options />
        {this.props.isLoading === false ? (
          this.props.errorExist === false ? (
            this.renderNews()
          ) : (
            this.props.error
          )
        ) : (
          <div className="row mt-5">
            <div className="lds-hourglass m-auto" />
          </div>
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    news: state.newsReducer.news,
    isLoading: state.newsReducer.isLoading,
    error: state.newsReducer.error,
    errorExist: state.newsReducer.errorExist
  };
};
const mapDispatchToProps = {
  getNews: getNews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent);
