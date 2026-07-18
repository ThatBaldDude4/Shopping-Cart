import { Link, NavLink, useOutletContext } from "react-router";
import "./navbar.css"

export default function Navbar({cartLength}) {
    const cartCount = cartLength > 0 ? cartLength : "";
    return (
        <div className="navbar-container">
            <div className="brand-name-container">
                <Link to="/" className="nav-link">VALIDVIAN</Link>
            </div>
            <div className="page-links-container">
                <NavLink to="/" end className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>HOME</NavLink>
                <NavLink to="Shop" end className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>SHOP</NavLink>
                <NavLink to="Cart" end className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>CART <span>{cartCount}</span></NavLink>
            </div>
        </div>
    )
}