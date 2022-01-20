import { useState } from "react";

const AddCommentForm = ( {slug} ) => {

    const [username, setUsername] = useState("");
    const [commentText, setcommentText] = useState("");

    const AddCommnet = async () => {
        // const result = await fetch(`/api/${slug}/addcomment`, {method: "post"})
    }

    return (
    <>
        <div id="addcommentsform">
            <label className="form-label" htmlFor="username" >Your Name:
                <input className="form-control" value={username} onChange={ (e) => {setUsername(e.target.value)}} type="text" name="username" id="userame" placeholder="Your Name" required />
            </label>
            <label className="form-label" htmlFor="comment">Add a Comment:
                <textarea className="form-control" value={commentText} onChange={ (e) => {setcommentText(e.target.value)}} name="comment" id="comment" cols="50" rows="5" placeholder="Write your comment..." required></textarea>
            </label>
            <button id="submitcomment" onClick={AddCommnet}>Add Comment</button>
        </div>
    </>
    )
    }

export default AddCommentForm