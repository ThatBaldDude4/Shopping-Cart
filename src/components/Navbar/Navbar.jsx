import { Link, NavLink, useParams } from "react-router";
import "./navbar.css"

export default function Navbar() {
    const params = useParams();

    console.log
    return (
        <div className="navbar-container">
            <div className="brand-name-container">
                <Link to="/" className="nav-link">VALIDVIAN</Link>
            </div>
            <div className="page-links-container">
                <NavLink to="/" end className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>HOME</NavLink>
                <NavLink to="Shop" end className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>SHOP</NavLink>
                <NavLink to="Cart" end className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>CART</NavLink>
            </div>
        </div>
    )
}