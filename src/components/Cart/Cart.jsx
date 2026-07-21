import { Link } from "react-router";
import { useOutletContext } from "react-router";

export default function Cart() {
    const {cart, data, loading, error, dispatch} = useOutletContext();

    if (loading) {
        return <div>Loading Cart...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }
    if (cart.length === 0) {
        return (
            <div>
                <p>Cart is empty click <Link to="/Shop">HERE</Link> to shop</p>
            </div>
        )
    }
    const cartItems = getCartItemsData(cart, data);
    console.log(cartItems)
    if (!cartItems) {
        return <div>Loading...</div>
    }

    const total = cartItems.reduce((acc, curr) => {
        return acc + (curr.price * curr.count);
    }, 0)


    return (
        <div>
            <h2>This is the cart page</h2>
            {cartItems.map((item) => {
                return (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>Price: {`$${item.price.toFixed(2)}`}</p>
                        <div>
                            <button onClick={() => {dispatch({type: "removeFromCart", itemId: item.id})}}>Decrease Count</button>
                            <p>QTY: {item.count}</p>
                            <button onClick={() => {dispatch({type: "addItemToCart", newItem: {id: item.id, count: 1},})}}>Increase Count</button>
                        </div>
                        <button onClick={() => {dispatch({type: "removeFromCart", itemId: item.id, amount: item.count})}}>DELETE</button>
                    </div>
                )
            })}
            <div>
                <p>Total: {`$${total.toFixed(2)}`}</p>
            </div>
        </div>
    )
}


function getCartItemsData(cart, data) {
    if (!Array.isArray(data)) return [];
    return cart.map((item) => {
        const matchedItem = data.find((dataItem) => {
            return dataItem.id === item.id;
        });

        return {
            ...matchedItem,
            count: item.count,
        }
    })
}