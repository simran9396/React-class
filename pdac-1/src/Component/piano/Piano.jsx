import React from "react";
import { Button, Card } from "react-bootstrap";
// import "./Piano.css";

export const Piano = () => {
  const handleplay = (bit) => {
    const audio = new Audio(`Mp3/${bit}.mp3`);
    audio.play();
  };
  document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "a" && handleplay("A"));
    if (e.key === "s" && handleplay("B"));
    if (e.key === "d" && handleplay("C"));
    if (e.key === "f" && handleplay("D"));
    if (e.key === "l" && handleplay("E"));
    if (e.key === "k" && handleplay("F"));
    if (e.key === "A" && handleplay("G"));
    if (e.key === "S" && handleplay("Ab"));
    if (e.key === "D" && handleplay("Bb"));
    if (e.key === "F" && handleplay("Db"));
    if (e.key === "G" && handleplay("Eb"));
    if (e.key === "H" && handleplay("Gb"));
    e.stopPropagation();
  });
  return (
    <div>
      <Button
        className="sa"
        onClick={() => {
          handleplay("A");
        }}
      >
        Sa
      </Button>
      <Button
        className="re"
        onClick={() => {
          handleplay("B");
        }}
      >
        Re
      </Button>
      <Button
        className="ga"
        onClick={() => {
          handleplay("C");
        }}
      >
        Ga
      </Button>
      <Button
        className="ma"
        onClick={() => {
          handleplay("D");
        }}
      >
        Ma
      </Button>
      <Button
        className="pa"
        onClick={() => {
          handleplay("E");
        }}
      >
        Pa
      </Button>
      <Button
        className="dha"
        onClick={() => {
          handleplay("F");
        }}
      >
        Dha
      </Button>
      <Button
        className="ni"
        onClick={() => {
          handleplay("G");
        }}
      >
        ni
      </Button>
    </div>
  );
};
