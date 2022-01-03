import { useParams } from 'react-router-dom'

import articles from './articlecontent'
import Articleslist from '../components/articles'

const Article = () => {
    const url = useParams()
    const article = articles.find(article => article.slug === url.slug )
    const otherarticles = articles.filter(article => article.slug !== url.slug )

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
        </div>
        <hr />
        <h4>Other Articles</h4>


        <Articleslist articles={otherarticles} />

    </>
    )
}

export default Article