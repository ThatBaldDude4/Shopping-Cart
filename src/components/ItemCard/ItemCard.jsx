import { useOutletContext } from "react-router";
import { useState } from "react";
import "./itemCard.css"

export default function ItemCard({title, price, description, id}) {
    const [count, setCount] = useState(1);
    const {addItemToCart, removeFromCart} = useOutletContext();

    function handleAddItem() {
        addItemToCart({id, count})
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

    function handleInput(e) {
        let number = Number(e.target.value);
        if (number > 99) {
            return;
        }
        setCount(e.target.value);
    };

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
            <p>
                {description.slice(0, 125) + "..."}
            </p>
            <div className="item-card-count-container">
                <button onClick={handleDecrease}>-</button>
                <input 
                    value={count} 
                    type="number" 
                    min="0" 
                    max="99" 
                    onChange={(e) => {handleInput(e)}}
                    onBlur={(e) => {handleInputChange(e)}}
                />
                <button onClick={() => {setCount(prev => prev + 1)}}>+</button>
                <button className="add-to-cart-btn" onClick={handleAddItem}>ADD TO CART</button>
            </div>
        </div>
    )
}