import { Link } from "react-router";
import { useOutletContext } from "react-router";
import ItemCard from "./ItemCard";

export default function Shop() {
    const {data, loading, error} = useOutletContext();

    if (error) {
        return <div>Something went wrong please try again later</div>
    };

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            This is the Shop page
            <Link to="/">HOME</Link>
            <Link to="/Cart">Cart</Link>
            <div>
                {data.map((item) => {
                    return <ItemCard 
                        description={item.description}
                        price={item.price}
                        title={item.title}
                        key={item.id}
                        id={item.id}
                    />
                })}
            </div>
        </div>
    )
}