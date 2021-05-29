import React from "react";

function PostCard(props) {
    return (
        <>
            <div className="post_container">
                <h3 className="post_question">{props.q}</h3>
                <p className="post_answer">{props.a}</p>
            </div>
        </>
    );
}
export default PostCard;
