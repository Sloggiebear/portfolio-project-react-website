import { Link } from 'react-router-dom'

const Articleslist = ({ articles }) => {
    return (
        <>
            {articles.map((article, key) => (
                <Link key={key} to={`/article/${article.slug}`}>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
                </Link>
            ))}
        </>
        )
    }

export default Articleslist