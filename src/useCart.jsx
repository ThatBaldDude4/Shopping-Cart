import {useState} from 'react';

export default function useCart() {
    const [cart, setCart] = useState([]);

    function addItemToCart(newItem) {
        if (
            !newItem || 
            newItem.id === null ||
            typeof newItem.count !== "number" ||
            newItem.count <= 0
        ) {
            return
        };

        setCart(prev => {
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

            return newCart;
        })
    };

    function removeFromCart(itemId, amount = 1) {
        if (amount <= 0) {return}

        setCart(prev => {
            const newCart = [];
            prev.forEach((item) => {
                if (item.id === itemId) {
                    if (amount >= item.count) {
                        return;
                    }else {
                        newCart.push({...item, count: item.count - amount});
                    }
                }else {
                    newCart.push(item);
                }
            });
            return newCart
        })     
    }

    return {cart, addItemToCart, removeFromCart }
}