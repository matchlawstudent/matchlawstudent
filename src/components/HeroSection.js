import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero-container">
            {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
            <h1>Match Law Students</h1>
            <p>Bridge The Gap of Legal Access</p>

            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--whiteOutline"
                    buttonSize="btn--large"
                >
                    Washington
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btn--whiteOutline"
                    buttonSize="btn--large"
                    onClick={console.log("hey")}
                >
                    More State Coming Soon
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
