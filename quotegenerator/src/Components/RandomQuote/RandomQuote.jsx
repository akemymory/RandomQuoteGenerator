import React from "react";
import { useState } from "react";
import "./RandomQuote.css";
import xlogo from "../Assets/xlogo.png";
import refresh from "../Assets/refresh.png";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const RandomQuote = () => {
  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${
        quote.author.split(",")[0]
      }`
    );
  };

  const [quote, setQuote] = useState({
    text: "Life is not a problem to be solved but a reality to be experienced",
    author: "Søren Kierkegaard",
  });

  loadQuotes();

  return (
    <Container fluid="sm">
      <div className="container">
        <Row>
          <Col sm={12}>
            <div className="quote">{quote.text}</div>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <p className="author">- {quote.author.split(",")[0]}</p>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div className="icons">
              <img
                className="icons"
                src={refresh}
                onClick={() => {
                  random();
                }}
                alt="refresh icon"
              />
              <img
                className="icons"
                src={xlogo}
                onClick={() => {
                  twitter();
                }}
                alt="x logo"
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default RandomQuote;
