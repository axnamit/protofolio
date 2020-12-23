import React from "react";
import { Button, Container } from "react-bootstrap";
import bg_img from "./assets/bg.png";

export const Home = (props) => {
  return (
    <div className="home">
      <div className="intro">
        <h2 className="homeintrotext">Hi,</h2>
        <br />
        <h3 className="homeintrotext">My name is Amit kumar</h3>
      </div>
      <div className="ss">
        <img src={bg_img} width="600vh" className="home_img" />
      </div>
      <div className=""></div>
    </div>
  );
};
