import { useOutletContext, NavLink, useParams } from "react-router";
import Input from "../Input/Input";
import { useState } from "react";

export default function ItemPage() {
    const { data, loading, error, dispatch } = useOutletContext();
    const { id } = useParams();
    const [count, setCount] = useState(1);

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error please try again later</div>
    }
    if (!data) {
        return <div>Loading...</div>
    }
    const cartItem = data.filter(item => item.id === id);

    function handleAddItem() {
        console.log(id)
        dispatch({newItem: {id, count: Number(count)}, type: "addItemToCart"})
    }

    function handleDecrease() {
        setCount(prev => {
            if (prev - 1 <= 0) {
                return 1;
            }else {
                return prev - 1;
            }
        })
    }

    return (
        <div className="item-page-container">
            <h2>{cartItem.title}</h2>
            <img src="null" alt={cartItem.title} />
            <p>{cartItem.description}</p>

            <div className="item-card-count-container">
                <button onClick={handleDecrease}>-</button>
                <Input 
                    count={count}
                    setCount={setCount}
                />
                <button onClick={() => {setCount(prev => prev + 1)}}>+</button>
                <button className="add-to-cart-btn" onClick={handleAddItem}>ADD TO CART</button>
            </div>
            <NavLink to="/Shop">BACK</NavLink>
        </div>
    )
}