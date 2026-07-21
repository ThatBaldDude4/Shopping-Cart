import {useReducer} from 'react';

export default function useCart() {
    const [cart, dispatch] = useReducer(reducer, []);
    return {cart, dispatch }
}

function reducer(state, action) {
    console.log("reducer fired")
    const prev = state;

    if (action.type === "removeFromCart") {
        const itemId = action.itemId;
        const amount = action?.amount ? action.amount : 1;

        if (amount <= 0) {return prev}

        const newCart = [];
        prev.forEach((item) => {
            if (item.id === itemId) {
                if (amount >= item.count) {
                    return state;
                }else {
                    newCart.push({...item, count: item.count - amount});
                }
            }else {
                newCart.push(item);
            }
        });
        return newCart;
    };

    if (action.type === "addItemToCart") {
        const newItem = action.newItem;
        if (
            !newItem || 
            newItem.id === null ||
            typeof newItem.count !== "number" ||
            newItem.count <= 0
        ) {
            return prev;
        };

        const newCart = [];
        let foundMatch = false;

        prev.forEach((item) => {
            if (item.id === newItem.id) {
                newCart.push({...item, count: item.count + newItem.count});
                foundMatch = true;
            }else {
                newCart.push(item);
            }
        });

        if (!foundMatch) {
            newCart.push(newItem);
        }
        console.log(newCart)
        return newCart;
    };
};