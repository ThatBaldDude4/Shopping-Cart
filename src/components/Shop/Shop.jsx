import { useOutletContext, useParams } from "react-router";
import ItemCard from "../ItemCard/ItemCard.jsx";

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
            <div className="item-cards-container">
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