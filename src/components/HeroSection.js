import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import v from "./videos/video-1.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video autoPlay loop muted>
        <source src={v} type="video/mp4"></source>
      </video>
      <h1>Adventure awaits</h1>
      <p>What are you waiting for ?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
