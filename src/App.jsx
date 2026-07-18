import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import  useStoreData  from "./useStoreData";
import useCart from "./useCart";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
    const {data, loading, error} = useStoreData();
    const {cart, addItemToCart, removeFromCart} = useCart();

  return (
    <>
    <Navbar cartLength={cart.length}/>
    <Outlet context={{data, loading, error, cart, addItemToCart, removeFromCart}}/>
    </>
    
  )
}

export default App
