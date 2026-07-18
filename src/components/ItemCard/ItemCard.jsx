import { useOutletContext } from "react-router";
import { useState } from "react";

export default function ItemCard({title, price, description, id}) {
    const [count, setCount] = useState(1);
    const {addItemToCart, removeFromCart} = useOutletContext();

    function handleAddItem() {
        console.log(id)
        addItemToCart({id, count})
    }

    function handleDecre() {
        setCount(prev => {
            if (prev - 1 <= 0) {
                return 1;
            }else {
                return prev - 1;
            }
        })
    }

    return (
        <div className="item-card">
            <h3>{title}</h3>
            <p>Price: {price}</p>
            <p>{description}</p>
            <div>
                <button onClick={handleDecre}>-</button>
                <div>{count}</div>
                <button onClick={() => {setCount(prev => prev + 1)}}>+</button>
            </div>
            <button onClick={handleAddItem}>ADD TO CART</button>
        </div>
    )
}