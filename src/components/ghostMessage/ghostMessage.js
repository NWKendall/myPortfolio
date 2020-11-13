import React from "react";
import "./ghostMessage.css";

const GhostMessage = () => {
  const message1 = [
    "F",
    "u",
    "l",
    "l",
    "s",
    "t",
    "a",
    "c",
    "k",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    " ",
  ];

  
  const message2 = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "E",
    "n",
    "g",
    "i",
    "n",
    "e",
    "e",
    "r",
  ];

  return (
    <div className="container">
      <ul className="messageContainer">
        {message1.map((chr, key) =>
          chr === " " ? (
            <h3 key={key} className="spacing">_</h3>
          ) : (
            <h3 key={key} className="letter">{chr}</h3>
          )
        )}
        
        </ul>
        <h3 className="letter and">&</h3>
      <ul className="messageContainer">
        {message2.map((chr, key) =>
          chr === " " ? (
            <h3 key={key} className="spacing">_</h3>
          ) : (
            <h3 key={key} className="letter">{chr}</h3>
          )
        )}

      </ul>
    </div>
  );
};

export default GhostMessage;
