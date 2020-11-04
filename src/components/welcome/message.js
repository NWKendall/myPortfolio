import React from "react";
import "./message.css";

const GhostMessage = () => {
  const messageString = [
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
    "&",
    " ",
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
    <ul className="messageContainer">
      {messageString.map((chr) =>
        chr === " " ? (
          <h3 className="spacing">_</h3>
        ) : (
          <h3 className="letter">{chr}</h3>
        )
      )}
    </ul>
  );
};

export default GhostMessage;
