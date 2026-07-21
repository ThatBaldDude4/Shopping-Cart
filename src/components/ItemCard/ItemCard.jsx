import { useOutletContext, NavLink } from "react-router";
import { useState } from "react";
import Input from "../Input/Input";
import "./itemCard.css"

export default function ItemCard({title, price, description, id}) {
    const [count, setCount] = useState(1);
    const {addItemToCart} = useOutletContext();

    function handleAddItem() {
        addItemToCart({id, count: Number(count)})
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

    function handleInputChange(e) {
        const inputVal = e.target.value;
        if (inputVal === "") {
            setCount(1);
        };
    }

    return (
        <div className="item-card">
            <h3>{title}</h3>
            <p>Price: <span className="bold">{`$${price.toFixed(2)}`}</span></p>
            <div className="item-card-count-container">
                <button onClick={handleDecrease}>-</button>
                <Input count={count} setCount={setCount}/>
                <button onClick={() => {setCount(prev => prev + 1)}}>+</button>
                <button className="add-to-cart-btn" onClick={handleAddItem}>ADD TO CART</button>
            </div>
            <NavLink to={`/Shop/products/${id}`}>Details</NavLink>
        </div>
    )
}