import React from "react";
import { useState } from "react";
import "./RandomQuote.css";
import xlogo from "../Assets/xlogo.png";
import refresh from "../Assets/refresh.png";

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
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div className="line"></div>
      <div className="bottom">
        <div className="author">- {quote.author.split(",")[0]}</div>
        <div className="icons">
          <img
            src={refresh}
            onClick={() => {
              random();
            }}
            alt="refresh icon"
          />
          <img
            src={xlogo}
            onClick={() => {
              twitter();
            }}
            alt="x logo"
          />
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
