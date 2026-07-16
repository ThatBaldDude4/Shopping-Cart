import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import  useStoreData  from "./useStoreData";
import useCart from "./useCart";

function App() {
    const {data, loading, error} = useStoreData();
    const {cart, addItemToCart, removeFromCart} = useCart();

  return (
    <Outlet context={{data, loading, error, cart, addItemToCart, removeFromCart}}/>
  )
}

export default App
