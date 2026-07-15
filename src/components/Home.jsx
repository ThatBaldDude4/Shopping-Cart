import { Link } from "react-router";

export default function Home() {
    return (
        <div>
            This is the cart page
            <Link to="Cart">CART</Link>
            <Link to="Shop">SHOP</Link>
        </div>
    )
}