import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Options from "./Options";
import "../css/mainContent.css";
export default class MainContent extends Component {
  state = {
    news: [],
    isLoading: true
  };
  componentDidMount = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=e12c815d5ca54ead874a01c0feb3d58d"
      )
      .then(res => {
        if (res.data.status === "ok") {
          this.setState({ news: res.data.articles, isLoading: false });
        }
      });
  };
  renderNews = () => {
    const { news } = this.state;
    return news.map(data => {
      return (
        <Row style={{ height: "150px" }} className="my-5">
          <Col className="col-3 h-100">
            <img src={data.urlToImage} className="rounded h-100 mw-100 w-100" />
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
      <Container>
        <Options />
        {this.state.isLoading === false ? (
          this.renderNews()
        ) : (
          <div className="row">
            <div className="lds-hourglass m-auto" />
          </div>
        )}
      </Container>
    );
  }
}
