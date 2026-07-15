import { Link } from "react-router";

export default function Cart() {
    return (
        <div>
            This is the cart page
            <Link to="Home">HOME</Link>
            <Link to="Shop">SHOP</Link>
        </div>
    )
}