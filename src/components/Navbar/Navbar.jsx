import { Link } from "react-router"

export default function Navbar() {
    return (
        <div class="navbar-container">
            <div class="brand-name-container">
                <Link to="/">VALIDVIAN</Link>
            </div>
            <div class="page-links-container">
                <Link to="/">HOME</Link>
                <Link to="Shop">SHOP</Link>
                <Link to="Cart">CART</Link>
            </div>
        </div>
    )
}