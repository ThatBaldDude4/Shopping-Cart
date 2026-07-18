import App from "./App"
import Home from "./components/Home/Home.jsx"
import Shop from "./components/Shop/Shop.jsx"
import Cart from "./components/Cart/Cart.jsx"

const routes = [
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "Shop",
                Component: Shop,
            },
            {
                path: "Cart",
                Component: Cart,
            }
        ]
    }
];

export default routes