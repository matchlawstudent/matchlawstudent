import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
    return (
        <div className="cards">
            <h1>Join the MLS Community</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            style={{ backgroundColor: "#3b462b" }}
                            text="Find law student match your focus"
                            path="/"
                        />
                        <CardItem
                            style={{ backgroundColor: "#808656" }}
                            text="You can make upto 3 appointments per week"
                            path="/"
                        />
                        <CardItem
                            style={{ backgroundColor: "#f8c661" }}
                            text="Connect people within your area"
                            path="/"
                        />
                        <CardItem
                            style={{ backgroundColor: "#6b5126" }}
                            text="Access free credible websites for different area of law"
                            path="/"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
