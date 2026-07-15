import { Link } from "react-router";
import { useOutletContext } from "react-router";

export default function Home() {
    const {mockData, setMockData} = useOutletContext();
    
    return (
        <div>
            <Link to="/Cart">CART</Link>
            <Link to="/Shop">SHOP</Link>
            <div>
                Data: {mockData}
                <button onClick={() => {setMockData(prev => prev + 1)}}>Increase Data</button>
                <button onClick={() => {setMockData(prev => prev - 1)}}>Decrease Data</button>
            </div>
        </div>
    )
}