import { Link } from "react-router";
import { useOutletContext } from "react-router";

export default function Shop() {
    const {mockData} = useOutletContext();

    return (
        <div>
            This is the Shop page
            <Link to="/">HOME</Link>
            <Link to="/Cart">Cart</Link>
            <div>
                Data passed to shop: {mockData}
            </div>
        </div>
    )
}