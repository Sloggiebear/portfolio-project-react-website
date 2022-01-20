import React from "react"

const CommentsList = ({ comments }) => {
    return (
    <>
        <div id="section-comments">
            <h3>Comments</h3>
            {comments.map((comment, key) => (
                <div key={key}>
                    <h4>{comment.username}</h4>
                    <p>{comment.text}</p>
                </div>
            ))}
        </div>
    </>
    )
}

export default CommentsList
