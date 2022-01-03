import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <>  
        <div className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/articles-list">Articles</Link></li>
            </ul>
        </div>
        </>
    )
}

export default Nav