import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <>  
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <ul className="nav">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/articles-list">Articles</Link></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Nav