import React, { useState } from "react";
import "./PostPage.css";
import questions from "./questions";
import PostCard from "./PostCard";

function PostPage() {
    const [question, setQuestion] = useState([]);

    function handleEvent(event) {
        console.log(event.target.id);
        let id = event.target.id;
        setQuestion(questions[id]);
        console.log(questions[id]);
    }

    return (
        <div className="container">
            <div className="top-button">
                <button
                    className="post--btn"
                    id="immigration"
                    onClick={handleEvent}
                >
                    Immigration
                </button>
                <button className="post--btn" id="tenant" onClick={handleEvent}>
                    Tenant Law
                </button>
                <button className="post--btn" id="labor" onClick={handleEvent}>
                    Labor Law
                </button>
                <button
                    className="post--btn"
                    id="traffic"
                    onClick={handleEvent}
                >
                    Traffic Law
                </button>
            </div>
            <div className="bottom-post">
                {question.map((obj) => (
                    <PostCard
                        key={obj.question}
                        q={obj.question}
                        a={obj.answer}
                    />
                ))}
            </div>
        </div>
    );
}
export default PostPage;
