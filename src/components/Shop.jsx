import { Link } from "react-router";

export default function Shop() {
    return (
        <div>
            This is the Shop page
            <Link to="/">HOME</Link>
            <Link to="/Cart">Cart</Link>
        </div>
    )
}