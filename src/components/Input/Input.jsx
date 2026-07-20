import { useState } from "react";

export default function Input({count, setCount}) {
    function handleInput(e) {
        let value = e.target.value;

        if (value === "") {
            setCount("");
            return;
        };
        const number = Number(value);

        if (Number.isInteger(number) && number >= 1 && number <= 99) {
            setCount(value);
        }
    };

    function handleInputChange(e) {
        const inputVal = e.target.value;
        if (inputVal === "") {
            setCount(1);
        };
    }

    return (
        <input 
            value={count} 
            type="number" 
            min="0" 
            max="99" 
            onChange={(e) => {handleInput(e)}}
            onBlur={(e) => {handleInputChange(e)}}
        />
    )
}