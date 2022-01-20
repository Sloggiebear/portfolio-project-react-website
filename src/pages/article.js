import { useParams } from 'react-router-dom'
import articles from './articlecontent'
import Articleslist from '../components/articles'
import { useState, useEffect } from 'react'
import CommentsList from '../components/commentslist'
import UpvotesSection from '../components/upvotesSection'
import AddCommentForm from '../components/AddCommentForm'

const Article = () => {
    const url = useParams()
    const article = articles.find(article => article.slug === url.slug )
    const otherarticles = articles.filter(article => article.slug !== url.slug )

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${article.slug}`)
            const body = await result.json()
            setArticleInfo(...body)
        }
        fetchData()
    }, [article.slug])

    if (!article) { 
        return (
            <>
                <h1>Sorry, we cannot find that article.</h1>
                <Articleslist articles={articles} />
            </>
        )
    }
    return (
    <>
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <UpvotesSection upvotes={articleInfo.upvotes} slug={article.slug} setArticleInfo={setArticleInfo} />
            <CommentsList comments={articleInfo.comments} />
            <AddCommentForm />
        </div>
        <hr />
        <h3>Other Articles</h3>
        <Articleslist articles={otherarticles} />
    </>
    )
}

export default Article