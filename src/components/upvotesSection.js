import React from "react"

const UpvotesSection = ({ upvotes, slug, setArticleInfo }) => {
    
    const UpvoteArticle = async () => {
        const result = await fetch(`/api/articles/${slug}/upvote`, {method : "post",})
        const body = await result.json()
        setArticleInfo(...body)
    }
    return (
        <>
            <div id="section-comments">
                <button className="btn-upvote" onClick={UpvoteArticle}>Upvote!</button>
                <p>This post has been updated {upvotes} times.</p>
            </div>
        </>
    )
    }

export default UpvotesSection