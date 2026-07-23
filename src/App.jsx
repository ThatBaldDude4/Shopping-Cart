import { Outlet } from "react-router";
import  useStoreData  from "./useStoreData";
import useCart from "./useCart";
import Navbar from "./components/Navbar/Navbar.jsx";
import CompilerTest from "./CompilerTest.jsx";
function App() {
    const {data, loading, error} = useStoreData();
    const {cart, addItemToCart, removeFromCart} = useCart();

  return (
    <div className="app-container">
    <Navbar cartLength={cart.reduce((acc, curr) => {return acc + curr.count}, 0)}/>
    <Outlet context={{data, loading, error, cart, addItemToCart, removeFromCart}}/>
    <CompilerTest count={5} />
    </div>
    
  )
}

export default App
