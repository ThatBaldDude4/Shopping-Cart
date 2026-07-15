import { Link } from "react-router";

export default function Shop() {
    return (
        <div>
            This is the cart page
            <Link to="Home">HOME</Link>
            <Link to="Cart">Cart</Link>
        </div>
    )
}