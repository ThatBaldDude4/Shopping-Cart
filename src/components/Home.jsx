import { Link } from "react-router";

export default function Home() {

    return (
        <section>
            <h1>VALDIVIAN</h1>
            <p>
                For your local, and affordable goods
            </p>
            <Link to="/Cart" style={{margin: "10px",}}>CART</Link>
            <Link to="/Shop">SHOP</Link>
        </section>
    )
}